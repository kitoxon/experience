import Masonry from 'react-masonry-css'
import Post from "../../component/home/Post"
import './css/UserProfile.css'
import UserSidebar from '../../component/profile/UserSidebar'
import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getPostByUser } from '../../graphql-custom/queries'
import { useUser } from '../../context/userContext'
import GroupPost from '../../component/group/GroupPost'
import { onCreatePost, onUpdatePost } from '../../graphql-custom/subscriptions/post'
import { removeItemByIndex } from '../../Utility/ArrayUtil'

function UserProfile() {
    const [section, setSection] = useState('CONFIRMED');
    const {user} = useUser()
    const [userPosts, setUserPosts] = useState([])
    const [post, setPost] = useState()
    
    async function ferchUserPosts(statusParam) {
        try{
            let respPosts = await API.graphql(graphqlOperation(getPostByUser, {user_id: user.userdetail.id, filter: {status: {eq: statusParam}, type: {eq: 'PARENT'}}}))
            setUserPosts(respPosts.data.getPostByUser.items)
        }catch(ex){
            console.log('UserProfile-ferchGroupPosts', ex)
        }
    }

    useEffect(() => {
        ferchUserPosts()

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
        }

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(section){
            ferchUserPosts(section)
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
            if(post.user_id === user.userdetail.id) {
                let index = userPosts.findIndex(gp => gp.id === post.id)
                console.log(index)
                if(post.status === section){
                    if(index < 0){
                        setUserPosts([post, ...userPosts])
                    }
                }else{
                    if(index > -1){
                        setUserPosts(removeItemByIndex([...userPosts], index))
                    }
                }
            }
        }catch(ex){
            console.log(ex)
        }
    }
   
    const handleSectionChange = (sectionName) => {
        setUserPosts([])
        setSection(sectionName)
    }

    const breakpointColumnsObj = {
        default: 2,
        600: 1,
    };
    return(
        <div className="userProfilePageDiv">
            <div className="userProfilePage">
                <div className="leftside">
                    <div className="dashboard-nav">
                        <p id="section-dashboard" className={section === "CONFIRMED" ? "active-link" : ""} onClick={() => {handleSectionChange("CONFIRMED")}}>Нийтлэгдсэн постууд</p>
                        <p id="section-activity" className={section === "PENDING" ? "active-link" : ""} onClick={() => {handleSectionChange("PENDING")}}>Хүлээгдэж буй постууд</p>
                        <p id="section-log" className={section === "ARCHIVED" ? "active-link" : ""} onClick={() => {handleSectionChange("ARCHIVED")}}>Архив</p>
                    </div>
                    <Masonry
                        breakpointCols={(section === "PENDING" || section === "ARCHIVED") ? 1 : breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                            userPosts.map((post) => {
                                return (
                                    <div key={post.id}>
                                        {section === "CONFIRMED" ? <Post post={post}/> : null}
                                        {section === "PENDING" ? <GroupPost post={post} from={"user"}/> : null}
                                        {section === "ARCHIVED" ? <GroupPost post={post} from={"user"}/> : null}
                                    </div>
                                )
                            })
                        }
                    </Masonry>
                </div>
                <div className="rightside">
                    <UserSidebar/>
                </div>
            </div>
        </div>
    )
}

export default UserProfile