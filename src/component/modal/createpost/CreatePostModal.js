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
    const [selectedPost, setSelectedPost] = useState(0)
    const [featuredPost, setFeaturedPost] = useState(0)

    const onClose = props.onClose

    const {acceptedFiles, getRootProps, getInputProps, open} = useDropzone({
        accept: 'image/*, video/*',
        noKeyboard: true,
        noClick: true,
        multiple: true,
    });
    

    useEffect(() => {
        if((post.length + acceptedFiles.length) > 10){
            alert("maxFiles 10 files")
        }else{
            
            let files = []

            acceptedFiles.map((file, index) => {
                let postData = {
                    file: {
                        ext: getFileExt(file.name),
                        name: getFileName(file.name),
                        key: file.name,
                        url: URL.createObjectURL(file),
                        bucket: awsExports.aws_user_files_s3_bucket,
                        region: awsExports.aws_user_files_s3_bucket_region,
                        level: 'public',
                    }
                }

                // if(post.length <= 0 && index === 0){
                //     postData.featured = true
                // }

                files.push(postData)
            })

            setPost(files)
        }
    },[acceptedFiles])

    const handleThumbDrop = (e) => {        
        // featured index changes caused by sorting
       console.log(e)
    }


    const getFileExt = (fileName) => {
       return fileName.substring(fileName.lastIndexOf('.') + 1)
    }

    const getFileName = (fileName) => {
        return fileName.replace("." + getFileExt(fileName), '')
    }
    

    return (
        <div className="CreatePostModal-wrapper" onClick={e => {
            if (e.target.className === "CreatePostModal-wrapper")
                onClose();
        }}>
            <div className="modal-content">
                <div className="modal-header">
                    Шинэ пост оруулах
                    <i className="fas fa-times-circle" onClick={() => {onClose()}}></i>
                </div>
                { post.length === 0 ? 
                    <div {...getRootProps({className: 'modal-body dropzone'})}>
                        <input {...getInputProps()}></input>
                            <i className="fas fa-photo-video"></i>
                            <p className="modal-desc">Зураг бичлэгээ энд чирээд оруулна уу.</p>
                            <button className="modal-button" onClick={open}>Сонгож оруулах</button>
                    </div> : 
                    <div className="modal-editor">
                        <div {...getRootProps({className: 'editor-image-section dropzone'})}>
                            <div className="editor-image-wrapper">
                                <div className="inline-helper"></div>
                                <img src={post[selectedPost].file.url} className="editor-feature-image" alt="featured"></img>
                                <div className="editor-plus-wrapper">
                                    <i className="far fa-plus-square" onClick={open}></i>
                                </div>
                            </div>
                            <div className="editor-selection">
                                <ReactSortable list={post} setList={setPost} onEnd={handleThumbDrop}>
                                    {post.map((item, i) => {
                                        return (
                                            <div key={i} className="thumbnail-wrapper" onClick={() => setSelectedPost(i)}>
                                                <i className="fas fa-times-circle" ></i>
                                                <i className={(featuredPost === i) ? "fas fa-star active" : "fas fa-star"} onClick={() => setFeaturedPost(i)}></i>
                                                <div>
                                                    <img className="thumb"
                                                        src={item.file.url}
                                                        alt="img"
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </ReactSortable>
                                <input {...getInputProps()}></input>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default CreatePostModal;