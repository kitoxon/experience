import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import LoginPage from '../Login/LoginPage';
import SignUp from '../Login/Register/Step0';
import ForgotPassword from '../Login/Register/Step5'
import Util from '../../Utility/Util';
import Masonry from 'react-masonry-css'
import './css/HomePage.css'
import Header from '../../component/layout/Header'
import RecommendedTag from '../../component/home/RecommendedTag';
import Post from '../../component/home/Post';


function HomePage(){
    const images = [
        "https://images.unsplash.com/photo-1627474456207-efcb21e79def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1606788075765-42f69501a452?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1627474457263-d7f14df58dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1627531732547-e16087354233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1627563178411-a90110bb64b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      ]
    const items = images.map((item, i) => {
        return (
            <Post image={images[i]}/>
        )
    });
    
    const history = useHistory();
    let query = Util.useQuery()
    const [loginRegisterPages] = useState({
        signIn: <LoginPage/>,
        signUp: <SignUp/>,
        forgotPassword: <ForgotPassword/>
    })
    return(
        <React.Fragment>
            <Header showLogin={() => history.push("?signInUp=signIn")}/>
            {loginRegisterPages[query.get("signInUp")]}
            <div style={{display: 'flex', justifyContent:'center', marginTop: 20}}>
                <div className="home" style={{width: '66%'}}>
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {items}
                        <RecommendedTag/>
                    </Masonry>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage
