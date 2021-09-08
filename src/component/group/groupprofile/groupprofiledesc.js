import { API, graphqlOperation } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getGroupUsersByGroup } from '../../../graphql-custom/groups'
import { getPostCount } from '../../../graphql-custom/queries'
import { onCreatePost, onUpdatePost } from '../../../graphql/subscriptions'
import { generateTimeAgo } from '../../../Utility/Util'
import RoundedButton from '../../buttons/general/RoundedButton'
import '../RightSide/css/GroupDesc.css'
import './css/groupprofiledesc.css'

function GroupProfileDesc(props) {

    const [group] = useState(props.groupInfo)
    const [members, setMembers] = useState([])
    const [postCount, setPostCount] = useState(0)
    const [post, setPost] = useState()

    const fetchGroupUsers = async () => {
        let resp = await API.graphql(graphqlOperation(getGroupUsersByGroup, {group_id: group.id}))
        setMembers(resp.data.getGroupUsersByGroup.items)
    }

    const fetchGroupPostCount = async () => {
        let resp = await API.graphql(graphqlOperation(getPostCount, {filter: {group_id: {eq: group.id}, type: {eq: "PARENT"}, status: {eq: "CONFIRMED"}}}))
        let total = resp.data.searchPosts.total
        if(!total){
            total = 0
        }
        setPostCount(total)
    }

    useEffect(() => {
        fetchGroupPostCount()
        fetchGroupUsers()

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

        //eslint-disable-next-line
    },[])

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
            if(post.group_id === group.id) {
                if(post.status === "CONFIRMED"){
                    setPostCount(postCount + 1)
                }else{
                    if(postCount > 0){
                        setPostCount(postCount -1)
                    }
                }
            }
        }catch(ex){
            console.log(ex)
        }
    }

    return( 
        <div className="descOutDiv">
            <div className="descInDiv">
                <p>{group.about}</p>
                <div className="groupInfo">
                    <div className="members">
                        <span>{members.length}</span>
                        <p>Гишүүд</p>
                    </div>
                    <div className="posts">
                        <span>{postCount}</span>
                        <p>Пост</p>
                    </div>
                </div>
                <div className="groupBottom">
                    <span>
                        <i className="fas fa-birthday-cake"></i>
                        {generateTimeAgo(group.createdAt)}
                    </span>
                </div>
                {/* <Link to="/group/statistic">
                    <RoundedButton content="Стастистик"/>
                </Link> */}
                <Link to={"/group/settings/" + group.name + "/" + group.id}>
                    {props.role === "ADMIN" ? 
                        <RoundedButton content="Тохиргоо"/>:
                        <></>
                    }
                </Link>
            </div>
        </div>
    )
}
export default GroupProfileDesc
