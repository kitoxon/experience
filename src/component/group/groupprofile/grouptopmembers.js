import './css/grouptopmembers.css'
import '../RightSide/css/GroupLeaders.css'
import DefaultAvatar from "../../../resources/images/default_avatar.jpg"
import RoundedButton from '../../buttons/general/RoundedButton'

function GroupTopMembers() {
    return (
        <div className="leadersOutDiv">
            <div className="leadersInDiv">
                <div className="leaders-list">
                    <i className="fas fa-chevron-up"></i>
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>365 Аура</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
                <div className="leaders-list">
                    <i className="fas fa-chevron-up"></i>
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>365 Аура</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
                <div className="leaders-list">
                    <i className="fas fa-chevron-up"></i>
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>365 Аура</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
                <div className="leaders-list">
                    <i className="fas fa-chevron-down"></i>
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>365 Аура</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
            </div>
        </div>
    )
}

export default GroupTopMembers