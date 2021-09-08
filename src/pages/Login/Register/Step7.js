import RoundedButton from "../../../component/buttons/general/RoundedButton";
import LoginFooter from "../../../component/loginfooter/LoginFooter";
import '../css/LoginPage.css'
import { useHistory } from "react-router-dom";

function Step7() {
    const history = useHistory()
    return(
        <div className="outerDiv">
            <div className="innerDiv">
                <div className="insideDiv">
                    <i className="fas fa-times" onClick={() => history.push("/")}></i>
                    <h2>Нууц үг амжилттай солигдоо</h2>
                    <RoundedButton textColor="#fff" bgColor="#000000" content="Үргэжлүүлэх" onClick={() => history.push("/?signInUp=signIn")}/>
                </div> 
                <LoginFooter />
            </div>
        </div>
    )
}

export default Step7