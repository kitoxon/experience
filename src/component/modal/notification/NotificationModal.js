import './css/NotificationModal.css'
import DefaultAvatar from "../../../resources/images/default_avatar.jpg"

function NotificationModal(props) {
    if (props.show === false) {
        return null;
    }
    return (
        <div className="notiOutDiv">
            <div className="notiInDiv" onClick={props.onClick}>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таны зурган дээр СААК дарлаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таныг дагалаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах , Сүнжээ, Жигмид болон бусад 8 хүн&nbsp;</span>таны зурган дээр СААК дарлаа..</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таны зурган дээр СААК дарлаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таныг дагалаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах , Сүнжээ, Жигмид болон бусад 8 хүн&nbsp;</span>таны зурган дээр СААК дарлаа..</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таны зурган дээр СААК дарлаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таныг дагалаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах , Сүнжээ, Жигмид болон бусад 8 хүн&nbsp;</span>таны зурган дээр СААК дарлаа..</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таны зурган дээр СААК дарлаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
                <div className="notification">
                    <img src={DefaultAvatar} alt="avatar" style={{borderRadius: "50%"}}/>
                    <span><span>Галбадрах&nbsp;</span>таныг дагалаа.</span>
                    <div className="notiPost"><img src={DefaultAvatar} alt="post"/></div>
                </div>
            </div>
        </div>
    )
}
export default NotificationModal