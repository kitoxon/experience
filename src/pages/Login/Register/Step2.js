// import VerificationCode from "../../../component/input/VerificationCode"
import TextFieldWithLabel from "../../../component/input/TextFieldWithLabel"
import RoundedButton from "../../../component/buttons/general/RoundedButton"
import LoginFooter from "../../../component/loginfooter/LoginFooter"
import DateSelect from "../../../component/select/DateSelect"
import GenderSelect from "../../../component/select/GenderSelect"
import '../css/LoginPage.css'
import { useState, useEffect  } from 'react'
import { useQuery } from "../../../Utility/Util"
import Validate from "../../../Utility/Validate"
import Consts from "../../../Utility/Consts"


function Step2(props){
    

    const {removeQuery, addQuery} = useQuery()
    const [date, setDate] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [loading, setLoading] = useState(false)
    
    const validate = {
        name: {
            value: name,
            type: Consts.typeName,
            onChange: setName
        },
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
        gender: {
            value: gender,
            type: Consts.typeGender,
            onChange: setGender
        }
    }
    

    const { handleChange, handleSubmit, errors} = Validate(validate)

    async function goNext(){
        let user = {...props.userInfo}
        user["password"] = password
        user.attributes["nickname"] = name
        user.attributes["birthdate"] = date
        user.attributes["gender"] = gender
        user.attributes["custom:profile_complete"] = "2"
        user.doSignUp = true
        user.loading = setLoading
        props.setUserInfo(user)
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
        <div>
            <div className="outerDiv">
                <div className="innerDiv">
                    <div className="insideDiv">
                        <i className="fas fa-times" onClick={() => removeQuery("signInUp")}></i>
                        <h2>Хэрэглэгчийн мэдээлэл</h2>
                            <div style={{width: "100%"}}>
                                <TextFieldWithLabel value={name} onChange={handleChange} name="name" label="Таныг хэн гэж дуудах вэ?" placeholder="Хэрэглэгчийн нэр" />
                                {errors.name && <p className="errormessage">{errors.name}</p>}
                                <DateSelect date={date} onChange={setDate}/>
                                <GenderSelect onChange={handleChange} defgender={gender}/>
                                {errors.gender && <p className="errormessage">{errors.gender}</p>}
                                <TextFieldWithLabel value={password} onChange={handleChange} name="password" placeholder="Нууц үгээ бичнэ үү" label="Нууц үг" type="password"/>
                                {errors.password && <p className="errormessage">{errors.password}</p>}
                                <TextFieldWithLabel value={passwordRepeat} onChange={handleChange} name="passwordRepeat" placeholder="Нууц үгээ давтан бичнэ үү" label="Нууц үг давтах" type="password" />
                                {errors.passwordRepeat && <p className="errormessage">{errors.passwordRepeat}</p>}
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
        </div>
    )
}
export default Step2