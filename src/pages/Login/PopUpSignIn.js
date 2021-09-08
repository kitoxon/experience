import { Auth, Hub } from "aws-amplify"
import { Fragment, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "../../Utility/Util"

function PopUpSignIn(){

    const {getQuery} = useQuery()
    const params = useParams()

    useEffect(() => {
      
        async function load(){
            if(getQuery().get("provider") === "facebook"){
                await Auth.federatedSignIn({provider: "Facebook"})
            }else if(getQuery().get("provider") === "google"){
                await Auth.federatedSignIn({provider: "Google"})
            }else{
                console.log(params)
            }
        }

        load()

        Hub.listen('auth', ({ payload: { event } }) => {
            switch (event) {
                case 'signIn':
                    window.self.close()
                    break
                default:
            }
        });
    })

    

    return (
        <Fragment>
        </Fragment>
    )

}

export default PopUpSignIn