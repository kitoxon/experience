import TextFieldWithLabel from "../../../component/input/TextFieldWithLabel";
import RoundedButton from "../../../component/buttons/general/RoundedButton";
import LoginFooter from "../../../component/loginfooter/LoginFooter";
import '../css/LoginPage.css'
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Step7 from './Step7'
import Consts from "../../../Utility/Consts";
import Validate from "../../../Utility/Validate";
import { Auth } from "aws-amplify";

function Step6(props) {
    const history = useHistory()
    const [modal, setModal] = useState(false)

    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const validate = {
        password: {
            value: password,
            type: Consts.typePassword,
            onChange: setPassword,
        },
        passwordRepeat: {
            value: passwordRepeat,
            type: Consts.typePasswordRepeat,
            onChange: setPasswordRepeat
        },
        code: {
            value: code,
            type: Consts.typeRequired,
            onChange: setCode
        }
    }
    

    const { handleChange, handleSubmit, errors} = Validate(validate)


    const toggleModal = async () => {
        try{
            setLoading(true)
            await Auth.forgotPasswordSubmit(props.username, code, password)
            setModal(!modal)
        }catch(ex){
            if(ex.code === "CodeMismatchException"){
                setError("Баталгаажуулах код буруу байна")
            }
            console.log(ex)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div>
            {modal && (
                <Step7/>
            )}
            <div className="outerDiv" style={{display: modal ? "none" : ""}}>
                <div className="innerDiv">
                    <div className="insideDiv">
                        <i className="fas fa-times" onClick={() => history.push("/")}></i>
                        <h2>Нууц үг мартсан</h2>
                            <p className="errormessage">{error}</p>
                            <TextFieldWithLabel name="code" value={code} label="Баталгаажуулах код" onChange={handleChange} placeholder="Баталгаажуулах код"/>
                            {errors.code && <p className="errormessage">{errors.code}</p>}
                            <TextFieldWithLabel value={password} onChange={handleChange} name="password" placeholder="Нууц үгээ бичнэ үү" label="Нууц үг" type="password"/>
                            {errors.password && <p className="errormessage">{errors.password}</p>}
                            <TextFieldWithLabel value={passwordRepeat} onChange={handleChange} name="passwordRepeat" placeholder="Нууц үгээ давтан бичнэ үү" label="Нууц үг давтах" type="password" />
                            {errors.passwordRepeat && <p className="errormessage">{errors.passwordRepeat}</p>}   
                            <RoundedButton textColor="#fff" bgColor="#000000" content="Үргэжлүүлэх" onClick={() => handleSubmit(toggleModal)} loading={loading} disabled={loading}/>
                    </div> 
                    <LoginFooter />
                </div>
            </div>
        </div>
    )
}

export default Step6