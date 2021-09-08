import {useEffect } from 'react'
import { Redirect } from 'react-router';
import Authenty from '../../Utility/Authenty'


function SignOut() {

    useEffect (() => {
       Authenty.signOut()
    },[]);

    return <Redirect to="/" />
}

export default SignOut