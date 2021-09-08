import GroupProfileRight from "../../component/group/groupprofile/groupprofileright"
import GroupHeader from "../../component/group/GroupHeader"
import Masonry from 'react-masonry-css'
import GroupPost from "../../component/group/GroupPost"
import RoundedButton from "../../component/buttons/general/RoundedButton"
import './css/GroupAdmin.css'
import {  useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { getPostByGroup } from '../../graphql-custom/queries'
import Post from "../../component/home/Post"
import { useParams } from "react-router-dom"
import { useUser } from "../../context/userContext"
import { getGroup, getGroupRoleByUser } from "../../graphql-custom/groups"
import { onCreatePost, onUpdatePost } from "../../graphql-custom/subscriptions/post"
import { removeItemByIndex } from "../../Utility/ArrayUtil"
import Alert from "../../component/modal/alert/Alert"


function GroupAdmin() {

    const [section, setSection] = useState("CONFIRMED");
    const [groupInfo, setGroupInfo] = useState()
    const [groupPosts, setGroupPosts] = useState([])
    const [userRole, setUserRole] = useState()
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState()
    // const [nextToken, setNextToken] = useState(null)

    const [showAlert, setShowAlert] = useState(false)
    const [alertData, setAlertData] = useState({})


    const {user} = useUser()
    const {id} = useParams()

    async function fetchGroup() {
        try{
            setLoading(true)
            let respGroup = await API.graphql(graphqlOperation(getGroup, {id: id} ))
            setGroupInfo(respGroup.data.getGroup)
        }catch(ex){
            console.log('GroupAdmin-fetchGroup', ex)
        }finally{
            setLoading(false)
        }
    }

    const ferchGroupPosts = async (statusParam, next) => {
        try{
            console.log(statusParam)
            let respPosts = await API.graphql(graphqlOperation(getPostByGroup, {group_id: id, filter: {status: {eq: statusParam}, type: {eq: 'PARENT'}}}))
            let respData = respPosts.data.getPostByGroup
            setGroupPosts(respData.items)
            // if(next){
            //     console.log(respPosts.data.getPostByGroup.nextToken)
            //     console.log(respPosts)
            //     // setGroupPosts([...groupPosts, respData.items])
            // }else{
            //     setGroupPosts(respData.items)
            // }
            // setNextToken(respPosts.data.getPostByGroup.nextToken)
        }catch(ex){
            console.log('GroupAdmin-ferchGroupPosts', ex)
        }finally{
            return true
        }
    }

    async function ferchUserRole() {
        try{
            let respData = await API.graphql(graphqlOperation(getGroupRoleByUser, {group_id: id, user_id: user.userdetail.id}))
            setUserRole(respData.data.getGroupUsers.role)
        }catch(ex){
            console.log('GroupAdmin-ferchGroupPosts', ex)
        }
    }

    useEffect(() => {
        fetchGroup()
        ferchUserRole()

        // eventListerners
        const scrollEventListener = async () =>
        {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                await ferchGroupPosts(section,true)
            }
        }
        window.addEventListener('scroll', scrollEventListener);

        //subscriptions
        const subscriptionCreatePost = API.graphql({
            query: onCreatePost,
            authMode: 'AWS_IAM',
        }).subscribe({
            next: ({ provider, value }) => {
                setPost(value.data.onCreatePost)
            }
        });

        const subscriptionUpdatePost = API.graphql({
            query: onUpdatePost,
            authMode: 'AWS_IAM',
        }).subscribe({
            next: ({ provider, value }) => {
                setPost(value.data.onUpdatePost)
            },
        });

        return () => {
            subscriptionCreatePost.unsubscribe();
            subscriptionUpdatePost.unsubscribe();
            window.removeEventListener('scroll', scrollEventListener);
        }
        // eslint-disable-next-line    
    },[])

    useEffect(() => {
        if(section){
            ferchGroupPosts(section)
        }
        // eslint-disable-next-line
    },[section])

    useEffect(() => {
        if(post){
            try{
                handlePostSubscrip(post)
            }catch(ex){
                console.log(ex)
            }
        }
        // eslint-disable-next-line
    },[post])

    const handlePostSubscrip = (post) => {
        try{
            if(post.group_id === groupInfo.id) {
                let index = groupPosts.findIndex(gp => gp.id === post.id)
                if(post.status === section){
                    if(index < 0){
                        setGroupPosts([post, ...groupPosts])
                    }
                }else{
                    if(index > -1){
                        setGroupPosts(removeItemByIndex([...groupPosts], index))
                    }
                }
            }
        }catch(ex){
            console.log(ex)
        }
    }

    const handleSectionChange = (sectionName) => {
        if(!loading){
            setGroupPosts(null)
            setSection(sectionName)
        }
    }
    
    const breakpointColumnsObj = {
        default: 2,
        600: 1,
    };

    return(
        groupInfo ? 
            <div className="groupProfilePageDiv">
                <GroupHeader leavebutton={<RoundedButton content="Гарах" />} name={groupInfo.name}/>
                <div className="groupProfilePage">
                    <div className="leftside">
                        <div className="dashboard-nav">
                            <p id="section-dashboard" className={section === "CONFIRMED" ? "active-link" : ""} onClick={() => {handleSectionChange("CONFIRMED")}}>Нийтлэгдсэн постууд</p>
                            {userRole === "ADMIN" ?
                                <div>
                                    <p id="section-activity" className={section === "PENDING" ? "active-link" : ""} onClick={() => {handleSectionChange("PENDING")}}>Хүлээгдэж буй постууд</p>
                                    {/* <p id="section-log" className={section === "ARCHIVED" ? "active-link" : ""} onClick={() => {handleSectionChange("ARCHIVED")}}>Архив</p> */}
                                </div>: null
                            }
                            
                        </div>
                        <Masonry
                            breakpointCols={(section === "PENDING" || section === "ARCHIVED") ? 1 : breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {groupPosts ?
                                groupPosts.map((post) => {
                                    return (
                                        <div key={post.id}>
                                            {section === "CONFIRMED" ? <Post post={post}/> : null}
                                            {section === "PENDING" ? <GroupPost post={post} setAlertData={setAlertData} setShowAlert={setShowAlert}/> : null}
                                            {/* {section === "ARCHIVED" ? <GroupPost post={post}/> : null} */}
                                        </div>
                                    )
                                }) : null
                            }
                        </Masonry>
                    </div>
                    <div className="rightside">
                        <GroupProfileRight groupInfo={groupInfo} role={userRole}/>
                    </div>
                </div>
                <Alert data={alertData} show={showAlert} setShow={setShowAlert}/>
            </div> : null
    )
}
export default GroupAdmin