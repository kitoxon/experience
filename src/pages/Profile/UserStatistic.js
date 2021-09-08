import { useState } from "react";
import UserSidebar from "../../component/profile/UserSidebar";
import UserActivity from "../../component/profile/UserActivity";
import UserLog from "../../component/profile/UserLog";
import UserDashboard from "../../component/profile/UserDashboard";
import "./css/UserStatistic.css"

/**
 * User statistic page, routes to dashboard/feedback/logs through URL parameters.
 */
function UserStatistic() {
    const [section, setSection] = useState("dashboard");
    return (
        <>
        <div className="UserStatistic-wrapper">
            <div className="left-side">
                <h3 className="title">Хэрэглэгчийн статистик</h3>
                <div className="dashboard-nav">
                    <p id="section-dashboard" className={section === "dashboard" ? "active-link" : ""} onClick={() => {setSection("dashboard")}}>Хянах самбар</p>
                    <p id="section-activity" className={section === "activity" ? "active-link" : ""} onClick={() => {setSection("activity")}}>Хандалт</p>
                    <p id="section-log" className={section === "log" ? "active-link" : ""} onClick={() => {setSection("log")}}>Идэвхийн лог</p>
                </div>
                {section === "dashboard" ? 
                    <UserDashboard /> :
                    section === "activity" ? 
                        <UserActivity /> :
                            section === "log" ? 
                            <UserLog /> : 
                                <p>section not found</p>}
            </div>
            <div className="right-side">
                <UserSidebar/>
            </div>
        </div>
        </>
    )
}

export default UserStatistic;