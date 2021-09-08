// import GroupAbout from "../../component/group/GroupAbout";
// import GroupDesc from '../../component/group/RightSide/GroupDesc';
// import GroupRules from '../../component/group/RightSide/GroupRules'
// import GroupMembers from '../../component/group/RightSide/GroupMembers';
// import GroupLeaders from '../../component/group/RightSide/GroupLeaders';
// import GroupBottom from '../../component/group/RightSide/GroupBottom';
import './css/GroupList.css'
import { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { useUser } from '../../context/userContext'
import { Link } from "react-router-dom";
import { getUserDetail } from "../../graphql-custom/queries";
import UserSidebar from '../../component/profile/UserSidebar';

function GroupList() {
    const [groups, setGroups] = useState([])
    const {user} = useUser()
    const [groupElm, setGroupElm]= useState({admins: null, members: null})
    let userid = user.userdetail.id
    async function userinfo() {
        try{
            let usergroupinfo = await API.graphql(graphqlOperation(getUserDetail, {id: userid}))
            let userroleinfo = usergroupinfo.data.getUserDetail.group.items
            setGroups(userroleinfo)
        }catch(ex){
            console.log('Grouplist-userinfo', ex)
        }
    }
    useEffect(() => {
        userinfo()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {

        let adminElm = []
        let memberElm = []

        groups.map((group, i) => {
            let elmt = (<div key={i} className="group-content" style={{backgroundImage: "url(https://images.unsplash.com/photo-1629927506216-fcdf656d74de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)", backgroundRepeat: "repeat"}}>
                            <div className="layer"></div>
                            <div className="content-wrapper">
                                <img src='https://images.unsplash.com/photo-1629916109663-2dd1ca240689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt="icon" />
                                <div className="text-wrapper">
                                    <Link to={"/group/info/"+groups[i].group_id}>
                                        <h3>{group.group.name}</h3>
                                    </Link>
                                    <p>{group.group.members.items.length + " гишүүд"}</p>
                                </div>
                                <div className="leave-button">Гарах</div>
                            </div>
                        </div>)

            if(group.role === "ADMIN" || group.role === "MODERATOR"){
                adminElm.push(elmt)
            }else{
                memberElm.push(elmt)
            }

            setGroupElm({
                admins: adminElm,
                members: memberElm
            })

            return true
        })
    }, [groups])

    return(
        <div className="grouplist-wrapper">
            <div className="left-side">
                <div className="group-admin">
                    <h2>Удирдаж буй группууд</h2>
                    {groupElm.admins}
                </div>
                <div className="group-joined">
                    <h2>Элссэн группууд</h2>
                    {groupElm.members}
                </div>
            </div>
            <div className="right-side">
                <UserSidebar/>
            </div>
        </div>
    )
}

export default GroupList