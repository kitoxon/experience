import { useUser } from '../../../context/userContext'
import Authenty from '../../../Utility/Authenty'
import RectangleSocialBtn from '../social/RectangleSocialBtn'

function SocialButton(props) {
    
    const host = "/popupsignin?provider="
    const windowName = "_blank"
    const {setUser} = useUser()

    const openWindow = (type) => {
        const opened = window.open(host + type, windowName)
        const timer = setInterval(function() {
            if(opened.closed) {
                clearInterval(timer);
                Authenty.signOn(setUser)
            }
        }, 100);
    }

    return(
        <div>
            <RectangleSocialBtn social="Facebook" action={props.action} onClick={() => openWindow("facebook")} />
            <RectangleSocialBtn social="Gmail" action={props.action} onClick={() =>  openWindow("google")}/>
            {/* <RectangleSocialBtn social="Twitter" action={props.action} /> */}
        </div>
    )
}

export default SocialButton