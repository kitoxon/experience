import { useEffect, Fragment } from 'react';
import { Auth } from 'aws-amplify';
import RectangleSocialBtn from './RectangleSocialBtn';
import { useUser } from '../../../context/userContext';
// To federated sign in from Facebook
const SignInWithFacebook = (props) => {

    const {signOn} = useUser()

    useEffect(() => {
        const createScript = () => {
            // load the sdk
            window.fbAsyncInit = fbAsyncInit;
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            script.async = true;
            script.onload = initFB;
            document.body.appendChild(script);
        }

        if (!window.FB) createScript();
    }, [])

    const initFB = () => {
        const fb = window.FB;
        console.log('FB SDK initialized', fb);
    }

    const signIn = () => {
        const fb = window.FB;
        fb.getLoginStatus(response => {
            if (response.status === 'connected') {
                getAWSCredentials(response.authResponse);
            } else {
                fb.login(
                    response => {
                        if (!response || !response.authResponse) {
                            return;
                        }
                        getAWSCredentials(response.authResponse);
                    },
                    {
                        // the authorized scopes
                        scope: 'public_profile,email'
                    }
                );
            }
        });
    }

    const getAWSCredentials = async (response) => {
            const { accessToken, expiresIn } = response;
            const date = new Date();
            const expires_at = expiresIn * 1000 + date.getTime();
            if (!accessToken) {
                return;
            }

            const fb = window.FB;
            fb.api('/me', { fields: 'name,email' }, async (response) => {
                const user = {
                    name: response.name,
                    email: response.email,
                };

                await Auth.federatedSignIn('facebook', { token: accessToken, expires_at }, user)
                signOn()
            });
        }


    const fbAsyncInit = () => {
        // init the fb sdk client
        const fb = window.FB;
        fb.init({
            appId   : '1831776936994333',
            cookie  : true,
            xfbml   : true,
            version : 'v2.11'
        });
    }

    return (
        <Fragment>
            <RectangleSocialBtn social="Facebook" action={props.action} onClick={signIn}/>
        </Fragment>
    );
}

export default SignInWithFacebook