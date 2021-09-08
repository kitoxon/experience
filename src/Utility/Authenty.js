import { API, Auth, graphqlOperation } from "aws-amplify"
import { createUserDetail } from "../graphql/mutations"
import { getUserDetailByUserID } from "../graphql-custom/queries"

export async function doUserDetail(usrParam, setUser){
    
  try{
    let fullUsr = usrParam
    let usr = {}
    if(usrParam.attributes){
        if(usrParam.attributes["custom:profile_complete"] === "2"){
            if(!usrParam.userdetail){
                let resp = await API.graphql(graphqlOperation(getUserDetailByUserID, {user_id: usrParam.attributes.sub}))
                console.log(resp)
                usr = resp.data.getUserDetailByUserID.items
                if(usr.length === 0){
                    let usrInfo = {
                      user_id: usrParam.attributes.sub,
                      firstname: usrParam.attributes.nickname,
                      birthdate: usrParam.attributes.birthdate,
                      gender: usrParam.attributes.gender,
                      pic_id: (usrParam.attributes.gender === "male") ? "f5ba122c-b6b9-49fa-92b6-a1143461ec22" : "b2732a02-67c2-4c71-9a15-e8bbaf9e0d05",
                      is_public: true,
                      status:"ACTIVE"
                    }
                    usr = await API.graphql(graphqlOperation(createUserDetail, {input: usrInfo}))
                    usr = await API.graphql(graphqlOperation(getUserDetailByUserID, {user_id: usr.data.createUserDetail.user_id}))
                    usr = usr.data.getUserDetailByUserID.items[0]
                    
                }else{
                    usr = usr[0]
                }
            }
        }
    }
    if(Object.keys(usr) <= 0){
      usr = null
    }
    setUser({...fullUsr, userdetail: usr})
  }catch(ex){
    setUser(null)
    console.log(ex)
  }
}

export const signIn = async (username, password, setUser) => {
    try {
      const currentUser = await Auth.signIn(username, password);
      doUserDetail(currentUser, setUser, setUser)
      return currentUser
    } catch (error) {
      throw error
    }
}

export const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    throw error
  }
}

export const signOn = async (setUser) => {
  try{
      let currentUser = await Auth.currentAuthenticatedUser()
      doUserDetail(currentUser, setUser)
  }catch(ex){
    console.log(ex)
  }
}

export const getSignedUser = async () => {
  try{
      let currentUser = await Auth.currentAuthenticatedUser()
      return currentUser
  }catch(ex){
    console.log(ex)
    return null
  }
}

const Authenty = {doUserDetail, signOn, signIn, signOut, getSignedUser}


export default Authenty