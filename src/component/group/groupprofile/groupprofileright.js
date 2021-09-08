import GroupAbout from "../GroupAbout";
import GroupProfileDesc from './groupprofiledesc'
// import GroupRules from '../RightSide/GroupRules'
// import GroupLeaders from '../RightSide/GroupLeaders'
import GroupBottom from '../RightSide/GroupBottom'
// import GroupTopMembers from "./grouptopmembers";

function GroupProfileRight(props) {
    return(
        <div>
            <GroupAbout headline="Группын тухай" about={<GroupProfileDesc groupInfo={props.groupInfo} role={props.role}/>}/>
            {/* <GroupAbout headline="Группын дүрэм" rules={<GroupRules/>}/> */}
            {/* <GroupAbout headline="Группын удирдагчид" leaders={<GroupLeaders/>}/> */}
            {/* <GroupAbout headline="Топ гишүүд" members={<GroupTopMembers/>}/> */}
            <GroupBottom/>
        </div>
    )
}
export default GroupProfileRight