import SquareButtonWithIcon from "../../../component/buttons/general/SquareButtonWithIcon"
import LoginFooter from "../../../component/loginfooter/LoginFooter"
import '../css/LoginPage.css'
import RoundedButton from "../../../component/buttons/general/RoundedButton"
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { API, graphqlOperation } from "aws-amplify"
import { listCategories } from '../../../graphql/queries'
import { createUserCategory } from '../../../graphql/mutations'
import { useUser } from '../../../context/userContext'
import Authenty from "../../../Utility/Authenty";

function Step3(){
  const history = useHistory()
  const [checked, setChecked] = useState(0)
  const [categoryChecked] = useState([])
  const [loading, setLoading] = useState(false)

  const [categorys, setCategorys] = useState([])
  const {user, setUser} = useUser();

 
  useEffect(() => {
    const getCategorylist = async () => {
      try{
        let list = await API.graphql(graphqlOperation(listCategories))
        setCategorys(list.data.listCategories.items)
      }catch(ex){
        console.log('Step3-getCategorylist', ex)
      }
        
    }
    getCategorylist()
  }, [])
  
  const createusrCategory = async () => {
    try{
      setLoading(true)
      let category
      for (let i = 0; i < categoryChecked.length; i++){
        category = {
          user_id: user.userdetail.id,
          category_id: categoryChecked[i].id
        }
        await API.graphql(graphqlOperation(createUserCategory, {input: category}))
        // await API.graphql(graphqlOperation(createGroupUsers, {input: {
        //   user_id: user.userdetail.id,
        //   group_id: categoryChecked[i].group_id,
        //   role: "MEMBER"
        // }}))
        Authenty.signOn(setUser)
      }
    }catch(ex){
      console.log('Step3-createUserCategory',ex)
    }finally{
      setLoading(false)
    }
    
  }

 
  function handleCheck(e, data) {
    if (e.currentTarget.checked === true) {
      if(checked >= 3) {
        e.currentTarget.checked = false;
      } else {
        setChecked(checked + 1)
        categoryChecked.push(data)
      }
    } else {
      setChecked(checked - 1)
      categoryChecked.pop(data)
    }
  }

  return(
      <div className="outerDiv">
          <div className="innerDiv">
              <div className="insideDiv">
                  <i className="fas fa-times" onClick={() => history.push("/")}></i>
                  <h2>Сонирхлоо сонгох</h2>
                  <div className="hobby side right" style={{display: "flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"center", gap: "0.75rem", width:"100%"}}>
                      {
                        categorys.map((item, index) => {
                            return (
                              <SquareButtonWithIcon check={(e, data) => handleCheck(e, data)} icon={item.icon} id={item.id} content={item.name} data={item}  key={index}/>
                            )
                        })
                      }
                  </div>

                  <h3>{checked}/3</h3>
                <div>
                  <RoundedButton textColor="#fff" bgColor="#000000" content="Дуусгах" onClick={createusrCategory} loading={loading} disabled={loading}/>
                </div>
              </div> 
              <LoginFooter />
          </div>
      </div>
  )
}
export default Step3
