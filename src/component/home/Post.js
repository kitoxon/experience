import React, { useEffect, useState  } from 'react'
// import DefaultAvatar from "../../resources/images/default_avatar.jpg"
import Name from './name'
import './css/Post.css'
import { Link, useLocation } from 'react-router-dom'
import { useUser } from '../../context/userContext'
import { checkUser, encodeURL, generateFileUrl } from '../../Utility/Util'

function Post(props){
    const {user} = useUser();
    const [post] = useState(props.post)
    let location = useLocation();
    const [isLikedByUser, setIsLikedByUser] = useState(false);
    // const [isOpen, setisOpen] = useState(false)
    // const toggleIsOpen = () => {
    //     setisOpen(!isOpen)
    // }
    useEffect(() => {
        if(checkUser(user) && post.reactions.items.findIndex(i => i.user_id === user.userdetail.id) > -1){
            setIsLikedByUser(true)
        }
        // eslint-disable-next-line
    },[user])
    const handleReaction = (e) => {
        setIsLikedByUser(true)
    }
      return(
        <div className="Post-wrapper">
            <div className="image">
                <Link
                    to={{
                        pathname: `/post/${encodeURL(post.id)}`,
                        // This is the trick! This link sets
                        // the `background` in location state.
                        // state: { background: location }
                        state: { background: location }
                    }}>
                    <div className="photo">
                        <img src={generateFileUrl(post.file)} alt="i" style={{width:'100%'}}/>
                    </div>
                </Link>
                    <div className={isLikedByUser ? "icon active-reaction":"icon"}>
                        <div>
                            <i className="fas fa-hand-peace"  onClick={handleReaction}></i>
                            <p>{post.reactions.items.length}</p>
                        </div>
                        <div>
                            <i className="fas fa-share" onClick={(e) => e.stopPropagation()}></i>
                            <p>{parseInt(Math.random() * 10)}</p>
                        </div>
                    </div>
                {/* <div className="menu" onClick={(e) => {e.stopPropagation(); toggleIsOpen()}}>
                    <i className="fas fa-ellipsis-v"/>
                    {isOpen && ( <SubMenu/> )}
                </div>  */}
                <div className="name" onClick={(e) => e.stopPropagation()}>
                    <img src={post.user.pic ? generateFileUrl(post.user.pic) : ""} alt="avatar"/>
                    <span>{post.user.firstname}</span>
                    <Name author={post.user}/>
                </div>
            </div>
            <div>
                {post.subject ?
                    <span>{post.subject}</span>:
                    <span>{post.title}</span>
                }
                
            </div>
        </div>
    )
}
export default Post