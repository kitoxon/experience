import VerificationCode from "../../../component/input/VerificationCode"
import RoundedButton from "../../../component/buttons/general/RoundedButton"
import LoginFooter from "../../../component/loginfooter/LoginFooter"
import '../css/LoginPage.css'
import { useState } from 'react'
import { Auth } from 'aws-amplify';
import { mailNumber, useQuery } from "../../../Utility/Util"
import { useUser } from "../../../context/userContext"
import Authenty from "../../../Utility/Authenty"


function Confirm(props){
    
    const [code, setCode] = useState()
    const {setUser} = useUser()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const {removeQuery} = useQuery()

    async function confirmSignUp() {
        try {
            setLoading(true)
            await Auth.confirmSignUp(props.userInfo.username, code);
            await Authenty.signIn(props.userInfo.username, props.userInfo.password, setUser)
            removeQuery("signInUp")
            removeQuery("type")
        } catch (error) {
            setError("Баталгаажуулах код буруу байна")
            console.log('error confirming sign up', error);
        }finally{
            setLoading(false)
        }
    }

    return(
        <div>
            <div className="outerDiv">
                <div className="innerDiv">
                    <div className="insideDiv">
                        <i className="fas fa-times" onClick={() => removeQuery("signInUp")}></i>
                        <h2>Баталгаажуулах</h2>
                            <div style={{width: "100%"}}>
                                <p>{mailNumber(props.userInfo.username)}</p>
                                {/* <p style={{textDecoration: "under-line", cursor: "pointer"}}>Дахин илгээх</p> */}
                                <VerificationCode onChange={(e) => setCode(e.target.value)}/>
                                {<p className="errormessage">{error}</p>}
                                <RoundedButton textColor="#fff" bgColor="#000000" content="Баталгаажуулах" onClick={() => confirmSignUp()} loading={loading} disabled={loading}/>
                            </div>
                    </div> 
                    <LoginFooter />
                </div>
            </div>
        </div>
    )
}
export default Confirm