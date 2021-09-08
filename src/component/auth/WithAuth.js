import { Auth, Hub } from "aws-amplify"
import { useEffect } from "react"
import { useUser } from "../../context/userContext"
import Authenty from "../../Utility/Authenty"

function WithAuth(){

    const {user, setUser} = useUser()

    useEffect(() => {
        const getUser = async () => {
            try{
                let currentUser = await Auth.currentAuthenticatedUser()
                if(!currentUser){
                    setUser(null)
                }else{
                    if(!user){
                        Authenty.doUserDetail(currentUser, setUser)
                    }
                    // else{
                    //     if(!user.userdetail)
                    //     {
                    //         Authenty.doUserDetail(currentUser, setUser)
                    //     }
                    // }
                }
            }catch(ex){
                setUser(null)
                console.log(ex)
            }
        }
        
        getUser()

        Hub.listen('auth', ({ payload: { event } }) => {
            switch (event) {
                case 'signIn':
                    console.log("Authed")
                    break
                default:
            }
        });
    })

    return null

}

export default WithAuth