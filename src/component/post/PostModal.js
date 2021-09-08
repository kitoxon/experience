import React, { useState, useEffect, useCallback } from 'react'
import { useUser } from '../../context/userContext'
import { Link, useHistory, useLocation } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import { getReactionsFromPost, getPostDetailsForPostModal } from '../../graphql-custom/queries';
import { decodeURL, encodeURL, generateFileUrl, generateTimeAgo, useQuery } from '../../Utility/Util';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './css/PostModal.css'
import { useParams } from 'react-router-dom';
import { createComment, createPostReaction, deletePostReaction } from '../../graphql/mutations';

/**
 * Postiin delgerengui
 */
function PostModal() {

    /**
     *  State variables
     */

    // Boolean value state for determining whether ellipsis menu is open or not
    const [isOpen, setIsOpen] = useState(false)

    // Object value state, stores details from API call. Includes: Everything except comments
    const [postDetails, setPostDetails] = useState(false);

    // Array with a length of 10. Each index represents a post (or sub-posts), and holds a boolean to determine if user has liked a post or not.
    const [liked, setLiked] = useState(new Array(10).fill(false));

    // Array with a length of 10. Each index represents a post (or sub-posts), and holds an integer for number of likes the post has gotten.
    const [likes, setLikes] = useState(new Array(10).fill(0));

    // State to hold initial likes, to compare with likes when api call is made
    const [initialLiked] = useState(new Array(10).fill(false));

    // State to hold the index of currently selected post
    const [selected, setSelected] = useState(0);

    // Array with a length of 10, each index represents a post (or sub-posts), and holds an object containing comment information.
    const [comments, setComments] = useState(new Array(10));

    // React controlled input state. Value of comment-editor textarea.
    const [commentInput, setCommentInput] = useState("");

    // Boolean state that is set to true if comment is undergoing submission
    const [submitting, setSubmitting] = useState(false);

    // State to hold information about the comment the user is replying to.
    const [replyingTo, setReplyingTo] = useState(false);



    /**
     * Other variables
     */

    // Current user. Returns null if not signed in.
    const {user} = useUser(); 

    // React router dom - URL history.
    const history = useHistory();

    // React router dom - gets post id from URL parameter /post/:id, decoding from AES
    const post_id = decodeURL(useParams().id);

    // React router dom - current location
    const location = useLocation();

    // React-responsive-carousel module props
    const carouselProps = {
        dynamicHeight: false,
        showThumbs: true,
        width: "auto",
        useKeyboardArrows: true,
        autoFocus: true,
        thumbWidth: 45,
        showIndicators: false,
    }

    // add query param on base location
    const {addQuery} = useQuery() 



    /**
     * Event-handler functions
     */
    // Closes the modal
    const closeModal = useCallback(() => {
        if (location.state)
            history.push(location.state.background)
        else
            history.push('/')
        // eslint-disable-next-line
    }, [history])

    // Outside click handler, closes modal and returns to home page or wherever the user was.
    const handleOutsideClick = () => {
        handleReactionSubmit();
        closeModal();
    }

    // Hides ellipsis dropdown menu
    const hideDropdown = () => {
        setIsOpen(false);
    }

    // Fires when user clicks a reaction. Stores reactions in likes[], then stores to database through API call when componentWillUnmount
    const handleReaction = (e) => {
        if (user){
            liked[selected] = !liked[selected]
            let foo = liked
            setLiked([...foo])
        }else{
            addQuery("signInUp","signIn")
        } 
    }

    // Fires when user clicks on comment icon in user-reactions, next to the like button. Should focus on comment editor if clicked while signed in.
    const handleCommentReaction = () => {
        if (user)
            document.getElementById("post-comment").focus();
    }

    // Same as outside click handler, except fired when pressing Escape.
    const onEscape = (e) => {
        if (e.key === "Escape") {
            handleOutsideClick();
        }
    }

    // React controlled input handler for comment-editor textarea, clears replyingTo if input is emptied.
    function handleCommentChange(e) {
        setCommentInput(e.target.value);
        if (isEmptyOrSpaces(e.target.value)) { 
            setReplyingTo(false);
        }
        if (replyingTo && e.target.value && e.target.value.split(" ")[0] !== replyingTo.user.firstname){
            setReplyingTo(false);
        }
    }

    // Handler for textarea keyPress
    const handleCommentEnter = (e) => {
        if (e.key === 'Enter' && e.shiftKey === false) {
            e.preventDefault();
            handleCommentSubmit(e);
        }
    }

    // Handler for carousel slider onChange 
    const handleCarouselChange = (i) => {
        handleReactionSubmit();
        setSelected(i);
    }

    // Before the window unloads to another page
    const onUnload = async (e) => {
        handleReactionSubmit();
        if (e) {
            e.returnValue = ''; // Legacy method for cross browser support
        }
        return ''; // Legacy method for cross browser support
    }

    // Fires when ellipsis menu is clicked
    const handleEllipsisClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isOpen)
            setIsOpen(false);
        else {
            setIsOpen(true);
        }
    }

    // Fires when reply button is clicked
    function handleReplyClick(comment) {
        if (replyingTo)
            setCommentInput(comment.user.firstname + " " + commentInput.substr(commentInput.indexOf(" ") + 1))
        else
            setCommentInput(comment.user.firstname + "  " + (commentInput && commentInput));
        setReplyingTo(comment);
        handleCommentReaction();
    }



    /**
     * Async functions / API call functions
     */

    // Function to fetch post details and store as an object in postDetails state
    async function fetchPostDetails() {
        try {
            const postDetailsAPI = await API.graphql({
                query: getPostDetailsForPostModal,
                variables: { id: post_id },
                authMode: 'AWS_IAM',
            });

            // Post detail object
            setPostDetails(postDetailsAPI.data.getPost);
        } catch (e) {
            console.log(e);
        }
    }

    // Function to fetch currently selected post's comments
    async function fetchComments() {
        try {
            const postCommentsAPI = await API.graphql({
                query: getReactionsFromPost,
                variables: { id: selected === 0 ? post_id : postDetails.subs.items[selected-1].id },
                authMode: 'AWS_IAM',
            });

            // Comments
            let foo = [...comments];
            foo[selected] = postCommentsAPI.data.getPost.comments.items;
            setComments(foo);

            // Reactions
            let bar = [...likes];
            bar[selected] = postCommentsAPI.data.getPost.reactions.items.length;
            if (user && postCommentsAPI.data.getPost.reactions.items.some((item) => item.user_id === user.userdetail.id)){
                bar[selected]--;
                liked[selected] = true;
            } else {
                liked[selected] = false;
            }
            setLikes(bar);
            initialLiked[selected] = liked[selected];
        } catch (e) {
            console.log(e);
        }
    }

    // Function to submit reactions
    async function handleReactionSubmit() {
        if (liked[selected] !== initialLiked[selected]) {
            try {
                await API.graphql(graphqlOperation(
                    liked[selected] === true ? createPostReaction : deletePostReaction,
                    {
                        input: {
                            post_id: selected === 0 ? post_id : postDetails.subs.items[selected-1].id,
                            user_id: user.userdetail.id,
                        }
                    }
                ))
            } catch (e) {
                console.log(e);
            }
        }
    }

    // Fires on comment submission.
    async function handleCommentSubmit(e) {
        if (isEmptyOrSpaces(commentInput.trim())){
            return;
        }
        if (replyingTo && isEmptyOrSpaces(removeFirstWordFromInput(commentInput))) {
            return;
        }
        setCommentInput("");
        setSubmitting(true);
        e.preventDefault();
        e.stopPropagation();
        try {
            let commentData = {
                comment: commentInput.trim(),
                post_id: selected === 0 ? post_id : postDetails.subs.items[selected-1].id,
                status: "CREATED",
                user_id: user.userdetail.id,
                type: "PARENT",
            }
            if (replyingTo){
                commentData.type = "SUB";
                commentData.replyUserID = replyingTo.user.id;
                commentData.parent_id = replyingTo.id;
                commentData.comment = removeFirstWordFromInput(commentInput);
            }
            await API.graphql(graphqlOperation(createComment, {input: commentData}));
            setCommentInput("");
            fetchComments();
            setReplyingTo();
            setSubmitting(false);
        } catch (ex) {
            console.log(ex);
        }
    }



    /**
     *  useEffects
     */

    // componentDidMount - fetch post details and add escape key listeners to exit modal.
    useEffect(() => {
        fetchPostDetails();
        document.addEventListener("keydown", onEscape);
        window.addEventListener("beforeunload", onUnload)
        document.body.scroll = "false";
        document.body.style.overflowY = 'hidden';

        // componentWillUnmount - cleanup event listeners, and submit reactions.
        return () => {
            document.removeEventListener("keydown", onEscape);
            window.removeEventListener("beforeunload", onUnload);
            document.body.scroll = "true";
            document.body.style.overflowY = 'scroll';
        }
    // eslint-disable-next-line
    }, [])

    // componentDidUpdate(selected) - fetch selected post's comments when the selected index changes.
    useEffect(() => {
        if (!comments[selected])
            fetchComments();
        else
            initialLiked[selected] = liked[selected];
    // eslint-disable-next-line
    }, [selected]);

    // componentDidUpdate(isOpen) - ellipsis menu stuff
    useEffect(() => {
        if(isOpen){
            document.addEventListener("click", hideDropdown);
        }

        // componentWillUnmount
        return () => {
            document.removeEventListener("click", hideDropdown);
        }
    }, [isOpen])



    /**
     *  Utility functions
     */

    // Checks if string is empty or is empty space.
     function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !== null;
    }

    // Removes first word from comment input
    function removeFirstWordFromInput(str) {
        str = str.substr(str.indexOf(" ") + 1);
        str.trim();
        return str;
    }



    return(
        <div className="postModal-wrapper" onClick={e => {
            if (e.target.className === "postModal-wrapper")
                handleOutsideClick();
        }}>
            <div className="postModal-in-wrapper">
                <div className="bg-image-container">
                    <div className={"bg-image" + (postDetails ? "" : " skeleton")} style={{backgroundImage: postDetails ? "url("+ generateFileUrl(postDetails.file) +")" : "none"}}></div>
                </div>
                <i className="fas fa-times-circle" onClick={handleOutsideClick}></i>
                {
                    user &&
                        <div className="ellipsis-menu">
                            <i className="fas fa-ellipsis-v" onClick={handleEllipsisClick}/>
                            <div>
                                {isOpen && 
                                    <div className="outtDiv">
                                        <div className="innDiv">
                                            {   
                                                (postDetails && user.userdetail.id === postDetails.user.id) &&
                                                    <> 
                                                        <Link 
                                                            to={{
                                                                pathname: `/edit/${encodeURL(post_id)}`, 
                                                                state: { background: location.state.background }
                                                            }}>
                                                            <i className="fas fa-pencil-alt">
                                                                <span>Засах</span>
                                                            </i>
                                                        </Link>
                                                        <i className="far fa-trash-alt"><span>Устгах</span></i>
                                                    </>
                                            }
                                            <i className="fas fa-exclamation-triangle"><span>Репорт</span></i>
                                        </div>
                                    </div> }
                            </div>
                        </div>
                }
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
                                    {   
                                        comments[selected] && 
                                            <>
                                                <div className={"post-reaction" + (liked[selected] ? " active-reaction" : "")} onClick={handleReaction}>
                                                    <i className={(liked[selected] ? "fas" : "far") + " fa-hand-peace"}></i>
                                                    <p>{likes[selected] + (liked[selected] ? 1 : 0)}</p>
                                                </div>
                                                <div className="post-reaction" onClick={handleCommentReaction}>
                                                    <i className="far fa-comment-dots"></i>
                                                    <p>{comments && (comments[selected] ? comments[selected].length : 0)}</p>
                                                </div>
                                                <div className="post-reaction">
                                                    <i className="fas fa-share"></i>
                                                    <p>0</p>
                                                </div>
                                            </>
                                    }
                                </div>
                            </div> :
                            <div className="post-image-skeleton">
                            </div>
                        }
                    </div>
                    <div className="right-side">
                        <div className="postModal-header">
                            {
                                postDetails ?
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
                                        {
                                            selected === 0 ?
                                                postDetails.title &&
                                                    <div className="post-description">
                                                        <p>{postDetails.title}</p>
                                                    </div> :
                                                postDetails.subs.items[selected-1].title &&
                                                    <div className="post-description">
                                                        <p>{postDetails.subs.items[selected-1].title}</p>
                                                    </div>
                                        }
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
                        {
                            (postDetails && postDetails.commentType === "ENABLE") ? 
                                <React.Fragment key="commentoutermyguy">
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
                                    <div className="comment-editor-wrapper">
                                        {
                                            user &&
                                                <>
                                                    { 
                                                        replyingTo &&
                                                            <div className="comment-replying">
                                                                <p>Replying to <strong>{replyingTo.user.firstname}</strong></p>
                                                            </div> 
                                                    }
                                                    <form className="comment-editor" onSubmit={handleCommentSubmit}>
                                                        <textarea maxLength="" disabled={submitting} spellCheck="false" name="post-comment" id="post-comment" rows="1" wrap="hard" placeholder="Сэтгэгдэл үлдээх"
                                                            value={commentInput} onChange={handleCommentChange} onKeyPress={handleCommentEnter}></textarea>
                                                        <button type="submit">
                                                            <i className="far fa-paper-plane"></i>
                                                        </button>
                                                    </form>
                                                </>
                                        }
                                    </div>
                                </React.Fragment> :
                                <div className="comments-wrapper skeleton">
                                    <div className="comment-skeleton-line skeleton"></div>
                                    <div className="comment-skeleton-line skeleton"></div>
                                    <div className="comment-skeleton-line skeleton"></div>
                                    <div className="comment-skeleton-line skeleton"></div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal