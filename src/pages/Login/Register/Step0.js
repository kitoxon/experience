import { Fragment, useEffect, useState } from "react"
import { Auth } from 'aws-amplify'

import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Confirm from "./Confirm"
import { useUser } from "../../../context/userContext"
import { useQuery } from "../../../Utility/Util"

function Step0(){

    const [currentStep, setCurrentStep] = useState("EmailOrPhone")

    const {signIn, tempUser} = useUser()
    const {getQuery} = useQuery()
    
    const [userInfo, setUserInfo] = useState({
        attributes: {}
    })


    useEffect(() => {

        const signUp = async () => {
            try {
                userInfo.loading(true)
                await Auth.signUp(userInfo);
                setCurrentStep("confirm")
            } catch (error) {
                console.log('error signing up:', error)
            }finally{
                userInfo.loading(false)
            }
        }

       if(userInfo){
        if(userInfo.doSignUp === true){
            signUp()
        }
       }

    }, [userInfo, signIn])

    useEffect(() => {
        let type = getQuery().get("type");

        if(type === "confirm"){
            setCurrentStep("confirm")
            setUserInfo(tempUser)
        }
    },[getQuery, tempUser])
    
    return(
       <Fragment>
           {/* <div>
            {JSON.stringify(userInfo)}
           </div>
           {signUpSteps[currentStep]} */}
           {(currentStep === "EmailOrPhone") ? <Step1 setCurrentStep={setCurrentStep} userInfo={userInfo} setUserInfo={setUserInfo}/> : null}
           {(currentStep === "information") ? <Step2 setCurrentStep={setCurrentStep} userInfo={userInfo} setUserInfo={setUserInfo}/> : null}
           {(currentStep === "confirm") ? <Confirm setCurrentStep={setCurrentStep} userInfo={userInfo} setUserInfo={setUserInfo}/> : null}
           {(currentStep === "interest") ? <Step3 setCurrentStep={setCurrentStep} userInfo={userInfo} setUserInfo={setUserInfo}/> : null}
       </Fragment>
    )
}

export default Step0