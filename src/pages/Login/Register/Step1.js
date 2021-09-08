import TextFieldWithLabel from '../../../component/input/TextFieldWithLabel'
import RoundedButton from '../../../component/buttons/general/RoundedButton'
import SocialButton from '../../../component/buttons/socialbutton/SocialButton'
import LoginFooter from '../../../component/loginfooter/LoginFooter'
import '../css/LoginPage.css'
import { checkUsernameType, useQuery } from '../../../Utility/Util'
import Consts from '../../../Utility/Consts'
import Validate from '../../../Utility/Validate'
import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'


function Step1(props) {

    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const validate = {
        username: {
            value: username, 
            type: Consts.typeUsername, 
            onChange: setUsername
        }
    }

    const { handleChange, handleSubmit, errors } = Validate(validate)
    const {removeQuery, addQuery} = useQuery()  

    async function goNext(){
        setLoading(true)
        let user = {...props.userInfo}
        let errorText = ""
        if(checkUsernameType(username) === Consts.typeEmail){
            user["username"] = username
            user.attributes["email"] = username
            errorText = "Имэйл хаяг бүртгэлтэй байна"
        }else if(checkUsernameType(username) === Consts.typePhoneNumber){
            user["username"] = "+976" + username
            user.attributes["phone_number"] = "+976"+ username
            errorText = "Утасны дугаар бүртгэлтэй байна"
        }else{
            setLoading(false)
            return false
        }
        
        try{
            await Auth.signIn(user.username, "1")
        }catch(ex){
            if(ex.code === "UserNotFoundException"){
                props.setUserInfo(user)
                props.setCurrentStep("information")
            }else{
                setError(errorText)
                return false
            }
        }finally{
            setLoading(false)
        }
    }
    useEffect (() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleSubmit(goNext)
            event.preventDefault()
          }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      });

    return(
        <div className="outerDiv">
            <div className="innerDiv" id="step1">
                <div className="insideDiv">
                    <i className="fas fa-times" onClick={() => removeQuery("signInUp")}></i>
                    <h1>Бүртгүүлэх</h1>
                    <SocialButton action="register"/>
                    <div style={{width: "100%", display: "flex", flexDirection: "row", gap: "0.25rem", alignContent: "center", justifyContent: "space-between", textAlign: "center"}}>
                        <div style={{width: "40%", borderTop: "solid", borderWidth: "1px", borderColor: "#70707033", margin: "2rem 0", textAlign: "center"}}></div>
                        <p style={{paddingTop: "7px", opacity: "0.55", font: 'normal normal 300 16px/19px Montserrat'}}>эсвэл</p>
                        <div style={{width: "40%", borderTop: "solid", borderWidth: "1px", borderColor: "#70707033", margin: "2rem 0", textAlign: "center"}}></div>
                        </div>
                        <div style={{width: "100%"}}>
                        <div className="mailorPhone">
                            <span>Имэйл хаяг<span>&nbsp;эсвэл&nbsp;</span>Утасны дугаар</span>
                        </div>
                        <p className="errormessage">{error}</p>
                        <TextFieldWithLabel name="username" type="text" value={username} onChange={handleChange}/>
                        {errors.username && <p className="errormessage">{errors.username}</p>}
                        <RoundedButton textColor="#fff" bgColor="#000000" content="Бүртгүүлэх" onClick={() => handleSubmit(goNext)} loading={loading} disabled={loading}/>
                        <div className="bottomDiv">
                            <p>Хэрэв та бүртгэлтэй бол</p>
                            <p className="signUp" onClick={() => addQuery("signInUp","signIn")}>"Нэвтрэх"</p>
                        </div>
                        </div>
                </div> 
                <LoginFooter />
            </div>
        </div>
    ) 
}
export default Step1