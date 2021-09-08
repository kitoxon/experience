import GroupHeader from '../../component/group/GroupHeader'
import GroupSetting from '../../component/group/GroupSetting'
import GroupAbout from '../../component/group/GroupAbout'
import GroupDesc from '../../component/group/RightSide/GroupDesc';
import GroupRules from '../../component/group/RightSide/GroupRules'
import './css/GroupPage.css'
import GroupMembers from '../../component/group/RightSide/GroupMembers';
import GroupLeaders from '../../component/group/RightSide/GroupLeaders';
import GroupBottom from '../../component/group/RightSide/GroupBottom';
import { useParams } from 'react-router-dom';

function GroupPage() {
    const name = useParams().name
    const groupid = useParams().id
    return(
        <div>
            <GroupHeader name={name}/>
            <div className="groupPage">
                <div className="leftside">
                    <GroupSetting name={name} groupid={groupid} />
                </div>
                <div className="rightside">
                    <GroupAbout headline="Группын тухай" about={<GroupDesc/>}/>
                    <GroupAbout headline="Группын дүрэм" rules={<GroupRules/>}/>
                    <GroupAbout headline="Группын удирдагчид" leaders={<GroupLeaders/>}/>
                    <GroupAbout headline="Группын гишүүд" members={<GroupMembers/>}/>
                    <GroupBottom/>
                </div>
            </div>
        </div>
    )
}
export default GroupPage