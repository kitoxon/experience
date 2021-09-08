import { useEffect, useState } from 'react';
import { useUser } from '../../context/userContext'
import { Link, useHistory } from 'react-router-dom'
import CreatePostModal from '../modal/createpost/CreatePostModal';
import NotificationModal from '../modal/notification/NotificationModal'
import logo from '../../resources/images/logos/xslogo.png';
import './css/Header.css';
import '../home/css/SubMenu.css'
import LoginPage from '../../pages/Login/LoginPage';
import SignUp from '../../pages/Login/Register/Step0';
import ForgotPassword from '../../pages/Login/Register/Step5'
import Util, { generateFileUrl } from '../../Utility/Util';
import AboutModal from '../modal/about/AboutModal';
import Authenty from '../../Utility/Authenty';

function Header() {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showDropdowns, setShowDropdowns] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const {user, setUser} = useUser();
    const history = useHistory();
    let query = Util.useQuery();
    const [loginRegisterPages] = useState({
        signIn: <LoginPage/>,
        signUp: <SignUp/>,
        forgotPassword: <ForgotPassword/>
    })

    // let coins = 5000;
    function hamburgerMenu() {
        var x = document.getElementsByClassName("App-header")[0];
        if (x.className === "App-header") {
            x.className += " responsive";
        } else {
            x.className = "App-header";
        }
    }

    const hideDropdowns = () => {
        setShowDropdowns(false);
    }

    
    useEffect(() => {
        if(showDropdowns){
            window.addEventListener("click", hideDropdowns);
        }

        return () => {
            window.removeEventListener('click', hideDropdowns);
        }
    },[showDropdowns])

    return (
        <div>
            <header className="App-header">
                <div className="left-side">
                    <div className="header-logo-wrapper">
                        <Link to="/">
                            <img src={logo} alt="logo" className="header-logo"></img>
                        </Link>
                    </div>
                    <div className="flex-reverse"> 
                        <div className="searchbar-wrapper responsive-menu-item">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input type="text" placeholder="Хайлт хийх"></input>
                        </div>
                        <div className="flex-row">
                            <div id="trend" className="header-link active-header-link responsive-menu-item">
                                <p onClick={() => {document.getElementById('trend').classList.add('active-header-link'); document.getElementById('follow').classList.remove('active-header-link')}}>ТРЕНД</p>
                            </div>
                            <div id="follow" className="header-link responsive-menu-item">
                                <p onClick={() => {document.getElementById('follow').classList.add('active-header-link'); document.getElementById('trend').classList.remove('active-header-link')}}>ДАГАДАГ</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="float-right">
                    <div className="header-ellipsis-menu" onClick={(e) => {
                        e.stopPropagation();
                        if (showDropdowns === "ellipsis") {
                            setShowDropdowns(false)
                        } else {
                            setShowDropdowns("ellipsis")
                        }
                    }}>
                        <p>...</p>
                    </div>
                    <div className="ellipsis-dropdown-container">
                        {
                            showDropdowns === "ellipsis" && (
                                <div className="header-ellipsis-menu-wrapper" onClick={e => e.stopPropagation()}>
                                    <div className="ellipsis-content">
                                        <div>Асуулт хариулт</div>
                                        <div>Холбоо барих</div>
                                        <div>Сурталчилгаа</div>
                                        <div>Нууцлал</div>
                                        <div>Үйлчилгээний нөхцөл</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    { 
                        user && user.userdetail? 
                        <>
                            {/* <div className="header-coins">
                                {coins}
                                <i className="fas fa-coins"></i>
                            </div> */}
                            <div className="header-icons">
                                <i className="far fa-edit" onClick={() => setShowCreatePost(true)}></i>
                                <i className="far fa-bell" onClick={(e) => {
                                    e.stopPropagation(); 
                                    if (showDropdowns === "noti"){
                                        setShowDropdowns(false)
                                    } else {
                                        setShowDropdowns("noti")
                                    }
                                }}></i>
                                <div className="notification-modal-wrapper">
                                    <NotificationModal show={showDropdowns === "noti"} onClick={(e) =>  e.stopPropagation()}/>
                                </div>
                            </div>
                            <div className="user-dropdown">
                                <img src={generateFileUrl(user.userdetail.pic)}
                                    className="user-profileimg" alt="profile"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (showDropdowns === "user"){
                                            setShowDropdowns(false)
                                        } else {
                                            setShowDropdowns("user");
                                        }
                                    }}></img>
                                { showDropdowns === "user" && 
                                    <div className="dropdown-content" onClick={(e) => e.stopPropagation()}>
                                        <Link to="/profile">
                                            <div className="dropdown-header" onClick={() => setShowDropdowns(false)}>
                                                <img alt="profileimg" src={generateFileUrl(user.userdetail.pic)}></img>
                                                <div>
                                                    <h3>{user.userdetail.firstname}</h3>
                                                    {/* <p>@Gereltsetseg</p> */}
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="dropdown-section">
                                            <div className="dropdown-row" onClick={() => {setShowCreatePost(true); setShowDropdowns(false)}}>
                                                <i className="far fa-edit"></i>Пост оруулах
                                            </div>
                                            <div className="dropdown-row" onClick={() => setShowDropdowns(false)}>
                                                <i className="far fa-clone"></i>Миний пост
                                            </div>
                                            <div className="dropdown-row" onClick={() => setShowDropdowns(false)}>
                                                <i className="far fa-bookmark"></i>Хадгаласан пост
                                            </div>
                                            <Link to="/profile/userconfig">
                                                <div className="dropdown-row" onClick={() => setShowDropdowns(false)}>
                                                    <i className="fas fa-cog"></i>Тохиргоо
                                                </div>
                                            </Link>
                                            <Link to="/group">
                                                <div className="dropdown-row" onClick={() => setShowDropdowns(false)}>
                                                    <i className="fas fa-user-friends"></i>Групп
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="dropdown-section">
                                            <div className="dropdown-row" onClick={() => setShowDropdowns(false)}>
                                                <i className="far fa-moon"></i>Шөнийн горим
                                            </div>
                                            <div className="dropdown-row" onClick={() => {setShowAboutModal(true)}}>
                                                <i className="fas fa-fire"></i>Аура гэж юу вэ?
                                            </div>
                                            <div className="dropdown-row" onClick={() => {setShowAboutModal(true)}}>
                                                <i className="far fa-user"></i>Гишүүнчлэл
                                            </div>
                                            <div className="dropdown-row">
                                                <i className="fas fa-hand-holding-usd"></i>Цалинтай болох
                                            </div>
                                        </div>
                                        <div className="dropdown-section">
                                            <div className="dropdown-row" onClick={() => {setShowAboutModal(true)}}>
                                                <i className="far fa-question-circle"></i>Тусламж
                                            </div>
                                            <div className="dropdown-row">
                                                <i className="far fa-file-alt"></i>Үйлчилгээний нөхцөл
                                            </div>
                                            <Link to="/about/privacy">
                                                <div className="dropdown-row">
                                                    <i className="fas fa-user-lock"></i>Нууцлал
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="dropdown-section">
                                            <div className="dropdown-row" onClick={() => {
                                                Authenty.signOut(setUser)
                                            }}>
                                                <i className="fas fa-sign-out-alt"></i>Гарах
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <AboutModal onClose={() => setShowAboutModal(false)} show={showAboutModal} />
                            <CreatePostModal onClose={() => setShowCreatePost(false)} show={showCreatePost} />
                        </> : 
                        <>
                            <button onClick={() => history.push("?signInUp=signIn")} className="header-login responsive-menu-item">
                                Нэвтрэх
                            </button>
                            <button onClick={() => history.push("?signInUp=signUp")} className="header-register responsive-menu-item">
                                Бүртгүүлэх
                            </button>
                        </>
                    }
                    <div className="header-hamburger" onClick={() => hamburgerMenu()}>
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
                
            </header>
          {loginRegisterPages[query.getQuery("signInUp")]}
        </div>
    )
}

export default Header;