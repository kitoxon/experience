import RoundedButton from '../../buttons/general/RoundedButton'
import './css/GroupDesc.css'
function GroupDesc() {
    return(
        <div className="descOutDiv">
            <div className="descInDiv">
                <p>Groups where people get along, feel die desire to contribute to the team, 
                    and are capable of coordinating their efforts may have high-performance levels. 
                    Group can be defined as a collection of individuals who have regular contact and frequent interaction, 
                    mutual influence, the common feeling of camaraderie, and who work together to achieve a common set of goals.</p>
                <div className="groupInfo">
                    <div className="members">
                        <span>0</span>
                        <p>Гишүүд</p>
                    </div>
                    <div className="posts">
                        <span>0</span>
                        <p>Пост</p>
                    </div>
                </div>
                <div className="groupRating">
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                    </div>
                    <span>5.0&nbsp;<span>/10.0</span></span>
                </div>
                <div className="groupBottom">
                    <i className="fas fa-birthday-cake"></i>
                    <span>2021.06.14-нд үүссэн.</span>
                </div>
                <RoundedButton content="Пост оруулах"/>
            </div>
        </div>
    )
}
export default GroupDesc

