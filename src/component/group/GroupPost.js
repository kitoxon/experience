import React, { Fragment, useState  } from 'react'
import { encodeURL, generateFileUrl, generateTimeAgo } from '../../Utility/Util'
import './css/GroupPost.css'
import { updatePost } from '../../graphql/mutations'
import { API, graphqlOperation } from "aws-amplify"
import { Link, useLocation } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import ConfirmModal from '../modal/alert/ConfirmModal'
import Msg from '../../Utility/Msg'


function GroupPost(props){

    const [post] = useState(props.post)
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [confirmData, setConfirmData] = useState({})


    const confirmHandle = (status) => {
        
        let dataConfirm = {
            title: "Баталгаажуулах",
            content: Msg.postUpdateStatusConfirm[status]
        }

        dataConfirm.onConfirm = updateStatus
        dataConfirm.onConfirmParams = status
        setConfirmData(dataConfirm)
        setShowConfirm(true)
    }

    const updateStatus = async (status) => {
        try{
            setLoading(true)
            await API.graphql(graphqlOperation(updatePost, {input: {id: post.id, status: status}}))
            props.setAlertData({
                noti: "success",
                msg: Msg.postUpdateStatus[status]
            })
        }catch(ex){
            props.setAlertData({
                nofi: "error",
                msg: Msg.server.error
            })
          console.log('GroupPostApprove-poststatus',ex)
        }finally{
            setLoading(false)
            props.setShowAlert(true)
        }
    }

    return(
        <div className="GroupPost-wrapper">
            <div className="last-Post"> 
                <div className="post">
                    <img src={generateFileUrl(post.file)} alt="post"></img>
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
                        {/* <i className="far fa-hand-peace"></i>
                        <span>125</span>
                        <i className="far fa-comment-dots"></i>
                        <span>5</span>
                        <i className="fas fa-share"></i>
                        <span>9</span>
                        <i className="far fa-bookmark"></i> */}
                    </div>
                    <div className={loading ? "approveOrdelete show" : "approveOrdelete"}>
                        <div className="btns">
                            { loading ? <Loader type="ThreeDots" color="#fff" height={10} width={50} /> :
                                <Fragment>
                                    <Link
                                        to={{
                                            pathname: `/spost/${encodeURL(post.id)}`,
                                            // This is the trick! This link sets
                                            // the `background` in location state.
                                            // state: { background: location }
                                            state: { background: location }
                                    }}>
                                        <i className="fas fa-eye"></i>
                                    </Link>
                                    {
                                        props.from !== "user" && post.status === "PENDING" ? 
                                        <Fragment>
                                            <i className="far fa-check-circle" onClick={()=> confirmHandle("CONFIRMED")}></i>
                                            <i className="far fa-times-circle" onClick={()=> confirmHandle("ARCHIVED")}></i>
                                        </Fragment> : null
                                    }
                                    {
                                        post.status === "ARCHIVED" ? 
                                        <Fragment>
                                            <i className="fas fa-trash-restore-alt" onClick={()=> confirmHandle("PENDING")}></i>
                                            <i className="fas fa-ban" onClick={()=> confirmHandle("DELETED")}></i>
                                        </Fragment> : null
                                    }
                                </Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmModal data={confirmData} show={showConfirm} setShow={setShowConfirm}/>
        </div>
    )
}
export default GroupPost