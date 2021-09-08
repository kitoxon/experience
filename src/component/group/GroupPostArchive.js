import React, { useState  } from 'react'
import { generateFileUrl, generateTimeAgo } from '../../Utility/Util'
import './css/GroupPost.css'
import GroupPostModal from '../post/GroupPostModal'
import { updatePost, deletePost } from '../../graphql/mutations'
import { API, graphqlOperation } from "aws-amplify"


function GroupPostArchive(props){

    const [popup, setPopup] = useState(false)
    const [post] = useState(props.post)
    const togglePopup = () => {
        setPopup(!popup)
    }
    const postStatus = async () => {
        try{
            await API.graphql(graphqlOperation(updatePost, {input: {id: post.id, status: "CONFIRMED", type: "PARENT"}}))
        }catch(ex){
          console.log('GroupPostApprove-poststatus',ex)
        }
      }
    const postDelete = async () => {
        try{
            await API.graphql(graphqlOperation(deletePost, {input: {id: post.id, status: "DELETED", type: "PARENT"}} ))
        }catch(ex){
            console.log('GroupPostApprove-postDelete, ex')
        }
    }

    return(
        <div className="GroupPost-wrapper">
            {popup && (<GroupPostModal toggleModal={togglePopup}  post={post}/>)}
            <div className="last-Post"> 
                <div className="post">
                    <img src={generateFileUrl(post.file)} alt="post" onClick={togglePopup}></img>
                    <div className="post-detail">
                        <div>
                            <img src={generateFileUrl(post.user.pic)} alt="post-detail"></img>
                            <div className="details">
                                <h4>{post.group.name}</h4>
                                <span>@{post.user.firstname}</span>
                                <h5>{generateTimeAgo(post.createdAt)}</h5>
                            </div>
                        </div>
                        <p>{post.title}</p>
                        <i className="far fa-hand-peace"></i>
                        <span>125</span>
                        <i className="far fa-comment-dots"></i>
                        <span>5</span>
                        <i className="fas fa-share"></i>
                        <span>9</span>
                        <i className="far fa-bookmark"></i>
                        <div className="approveOrdeletebutton">
                            <button className="delete" onClick={()=> postDelete()}>Устгах</button>
                            <button className="approve" onClick={()=> postStatus()}>Нийтлэх</button>
                        </div>
                        <p className="days">7 хоногийн дараа устана.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GroupPostArchive