import { checkUser, generateFileUrl } from "../../Utility/Util"
import RoundedButton from "../buttons/general/RoundedButton"
import './css/Name.css'
import { useState, useEffect } from 'react'
import { useUser } from '../../context/userContext'
import { API,graphqlOperation } from "aws-amplify"
import { createFollowedUsers } from "../../graphql/mutations"


function Name(props){
    const {user} = useUser()
    const [author] = useState(props.author)
    const [isFollowing, setIsFollowing] = useState(false)
    const {following, setFollowing} = useUser()
    const [followers] = useState(author.followers.items ? author.followers.items.length : 0)
    
    const followUser = async () => {
        try{
           if(checkUser(user)){
                let resp = await API.graphql(graphqlOperation (createFollowedUsers, {input: {followed_user_id: user.userdetail.id, user_id: author.id}}))
                setFollowing([...following, {user_id: resp.data.createFollowedUsers.user_id}])
           }else{
                setFollowing([])
           }   
        }catch(ex){
            console.log('name-followUser', ex)
        }
    }

    useEffect(() => {
      if(following.findIndex(i => i.user_id === author.id) > -1){
          setIsFollowing(true)
      }
      // eslint-disable-next-line
    }, [following])
    
    return(
        <div className="outDiv">
            <div className="inDiv" onMouseLeave={props.mouseLeave}>
                <div className="insiDiv">
                    <div className="image">
                        <img src={generateFileUrl(author.pic)} alt="avatar"/>
                    </div>
                    <div className="userName">
                        <h2>{author.firstname}</h2>
                        <div className="userInfo">
                            <div className="aura">
                                <h3>{author.aura ? author.aura : 0}</h3>
                                <span>Аура</span>
                            </div>
                            <div className="followers">
                                <h3>{followers ? followers : 0}</h3>
                                <span>Дагагчид</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <RoundedButton content="Зурвас илгээх"/> */}
                {checkUser(user) && user.userdetail.id === author.id ?
                    <></>:
                    <RoundedButton content={isFollowing ? "Дагаж байгаа" : "Дагах"} disabled={isFollowing} onClick={() => followUser()}/>
                }
                
            </div>
        </div>
    )
}

export default Name