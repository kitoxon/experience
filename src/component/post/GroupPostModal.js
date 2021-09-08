import { useState, useEffect, useCallback, Fragment } from 'react'
import { useUser } from '../../context/userContext'
import { API } from 'aws-amplify';
import { getPostDetailsForPostModal } from '../../graphql-custom/queries';
import { checkUser, decodeURL, generateFileUrl, generateTimeAgo } from '../../Utility/Util';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './css/PostModal.css'
import { useHistory, useLocation, useParams } from 'react-router-dom';

/**
 * Postiin delgerengui
 * @param {*} props Required props:
 *      author={props.author}
 *      parent={props.parent}
 *      toggleModal={togglePopup}
 * @returns 
 */
function GroupPostModal() {

    const [isOpen, setIsOpen] = useState(false)
    const [postDetails, setPostDetails] = useState(false);
    const {user} = useUser();
    const post_id = decodeURL(useParams().id);
    const history = useHistory()
    const location = useLocation()
    const [loading, setLoading] = useState(false)

    const carouselProps = {
        dynamicHeight: false,
        showThumbs: false,
        width: "auto",
        useKeyboardArrows: true,
        autoFocus: true,
    }
    
    async function fetchPostDetails() {
        try {
            console.log(post_id)
            setLoading(true)
            const postDetailsAPI = await API.graphql({
                query: getPostDetailsForPostModal,
                variables: { id: post_id},
                authMode: 'AWS_IAM',
            });
            console.log(postDetailsAPI)
            setPostDetails(postDetailsAPI.data.getPost);
        } catch (e) {
            console.log(e);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if(checkUser(user)){
            fetchPostDetails();
        }
        document.addEventListener("keydown", onEscape);
        document.body.scroll = "false";
        document.body.style.overflowY = 'hidden';

        // componentWillUnmount - cleanup event listeners, and submit reactions.
        return () => {
            document.removeEventListener("keydown", onEscape);
            document.body.scroll = "true";
            document.body.style.overflowY = 'scroll';
        }
    // eslint-disable-next-line
    }, [])


    useEffect(() => {
        if(isOpen){
            let el = document.getElementsByClassName(".right-side");
            if (el.length > 0)
                el[0].addEventListener("click", hideDropdown);
        }
        return () => {
            let el = document.getElementsByClassName("right-side");
            if (el.length > 0)
                el[0].removeEventListener("click", hideDropdown);
        }
    }, [isOpen])


    const handleOutsideClick = () => {
        closeModal();
    }

    const handleCarouselChange = (i) => {
        // setSelected(i);
        console.log(i)
    }

    const closeModal = useCallback(() => {
        if (location.state)
            history.push(location.state.background)
        else
            history.push('/')
        // eslint-disable-next-line
    }, [history])

    const handleEllipsisClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isOpen)
            setIsOpen(false);
        else {
            setIsOpen(true);
        }
    }

    // Hides ellipsis dropdown menu
    const hideDropdown = () => {
        setIsOpen(false);
    }

    // Same as outside click handler, except fired when pressing Escape.
    const onEscape = (e) => {
        if (e.key === "Escape") {
            handleOutsideClick();
        }
    }

    return(
        <div className="postModal-wrapper" onClick={e => {
            if (e.target.className === "postModal-wrapper")
                handleOutsideClick();
        }}>
            {postDetails ? 
                <div className="postModal-in-wrapper">
                    <div className="bg-image-container">
                        <div className={"bg-image" + (postDetails ? "" : " skeleton")} style={{backgroundImage: postDetails ? "url("+ generateFileUrl(postDetails.file) +")" : "none"}}></div>
                    </div>
                    <div className="ellipsis-menu">
                        <i className="fas fa-ellipsis-v" onClick={handleEllipsisClick}/>
                        <div>
                            {isOpen && 
                                <div className="outtDiv">
                                    <div className="innDiv">
                                        <i className="fas fa-pencil-alt"><span>Засах</span></i>
                                        <i className="far fa-trash-alt"><span>Устгах</span></i>
                                    </div>
                                </div> }
                        </div>
                    </div>
                    <div className="postModal-in">
                        <div className="left-side">
                            { postDetails ? 
                                <div className="image-outer-container">
                                    {
                                        postDetails.subs.items.length > 0 ? 
                                            <div className="post-carousel-container">
                                                <Carousel {...carouselProps} onChange={handleCarouselChange}>
                                                    <div className="image-wrapper">
                                                        <img src={generateFileUrl(postDetails.file)} alt=""></img>
                                                    </div>
                                                    {postDetails.subs.items.map((sub, i) => (
                                                        <div className="image-wrapper" key={i}>
                                                            <img src={generateFileUrl(sub.file)} alt=""></img>
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </div> :
                                            <div className="image-wrapper">
                                                <img src={generateFileUrl(postDetails.file)} alt="groupprofile"></img>
                                            </div>
                                    }
                                    <div className="post-reaction-icons">
                                       {/* dont need comment */}
                                    </div>
                                </div> :
                                <div className="post-image-skeleton">
                                </div>
                            }
                        </div>
                        <div className="right-side">
                            <div className="postModal-header">
                                {
                                    loading || postDetails ?
                                        <>
                                            <div className="GroupInfo-wrapper" style={{backgroundImage: 'url(' + generateFileUrl(postDetails.group.cover) + ')'}}>
                                                <div className="layer"></div>
                                                <div className="GroupInfo-content-wrapper">
                                                    <img className="groupprofile" src={postDetails.group.cover} alt=""></img>
                                                    <h2>{postDetails.group.name}</h2>
                                                </div>
                                            </div>
                                            <div className="UserInfo-wrapper">
                                                <img className="userprofile" src={generateFileUrl(postDetails.user.pic)} alt="userprofile"></img>
                                                <span className="userdetails">
                                                    <div>
                                                        <p className="user-name">{postDetails.user.firstname}</p>
                                                        <p className="post-date">{postDetails && generateTimeAgo(postDetails.createdAt)}</p>
                                                    </div>
                                                    <i className="fas fa-check-circle"></i>
                                                </span>
                                            </div>
                                            {/* {
                                                selected === 0 ?
                                                    postDetails.title &&
                                                        <div className="post-description">
                                                            <p>{postDetails.title}</p>
                                                        </div> :
                                                    postDetails.subs.items[selected-1].title &&
                                                        <div className="post-description">
                                                            <p>{postDetails.subs.items[selected-1].title}</p>
                                                        </div>
                                            } */}
                                        </> : 
                                        <>
                                            <div className="GroupInfo-wrapper skeleton">
                                                <div className="GroupInfo-content-wrapper">
                                                    <img className="groupprofile" alt=""></img>
                                                    <h2>...</h2>
                                                </div>
                                            </div>
                                            <div className="UserInfo-wrapper skeleton">
                                                <div className="userprofile skeleton" alt="userprofile"></div>
                                                <div className="userdetails skeleton"></div>
                                            </div>
                                        </>
                                }
                            </div>
                            {/* {
                                (postDetails && postDetails.commentType === "ENABLE") ? 
                                    <Fragment key="commentoutermyguy">
                                        <div className="comments-wrapper" key={"aaaaasht"}>
                                            {comments[selected] && comments[selected].map((comment, i) => (
                                                <React.Fragment key={i}>
                                                    <div key={i*100} className="comment-content-wrapper">
                                                        <div className="comment-main">
                                                            <div className="comment-header">
                                                                <img className="profile-img" src={generateFileUrl(comment.user.pic)} alt="profile"></img>
                                                                <p className="comment-username">{comment.user.firstname}</p>
                                                                <p className="comment-date">{generateTimeAgo(comment.createdAt)}</p>
                                                            </div>
                                                            <p className="comment-content">{comment.comment}</p>
                                                        </div>
                                                        {
                                                            user &&
                                                                <div className="comment-reactions">
                                                                    <i className="fas fa-reply" onClick={(e) => {
                                                                        e.preventDefault(); 
                                                                        handleReplyClick(comment);
                                                                    }}></i>
                                                                </div>
                                                        }
                                                    </div>
                                                    {comment.sub.items.length > 0 && comment.sub.items.map((reply, j) => (
                                                        <div key={i*10000 + j} className="comment-content-wrapper">
                                                            <div className="reply-space"></div>
                                                            <div className="comment-main">
                                                                <div className="comment-header">
                                                                    <img className="profile-img" src={generateFileUrl(reply.user.pic)} alt="profile"></img>
                                                                    <p className="comment-username">{reply.user.firstname}</p>
                                                                    <p className="comment-date">{generateTimeAgo(reply.createdAt)}</p>
                                                                </div>
                                                                <p className="comment-content">{reply.comment}</p>
                                                            </div>
                                                            {
                                                                user &&
                                                                    <div className="comment-reactions">
                                                                        <i className="fas fa-reply" onClick={(e) => {
                                                                            e.preventDefault(); 
                                                                            handleReplyClick(comment);
                                                                        }}></i>
                                                                    </div>
                                                            }
                                                        </div>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </Fragment> :
                                    <div className="comments-wrapper skeleton">
                                        <div className="comment-skeleton-line skeleton"></div>
                                        <div className="comment-skeleton-line skeleton"></div>
                                        <div className="comment-skeleton-line skeleton"></div>
                                        <div className="comment-skeleton-line skeleton"></div>
                                    </div>
                            } */}
                        </div>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default GroupPostModal