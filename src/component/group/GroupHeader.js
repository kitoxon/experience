import './css/GroupHeader.css'
import DefaultAvatar from "../../resources/images/default_avatar.jpg"


function GroupHeader(props) {

    return(
        <div className="headerOutDiv">
            <div className="greyDiv">
        </div>
            <div className="whiteDiv">
                <div className="groupProfile">
                    <img src={DefaultAvatar} alt="groupAvatar"/>
                    <div>
                        <h1>{props.name}</h1>
                        <span>g/jisheener</span>
                    </div>
                    {props.leavebutton}
                </div>
            </div>
        </div>
    )
}  

export default GroupHeader