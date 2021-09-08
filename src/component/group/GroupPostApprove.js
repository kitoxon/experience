import './css/GroupPostApprove.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useState } from 'react'
import { generateFileUrl } from '../../Utility/Util';
import { updatePost, deletePost } from '../../graphql/mutations'
import { API, graphqlOperation } from "aws-amplify"

function GroupPostApprove(props) {
    
    const [post] = useState([props.post].concat(props.post.subs.items))
    const [activeIndex, setActiveIndex] = useState(0)
    function increaseIndex(){
        let index = activeIndex + 1
        if(index >= post.length){
            setActiveIndex(0)
        }else{
            setActiveIndex(index)
        }
    }
    const postStatus = async () => {
        try{
            await API.graphql(graphqlOperation(updatePost, {input: {id: post[0].id, status: "CONFIRMED", type: "PARENT"}}))
        }catch(ex){
          console.log('GroupPostApprove-poststatus',ex)
        }
      }
    const postDelete = async () => {
        try{
            await API.graphql(graphqlOperation(deletePost, {input: {id: post[0].id}} ))
        }catch(ex){
            console.log('GroupPostApprove-postDelete, ex')
        }
    }

    return(
        <div className="postModal-out" onClick={props.toggleModal}>
            <div className="postModal-in" onClick={(e) => e.stopPropagation()}>
                <div className="left-side">
                    <div className="postModal-header">
                        <div className="groupProfile">
                            <img src="https://images.unsplash.com/photo-1628630165559-efe6ae701526?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80" alt="groupprofile"></img>
                            <img className="userprofile" src="https://images.unsplash.com/photo-1628336928799-499fcfeed7fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="userprofile"></img>
                        </div>
                        
                        <div className="info">
                            <h1>{post[0].group.items[0].name}</h1>
                            <span>{post[0].user.firstname} <i className="fas fa-check-circle"></i> - 3 цаг</span>
                        </div>
                    </div>
                    <h2>{post[activeIndex].title}</h2>
                    <div className="button">
                        <button className="approve" onClick={()=> {postStatus(); props.toggleModal()}}>Зөвшөөрөх</button>
                        <button className="delete" onClick={()=> {postDelete(); props.toggleModal()}}>Устгах</button>
                    </div>
                </div>
               
                <div className="right-side"> 
                    <div>
                        <img src={generateFileUrl(post[activeIndex].file)} alt="ss" onClick={() => increaseIndex()}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupPostApprove

