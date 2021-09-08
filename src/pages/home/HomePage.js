import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import './css/HomePage.css'
import RecommendedTag from '../../component/home/RecommendedTag';
import Post from '../../component/home/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { getUserDetail, searchPosts } from '../../graphql-custom/queries'
import { onCreatePost, onUpdatePost } from '../../graphql/subscriptions';
import { useUser } from '../../context/userContext';
import { checkUser } from '../../Utility/Util';



function HomePage(){

    const [postsSt, setPostsSt] = useState([])
    const [postSt, setPostSt] = useState({})
    const [updatedPost, setUpdatedPost] = useState({})
    const {user, setFollowing} = useUser()
    // const [nextToken, setNextToken] = useState(null)
    const [loading, setLoading] = useState(false)

    // const nextTokenRef = React.useRef(nextToken);
    

    async function followinguser(){
        setLoading(true)
        try{
            if(checkUser(user)){
                const usrfollow = await API.graphql(graphqlOperation(getUserDetail, {id: user.userdetail.id}))
                setFollowing(usrfollow.data.getUserDetail.following.items)   
            }else{
                setFollowing([])
            }
        }catch(ex){
            console.log(ex)
        }finally{
            setLoading(false)
        }
    }

    const fetchPosts = async (next, token) => {
        setLoading(true)
        try {
            let posts = await API.graphql({ 
                query: searchPosts,
                variables: {filter: {status: {eq: 'CONFIRMED'}, type: {eq: 'PARENT'}}, sort: {direction: 'desc', field: 'createdAt'}},
                authMode: 'AWS_IAM'
            });
            let resposts = posts.data.searchPosts
            // nextTokenRef.current = resposts.nextToken
            setPostsSt(resposts.items)
            
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    }
    
    
    useEffect(() => {
       if(Object.keys(postSt).length > 0){
            let postsArray = [...postsSt]
            postsArray.unshift(postSt)
            setPostsSt(postsArray)
       }
       // eslint-disable-next-line
    }, [postSt])


    useEffect(() => {
        if(Object.keys(updatedPost).length > 0){
             if(updatedPost.status === "CONFIRMED"){
                let postsArray = [...postsSt]
                postsArray.unshift(updatedPost)
                setPostsSt(postsArray)
             }
        }
        // eslint-disable-next-line
    }, [updatedPost])

    useEffect(() => {
        fetchPosts();
        followinguser();
        const scrollEventListener = () => {
            // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            //     fetchPosts(true, nextTokenRef.current)
            // }
        }
        window.addEventListener('scroll', scrollEventListener);
        
        const subscriptionCreatePost = API.graphql({
            query: onCreatePost,
            authMode: 'AWS_IAM',
        }).subscribe({
            next: ({ provider, value }) => {if(value.data.onCreatePost.type === 'PARENT' && value.data.onCreatePost.status === 'CONFIRMED') {
                setPostSt(value.data.onCreatePost)
            }
        }});

        const subscriptionUpdatePost = API.graphql({
            query: onUpdatePost,
            authMode: 'AWS_IAM',
        }).subscribe({
            next: ({ provider, value }) => setUpdatedPost(value.data.onUpdatePost),
        });

        return () => {
            subscriptionCreatePost.unsubscribe();
            subscriptionUpdatePost.unsubscribe();
            window.removeEventListener('scroll', scrollEventListener);
        }
        // eslint-disable-next-line
    }, [])

    

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };
    return(
        <React.Fragment>
            <div className="HomePage-wrapper">
                <div className="home">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {
                            postsSt.map((post) => {
                                return (
                                    <div key={post.id}>
                                        <Post post={post} />
                                    </div>
                                )
                            })
                        }
                        {postsSt.length > 0 && <RecommendedTag/>}
                        
                    </Masonry>
                    {loading ? 
                        <div className="loader-ellips">
                            <span className="loader-ellips__dot"></span>
                            <span className="loader-ellips__dot"></span>
                            <span className="loader-ellips__dot"></span>
                            <span className="loader-ellips__dot"></span>
                        </div> : null
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage;
