import React, { useEffect } from 'react'
import LoginPage from './LoginPage';
import SignUp from './Register/Step0';
import ForgotPassword from './Register/Step5'
import { useState } from 'react';
import {useQuery} from '../../Utility/Util';
import { useUser } from '../../context/userContext';
import Step4 from './Register/Step4';
import Step3 from './Register/Step3';


function SignInUpModal(){
    
    let {getQuery} = useQuery()

    const {user} = useUser()

    const [loginRegisterPages] = useState({
        signIn: <LoginPage/>,
        signUp: <SignUp/>,
        forgotPassword: <ForgotPassword/>,
        federatedUserDetail: <Step4/>,
        userCategory: <Step3/>
    })
    
    let param = getQuery().get("signInUp")

    if(user){
        param = "logged"
    }

    const [page, setPage] = useState("")

    useEffect(() => {
        if(user){
            if(user.attributes){
                if(!user.attributes["custom:profile_complete"]){
                    setPage("federatedUserDetail")
                }else{
                    if(user.userdetail){
                        if(user.userdetail.categorys.items.length <= 0){
                            setPage("userCategory")
                        }else{
                            setPage("")
                        }
                    }else{
                        setPage("")
                    }
                }
            }
        }
    }, [user])

    return(
        <React.Fragment>
            {loginRegisterPages[param]}
            {loginRegisterPages[page]}
        </React.Fragment>
    )
}

export default SignInUpModal
