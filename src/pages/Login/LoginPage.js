import TextFieldWithLabel from '../../component/input/TextFieldWithLabel'
import RoundedButton from '../../component/buttons/general/RoundedButton'
import SocialButton from '../../component/buttons/socialbutton/SocialButton'
import LoginFooter from '../../component/loginfooter/LoginFooter'
import './css/LoginPage.css'
import { useUser } from '../../context/userContext';
import { checkUsernameType, useQuery } from '../../Utility/Util';
import Consts from '../../Utility/Consts';
import Validate from '../../Utility/Validate';
import { useState, useEffect } from 'react'
import Authenty from '../../Utility/Authenty'


function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    

    const validate = {
        username: {
            value: username, 
            type: Consts.typeUsername, 
            onChange: setUsername
        },
        password: {
            value: password,
            type: Consts.typePassword,
            onChange: setPassword
        }
    }

    const { handleChange, errors, handleSubmit } = Validate(validate)

    const {removeQuery, addQuery, addQuerys} = useQuery()
    const {setTempUser, setUser} = useUser()
    
    async function doSignIn(){
        try{
            setLoading(true)
            let user_name = username

            if(checkUsernameType(user_name) === Consts.typePhoneNumber){
                user_name = "+976"+ user_name
            }

            await Authenty.signIn(user_name, password, setUser)
            removeQuery("signInUp")
        }catch(ex){
            console.log(ex)
            setTempUser({username, password})
            if(ex.code === "UserNotConfirmedException"){
                addQuerys({signInUp: "signUp", type: "confirm"})
            }else if(ex.code === "NotAuthorizedException"){
                setError("Нэврэх нэр эсвэл нууц үг буруу байна")
            }
        }finally{
            setLoading(false)
        }
    }
    useEffect (() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleSubmit(doSignIn)
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
            <div className="innerDiv">
                <div className="insideDiv">
                    <i className="fas fa-times" onClick={() => removeQuery("signInUp")}></i>
                    <h1>Нэвтрэх</h1>
                    <SocialButton action="login"/>
                    <div style={{width: "100%", display: "flex", flexDirection: "row", gap: "0.25rem", alignContent: "center", justifyContent: "space-between", textAlign: "center"}}>
                        <div style={{width: "40%", borderTop: "solid", borderWidth: "1px", borderColor: "#70707033", margin: "2rem 0", textAlign: "center"}}></div>
                        <p style={{paddingTop: "7px", opacity: "0.55", font: 'normal normal 300 16px/19px Montserrat'}}>эсвэл</p>
                        <div style={{width: "40%", borderTop: "solid", borderWidth: "1px", borderColor: "#70707033", margin: "2rem 0", textAlign: "center"}}></div>
                        </div>
                        <div style={{width: "100%"}}>
                        <div className="mailorPhone">
                            <span>Имэйл хаяг<span>&nbsp;эсвэл&nbsp;</span>Утасны дугаар</span>
                        </div>
                        {<p className="errormessage">{error}</p>}
                        <TextFieldWithLabel id="username" name="username" type="text" value={username} onChange={handleChange}/>
                        {errors.username && <p className="errormessage">{errors.username}</p>}
                        <div className="passwordReset">
                            <span>Нууц үг</span>
                            <span className="forgotPassword" onClick={() => addQuery("signInUp","forgotPassword")}>Нууц үгээ мартсан уу?</span>
                        </div>
                        <TextFieldWithLabel id="password" name="password" type="password" value={password} onChange={handleChange}/>
                        {errors.password && <p className="errormessage">{errors.password}</p>}
                        <RoundedButton onClick={() => handleSubmit(doSignIn)} textColor="#fff" bgColor="#000000" content="Нэвтрэх" disabled={loading} loading={loading}/>
                        <div className="bottomDiv">
                            <p>Хэрэв та элсээгүй бол</p>
                            <p className="signUp" onClick={() => addQuery("signInUp","signUp")}>"Бүртгүүлэх"</p>
                        </div>
                        </div>
                </div> 
                <LoginFooter />
                
            </div>
        </div>
    );
}

export default LoginPage