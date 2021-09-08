import './css/GroupStatistic.css'
import { useState } from 'react'
import GroupProfileRight from "../../component/group/groupprofile/groupprofileright"
import GroupMemberlog1 from "../../component/group/groupstatistic/Groupmemberlog1"
import GroupHeader from '../../component/group/GroupHeader'
import RoundedButton from '../../component/buttons/general/RoundedButton'
import GroupDashboard from './GroupDashboard'
import GroupActivity from './GroupActivity'

function GroupStatistic() {
    const [section, setSection] = useState('log')
    return (
        <div>
            <GroupHeader leavebutton={<RoundedButton content="Гарах"/>}/>
            <div className="GroupStatistic-wrapper">
                
                <div className="left-side">
                    <h3 className="title">Группийн статистик</h3>
                    <div className="dashboard-nav">
                        <p id="section-dashboard" className={section === "dashboard" ? "active-link" : ""} onClick={() => {setSection("dashboard")}}>Хянах самбар</p>
                        <p id="section-activity" className={section === "activity" ? "active-link" : ""} onClick={() => {setSection("activity")}}>Хандалт</p>
                        <p id="section-log" className={section === "log" ? "active-link" : ""} onClick={() => {setSection("log")}}>Гишүүд</p>
                    </div>
                    {section === "dashboard" ? 
                        <GroupDashboard /> :
                        section === "activity" ? 
                            <GroupActivity /> :
                                section === "log" ? 
                                <GroupMemberlog1 /> : <p>section not found</p>}
                </div>
                <div className="right-side">
                    <GroupProfileRight />
                </div>
            </div>
        </div>
    )
}

export default GroupStatistic