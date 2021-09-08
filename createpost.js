import React, {useEffect, useState} from 'react';
import { API, graphqlOperation, Storage } from 'aws-amplify'
import awsExports from "../../../aws-exports";
import { createFile, createGroupUsers, createPost, updatePost } from '../../../graphql/mutations';
import {useDropzone} from 'react-dropzone';
import './css/CreatePostModal.css';
import { useUser } from '../../../context/userContext';
import { getPostDetailsForPostModal, listGroupsForCreatePost, listGroupUsersForCreatePost } from '../../../graphql-custom/queries';
import { ReactSortable } from "react-sortablejs";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { decodeURL, generateFileUrl } from '../../../Utility/Util';


/**
 * Modal for creating new post. Goes in header
 * @param {*} props Necessary props:
 *      props.show - Boolean to determine whether modal is visible or not.
 *      props.onClose - Function to handle on close
 */

function CreatePostModal(props) {



    /**
     *  State variables
     */

    // 
    const [post, setPost] = useState([]);

    //
    const [subject, setSubject] = useState();

    // 
    const [featured, setFeatured] = useState(0);

    // 
    const [groups, setGroups] = useState([]);

    //
    const [unjoinedGroups, setUnjoinedGroups] = useState([]);

    // 
    const [selectedGroup, setSelectedGroup] = useState(null);

    // 
    const [createStatus, setCreateStatus] = useState(false);

    //
    const [parent, setParent] = useState(0);

    //
    const [postID, setPostID] = useState("");

    //
    const [deletedPosts] = useState([]);

    //
    const [groupMenu, setGroupMenu] = useState(true);



    /**
     *  React Hooks
     */

    //
    const location = useLocation();

    //
    const {user} = useUser();

    //
    const history = useHistory();

    //
    const params = useParams();

    //
    const paramIsEmpty = (params && Object.keys(params).length === 0);

    //
    const {getRootProps, getInputProps, open} = useDropzone({
        accept: 'image/*, video/*',
        noKeyboard: true,
        noClick: true,
        maxFiles: 14,
        multiple: true,
        onDrop: (acceptedFiles) => {
            if (post.length >= 10) {
                return;
            }
            let count = 0;
            let accepted = acceptedFiles.filter(() => {
                if (post.length + count < 10) {
                    count++;
                    return true;
                }
                return false;
            }).map(file => {
                return {
                    file: file,
                    preview: URL.createObjectURL(file),
                    comment: ""
                }
            })
            let temp = [];
            if (accepted.length > 0) {
                for (let i of accepted) {
                    let isDuplicate = false;
                    for (let j of post) {
                        if (!i.uploaded && !j.uploaded && (i.file.path === j.file.path))
                            isDuplicate = true;
                    }
                    if (!isDuplicate) {
                        temp.push(i)
                    }
                }
            }
            if (temp.length > 0) {
                setPost(post.concat(temp));
            }
        },
    });



    /**
     *  Event handler functions
     */

    //
    function clearEditor() {
        setPost([]);
        setCreateStatus(false);
        setFeatured(0);
        setSelectedGroup(null);
    }

    //
    const handleThumbDrop = (e) => {        
        // featured index changes caused by sorting
        if (e.oldIndex < featured && e.newIndex >= featured) {
            setFeatured(featured - 1);
        } else if (e.oldIndex > featured && e.newIndex <= featured) {
            setFeatured(featured + 1);
        } else if (e.oldIndex === featured) {
            setFeatured(e.newIndex);
        }

        // parent index changes - same as featured
        if (e.oldIndex < parent && e.newIndex >= parent) {
            setParent(parent - 1);
        } else if (e.oldIndex > parent && e.newIndex <= parent) {
            setParent(parent + 1);
        } else if (e.oldIndex === parent) {
            setParent(e.newIndex);
        }
    }

    //
    const onClose = paramIsEmpty ? props.onClose : () => {
        if (location.state)
            history.push(location.state.background);
        else
            history.push('/');
    }

    //
    const hideSelection = () => {
        setGroupMenu(false);
    }

    //
    const handleSelectClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (groupMenu)
            setGroupMenu(false);
        else {
            setGroupMenu(true);
        }
    }



    /**
     *  useEffects
     */

    //
    useEffect(() => {
        if(groupMenu){
            document.addEventListener("click", hideSelection);
        }

        // componentWillUnmount
        return () => {
            document.removeEventListener("click", hideSelection);
        }
    }, [groupMenu])

    //
    useEffect(() => {
        if (postID){
            fetchPostDetails();
            fetchAllGroups();
        }
         // eslint-disable-next-line
    }, [postID])

    //
    useEffect(() => {
        if(props.show){
            fetchAllGroups();
        }
        // eslint-disable-next-line
    },[props.show]);

    //
    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        post.forEach(file => URL.revokeObjectURL(file.preview));
        setCreateStatus(false);
    }, [post]);

    //
    useEffect(() => {
        if (post.length > 0){
            document.getElementById("editor-textarea").value = post[featured].comment
        }
    }, [featured, post])



    /**
     *  Hide modal - check if params is empty.
     */
    if (!props.show && paramIsEmpty) {
        return null;
    }


    
    /**
     *  Edit post initialization.
     */

    if (!paramIsEmpty && !postID) {
        setPostID(decodeURL(params.id));
    }



    /**
     *  Async functions / API calls
     */

    // 
    async function handleUpload() {
        try {
            setCreateStatus("loading");
            
            let postData = {
                commentType: "ENABLE",
                status: "PENDING",
                user_id: user.userdetail.id,
                group_id: selectedGroup.id,
                category_id: selectedGroup.category_id,
            }

            // before uploading parent
            let parentFile = post[parent];
            let fileId = await doFile(parentFile.file)
            let order = 1;
            postData["title"] = parentFile.comment
            postData["file_id"] = fileId
            postData["type"] = "PARENT"
            postData["subject"] = subject
            postData["order"] = order;

            // upload parent
            let savedParent = await API.graphql(graphqlOperation(createPost, {input: postData}))

            // after uploading parent
            postData["parent_id"] = savedParent.data.createPost.id
            postData["type"] = "SUB"
            order++
            delete postData.subject

            // upload subs
            let i = 0;
            for (let item of post) {
                if (i !== parent){
                    let fileId = await doFile(item.file)
                    postData["title"] = item.comment
                    postData["file_id"] = fileId
                    postData["order"] = order
                    await API.graphql(graphqlOperation(createPost, {input: postData}))
                    order++
                }
                i++
            }
            setCreateStatus("success");
            setTimeout(() => {
                onClose();
                setPost([]);
                setFeatured(0);
                setCreateStatus(false);
            }, 2000);
        } catch (e) {
            console.log(e);
            setCreateStatus(e.toString());
        }
    }

    //
    async function handleUpdate() {
        try {
            setCreateStatus("loading");

            // set deleted posts status as deleted
            console.log(deletedPosts);
            for(let deletedPost of deletedPosts) {
                await API.graphql(graphqlOperation(updatePost, {input: {
                    id: deletedPost.id,
                    status: "DELETED",
                }}))
            }
            
            let postData = {
                commentType: "ENABLE",
                status: "PENDING",
                user_id: user.userdetail.id,
                group_id: selectedGroup.id,
                category_id: selectedGroup.category_id,
            }

            // before uploading parent
            let parentFile = post[parent];
            let order = 1;

            if (parentFile.uploaded) {
                postData["file_id"] = parentFile.file;
            } else {
                let fileId = await doFile(parentFile.file)
                postData["file_id"] = fileId
            }

            postData["title"] = parentFile.comment
            postData["type"] = "PARENT"
            postData["subject"] = subject
            postData["order"] = order;

            // upload parent
            let savedParent;
            if (parentFile.uploaded){
                postData["id"] = parentFile.post_id;
                savedParent = await API.graphql(graphqlOperation(updatePost, {input: postData}))
            }
            else
                savedParent = await API.graphql(graphqlOperation(createPost, {input: postData}))

            // after uploading parent
            postData["parent_id"] = parentFile.uploaded ? savedParent.data.updatePost.id : savedParent.data.createPost.id;
            postData["type"] = "SUB";
            order++
            delete postData.subject

            // upload subs
            let i = 0;
            for (let item of post) {
                if (i !== parent){
                    postData["title"] = item.comment
                    postData["order"] = order
                    if (item.uploaded) {
                        postData["file_id"] = item.file;
                        postData["id"] = item.post_id;
                        savedParent = await API.graphql(graphqlOperation(updatePost, {input: postData}))
                    } else {
                        let fileId = await doFile(item.file)
                        postData["file_id"] = fileId
                        delete postData["id"];
                        savedParent = await API.graphql(graphqlOperation(createPost, {input: postData}))
                    }
                    order++
                }
                i++
            }
            setCreateStatus("success");
            setTimeout(() => {
                onClose();
                setPost([]);
                setFeatured(0);
                setCreateStatus(false);
            }, 2000);
        } catch (ex) {
            console.log(ex);
        }
    }

    // 
    async function doFile(file){
        let ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        let name = file.name.replace("." + ext, '');
        let input = {
            input: {
                bucket: awsExports.aws_user_files_s3_bucket,
                region: awsExports.aws_user_files_s3_bucket_region,
                level: 'public',
                name: name,
                ext: ext,
                key: file.name
                // url: bucket.s3.region.amazonaws.com/level/id.ext
            }
        }
        try {
            let resp = await API.graphql(graphqlOperation(createFile, input))
            let fileKey = resp.data.createFile.id +"."+ resp.data.createFile.ext
            await Storage.put(fileKey, file)
            return resp.data.createFile.id
        } catch (e) {
            throw e;
        }
    }

    // 
    async function fetchJoinedGroups() {
        try{
            let apigroups = await API.graphql(graphqlOperation(listGroupUsersForCreatePost, {id: user.userdetail.id}));
            // setGroups(apigroups.data.listGroupUsers.items.map((apigroup, i) => ({
            //     value: apigroup.group.id,
            //     label: apigroup.group.name,
            //     icon: "fas " + apigroup.group.category.icon,
            // })))
            setGroups(apigroups.data.listGroupUsers.items);
            return apigroups.data.listGroupUsers.items;
        } catch(ex) {
            throw ex;
        }
    }

    //
    async function fetchPostDetails() {
        try {
            let postDetailsAPI = await API.graphql({
                query: getPostDetailsForPostModal,
                variables: { id: postID },
                authMode: 'AWS_IAM',
            });
            let obj = {
                group: {
                    id: postDetailsAPI.data.getPost.group.id,
                    name: postDetailsAPI.data.getPost.group.name,
                    category_id: postDetailsAPI.data.getPost.category.id,
                    category: {
                        icon: postDetailsAPI.data.getPost.category.icon,
                    }
                }
            }
            setSelectedGroup(obj.group);
            let arr = [
                {
                    file: postDetailsAPI.data.getPost.file.id,
                    post_id: postID,
                    preview: generateFileUrl(postDetailsAPI.data.getPost.file),
                    comment: postDetailsAPI.data.getPost.title,
                    chosen: false,
                    selected: false,
                    uploaded: true
                }
            ]
            if (postDetailsAPI.data.getPost.subs.items.length > 0){
                postDetailsAPI.data.getPost.subs.items.forEach((item) => {
                    let obj = {
                        file: item.file.id,
                        post_id: item.id,
                        preview: generateFileUrl(item.file),
                        comment: item.title,
                        chosen: false,
                        selected: false,
                        uploaded: true
                    }
                    arr.push(obj);
                });
            }
            setPost(arr);

            setSubject(postDetailsAPI.subject)
            
        } catch (e) {
            console.log(e);
        }
    }

    //
    async function fetchUnjoinedGroups(groups) {
        try {
            let apigroups = await API.graphql(graphqlOperation(listGroupsForCreatePost));
            let foo = apigroups.data.listGroups.items.filter((item) => {
                for (let group of groups) {
                    if (group.group.id === item.id)
                        return false;
                }
                return true;
            })
            console.log(foo)
            setUnjoinedGroups(foo);
        } catch (ex) {
            console.log(ex)
        }
    }

    //
    async function fetchAllGroups() {
        console.log("called");
        try {
            let res = await fetchJoinedGroups();
            await fetchUnjoinedGroups(res);
        } catch (ex) {
            console.log(ex);
        }
    }

    //
    async function handleJoinGroup(group, i) {
        try {
            console.log(group);
            let res = await API.graphql(graphqlOperation(createGroupUsers, {input: {group_id: group.id, role: "MEMBER", user_id: user.userdetail.id}}))
            
            // set unjoined groups
            unjoinedGroups.splice(i, 1);
            
            // set groups
            let foo = [...groups];
            foo.push({
                group: {
                    category: {
                        icon: group.category.icon,
                    },
                    id: group.id,
                    name: group.name,
                    category_id: group.category_id
                }
            })
            setGroups(foo);
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    }



    /**
     *  Other variables
     */

    //
    const thumbInner = {
        minWidth: 0,
        height: '88px',
        width: '110px',
        justifyContent: 'center'
    };
    
    //
    const img = {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    //
    const thumbs = post.map((item, i) => (
        <div key={i} className="thumbnail-wrapper">
            <i className="fas fa-times-circle" onClick={async () => {
                if (item.length === 1) {
                    setPost([]);
                    setFeatured(0);
                } else {
                    if (item.uploaded) {
                        // no need to render so we push
                        deletedPosts.push({id: item.post_id});
                    }

                    let temp = [...post]
                    let idx = temp.indexOf(item)
                    if (idx !== -1){
                        thumbs.splice(idx, 1)
                        temp.splice(idx, 1)
                        setPost(temp)
                        if ((featured > idx || featured === post.length - 1) && featured !== 0) {
                            setFeatured(featured-1)
                        }
                        if ((parent > idx || featured === post.length - 1) && parent !== 0) {
                            setParent(parent-1)
                        }
                    }
                }
            }}></i>
            <i className={"fas fa-star" + (parent === i ? " active" : "")} onClick={() => {
                setParent(i);
            }}></i>
            <div style={thumbInner} onClick={() => {
                let i = post.indexOf(item);
                if (i !== featured)
                    setFeatured(i)
            }}>
                <img
                src={item.preview}
                alt="img"
                style={img}
                />
            </div>
        </div>
    ));



    /**
     *  Utility functions
     */

    //
    function isEmptyOrSpaces(str){
        if (str)
            return str === null || str.match(/^ *$/) !== null;
        return true;
    }



    return (
        <div className="CreatePostModal-wrapper" onClick={e => {
            if (e.target.className === "CreatePostModal-wrapper")
                onClose();
        }}>
            <div className="modal-content">
                <div className="modal-header">
                    {paramIsEmpty ? "Шинэ пост оруулах" : "Пост засах"}
                    <i className="fas fa-times-circle" onClick={() => {onClose(); clearEditor()}}></i>
                </div>
                { post.length === 0 ? 
                    <div {...getRootProps({className: 'modal-body dropzone'})}>
                        <input {...getInputProps()}></input>
                            <i className="fas fa-photo-video"></i>
                            <p className="modal-desc">Зураг бичлэгээ энд чирээд оруулна уу.</p>
                            <button className="modal-button" onClick={open}>Сонгож оруулах</button>
                    </div>
                    :
                    <div className="modal-editor">
                        <div {...getRootProps({className: 'editor-image-section dropzone'})}>
                            <div className="editor-image-wrapper">
                                <div className="inline-helper"></div>
                                <img src={post[featured].preview} className="editor-feature-image" alt="featured"></img>
                                <div className="editor-plus-wrapper">
                                    <i className="far fa-plus-square" onClick={open}></i>
                                </div>
                            </div>
                            <div className="editor-selection">
                                <ReactSortable list={post} setList={setPost} onEnd={handleThumbDrop}>
                                    {thumbs}
                                </ReactSortable>
                                <input {...getInputProps()}></input>
                            </div>
                        </div>
                        <div className="editor-desc-wrapper">
                            {
                                (featured === parent && post.length > 1) &&
                                    <textarea id="editor-subject" className={createStatus === "Гарчиг оруулна уу!" ? "error" : ""} placeholder="Гарчиг оруулах..." value={subject} onChange={(e) => {
                                        if (createStatus === "Гарчиг оруулна уу!")
                                            setCreateStatus(false);
                                        setSubject(e.target.value);
                                    }}></textarea>
                            }
                            <textarea id="editor-textarea" onChange={(e) => {
                                post[featured].comment = e.target.value
                            }} placeholder="Тайлбар оруулах..."></textarea>
                            <div className="editor-group-selection">
                                <div className={"editor-selection-button" + (groupMenu ? " active" : (createStatus === "Группээ сонгоно уу!" ? " error" : ""))} onClick={handleSelectClick}>
                                    {
                                        selectedGroup === null ? 
                                            <>
                                                <i className="far fa-circle"></i>
                                                <p>Оруулах группээ сонгоно уу.</p>
                                                <i className="fas fa-chevron-down"></i> 
                                            </> :
                                            <>
                                                <i className={"fas " + selectedGroup.category.icon}></i>
                                                <p>{selectedGroup.name}</p>
                                                <i className="fas fa-chevron-down"></i> 
                                            </>
                                    }
                                </div>
                                
                                {
                                    (groupMenu && groups.length > 0) &&
                                        <div className="group-selection-menu">
                                            {groups.map((group, i) => (
                                                <div className="group-selection-item" key={"a" + i} onClick={() => {
                                                    if (createStatus === "Группээ сонгоно уу!"){
                                                        setCreateStatus(false);
                                                    }
                                                    setSelectedGroup(group.group);
                                                }}>
                                                    <i className={"fas " + group.group.category.icon}></i>
                                                    <p>{group.group.name}</p>
                                                </div>
                                            ))}

                                            <div className="group-divider">
                                                <div className="line"></div>
                                            </div>
                                            {unjoinedGroups.map((group, i) => (
                                                <div className="group-selection-item" key={"b" + i} onClick={e => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                }}>
                                                    <i className={"fas " + group.category.icon}></i>
                                                    <p>{group.name}</p>
                                                    <div className="group-button" onClick={e => {
                                                        e.stopPropagation();
                                                        e.preventDefault();
                                                        handleJoinGroup(group, i);
                                                    }}>Элсэх</div>
                                                </div>
                                            ))}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                }
                <div className="modal-footer">
                    <button className="modal-closebutton" onClick={() => {
                        if (post.length === 0 || !paramIsEmpty) {
                            history.goBack();
                        } else {
                            clearEditor();
                        }}}>Болих</button>
                    <button className="modal-dropdown">
                        <i className="fas fa-chevron-down"></i>
                    </button>
                    <button className="modal-insertbutton" disabled={(createStatus === "success" || createStatus === "loading") ? true : null} onClick={() => {
                        if (post.length === 0)
                            setCreateStatus("Файл оруулна уу!");
                        else if (selectedGroup === null) 
                            setCreateStatus("Группээ сонгоно уу!");
                        else if (post.length > 1 && isEmptyOrSpaces(subject))
                            setCreateStatus("Гарчиг оруулна уу!")
                        else {
                            if (paramIsEmpty)
                                handleUpload();
                            else
                                handleUpdate();
                        }
                    }} >
                        Оруулах
                    </button>
                    <div className="status-icon">
                        {
                            createStatus !== false && (
                                createStatus === "loading" ? 
                                <i className="fas fa-sync-alt spinner"></i> : (
                                    createStatus === "success" ?
                                        <i className="fas fa-check"></i> :
                                        <><p>{createStatus}</p><i className="fas fa-times"></i></> 
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePostModal;