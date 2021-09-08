import TextFieldWithLabel from "../../../component/input/TextFieldWithLabel"
import RoundedButton from "../../../component/buttons/general/RoundedButton"
import LoginFooter from "../../../component/loginfooter/LoginFooter"
import DateSelect from "../../../component/select/DateSelect"
import GenderSelect from "../../../component/select/GenderSelect"
import '../css/LoginPage.css'
import { useState, useEffect  } from "react"
import { useUser } from "../../../context/userContext"
import {Auth} from "aws-amplify"
import {useQuery } from "../../../Utility/Util"
import Consts from "../../../Utility/Consts"
import Validate from "../../../Utility/Validate"
import Authenty from "../../../Utility/Authenty"


function Step4(){

    const {removeQuery, addQuery} = useQuery()
    const {user,setUser} = useUser()
    const [name, setName] = useState(user ? user.attributes['nickname'] : "")
    const [date, setDate] = useState("")
    const [gender, setGender] = useState("")
    const [loading, setLoading] = useState(false)
    
    const validate = {
        name: {
            value: name,
            type: Consts.typeName,
            onChange: setName
        },
        gender: {
            value: gender,
            type: Consts.typeGender,
            onChange: setGender
        }
    }

    const { handleChange, handleSubmit, errors} = Validate(validate)
    
    async function updateUser() {
        try{
            setLoading(true)
            let usr = await Auth.currentAuthenticatedUser()
            await Auth.updateUserAttributes(usr, {
                nickname: name,
                gender: gender,
                birthdate: date,
                "custom:profile_complete": "2"
            });
            Authenty.signOn(setUser)
        }catch(ex){
            console.log(ex)
        }finally{
            setLoading(false)
        }
    }
    useEffect (() => {
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            handleSubmit(updateUser)
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
                    <h2>Хэрэглэгчийн мэдээлэл</h2>
                        <div style={{width: "100%"}}>
                        <TextFieldWithLabel name="name" value={name} onChange={handleChange} label="Таныг хэн гэж дуудах вэ?" placeholder="Хэрэглэгчийн нэр" />
                        {errors.name && <p className="errormessage">{errors.name}</p>}
                        <DateSelect date={date} onChange={setDate}/>
                        <GenderSelect onClick={handleChange} defgender={gender} onChange={() => {}}/>
                        {errors.gender && <p className="errormessage">{errors.gender}</p>}
                        <div style={{marginBottom: 40}}></div>
                        <RoundedButton textColor="#fff" bgColor="#000000" content="Бүртгүүлэх" onClick={() => handleSubmit(updateUser)} loading={loading} disabled={loading}/>
                        <div className="bottomDiv">
                            <p>Хэрэв та бүртгэлтэй бол</p>
                            <p onClick={() => addQuery("signInUp","signIn")}>"Нэвтрэх"</p>
                        </div>
                        </div>
                </div> 
            <LoginFooter />
        </div>
    </div>
    )
}
export default Step4