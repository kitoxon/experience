import './css/GroupLeaders.css'
import DefaultAvatar from "../../../resources/images/default_avatar.jpg"
import RoundedButton from '../../buttons/general/RoundedButton'
function GroupLeaders() {
    return(
        <div className="leadersOutDiv">
            <div className="leadersInDiv">
                <div className="leaders-list">
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>Админ</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
                <div className="leaders-list">
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>Админ</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
                <div className="leaders-list">
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>Админ</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
                <div className="leaders-list">
                    <img src={DefaultAvatar} alt="leader" />
                    <p>Энхгэрэл<span>Админ</span></p>
                    <RoundedButton content="Дагах"/>
                </div>
            </div>
        </div>
    )
}
export default GroupLeaders