import TextFieldWithLabel from "../../../component/input/TextFieldWithLabel";
import RoundedButton from "../../../component/buttons/general/RoundedButton";
import LoginFooter from "../../../component/loginfooter/LoginFooter";
import '../css/LoginPage.css'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Step6 from './Step6'
import Consts from "../../../Utility/Consts";
import Validate from "../../../Utility/Validate";
import { Auth } from "aws-amplify";

function Step5() {
    const history = useHistory()
    const [modal, setModal] = useState(false)
    const [error, setError] = useState()
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(false)

    const validate = {
        username: {
            value: username, 
            type: Consts.typeUsername, 
            onChange: setUsername
        }
    }

    const { handleChange, handleSubmit, errors } = Validate(validate)

    const toggleModal = async () => {

        try{
            setLoading(true)
            await Auth.forgotPassword(username)
            setModal(!modal)
        }catch(ex){
            if(ex.code === "UserNotFoundException"){
                setError("Бүртгэлтэй хэрэглэгч олдсонгүй")
            }else if(ex.code === "LimitExceededException"){
                setError("Оролтын хязгаар хэтэрсэн байна, хэсэг хугацааны дараа оролдоно уу.")
            }
            console.log(ex)
        }finally{
            setLoading(false)
        }

    }
    return(
        <div>
            {modal && (
                <Step6 username={username}/>
            )}
            <div className="outerDiv" style={{display: modal ? "none" : ""}}>
                <div className="innerDiv">
                    <div className="insideDiv">
                        <i className="fas fa-times" onClick={() => history.push("/")}></i>
                        <h2>Нууц үг мартсан</h2>
                            <div className="mailorPhone">
                                <span>Имэйл хаяг<span>&nbsp;эсвэл&nbsp;</span>Утас</span>
                            </div>
                            <p className="errormessage">{error}</p>
                            <TextFieldWithLabel name="username" type="text" value={username} onChange={handleChange} />
                            {errors.username && <p className="errormessage">{errors.username}</p>}
                            <RoundedButton textColor="#fff" bgColor="#000000" content="Баталгаажуулах код илгээх" onClick={() => handleSubmit(toggleModal)} loading={loading} disabled={loading}/>
                    </div> 
                    <LoginFooter />
                </div>
            </div>
        </div>
    )
}

export default Step5