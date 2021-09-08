import "./css/UserConfig.css"
import TextFieldWithLabel from "../../component/input/TextFieldWithLabel"
import TextAreaWithLabel from "../../component/input/TextAreaWithLabel"
import Select, { components } from 'react-select';
import RoundedButton from "../../component/buttons/general/RoundedButton";
import UserSidebar from '../../component/profile/UserSidebar'
import { useState } from "react";
import DeleteProfileModal from "../../component/modal/profile/DeleteProfileModal";

function UserConfig() {
    const [showDeleteProfile, setShowDeleteProfile] = useState(false);
    const [facebook, setFacebook] = useState('')
    const [section, setSection] = useState('dashboard')
    const options = [
        { value: 'public', label: 'Нээлттэй профайл', icon: "fas fa-globe-americas" },
        { value: 'private', label: 'Хаалттай профайл', icon: "fas fa-lock" }
    ];
    const { Option } = components;
    const IconOption = props => (
        <Option {...props}>
          <i className={props.data.icon} alt={props.data.label}/>
          {props.data.label}
        </Option>
    );
    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', font: 'normal normal 500 20px/24px Montserrat', color: '#000' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            width: '99%',
            backgroundColor: isDisabled
              ? null
                : isFocused
                    ? "#F6F6F6"
                    : "white",
            font: "normal normal 500 20px/24px Montserrat",
            color: isDisabled
              ? '#ccc'
              : 'black',
            cursor: isDisabled ? 'not-allowed' : 'default',
            ':active': {
              ...styles[':active'],
              backgroundColor:
                !isDisabled && (isSelected ? data.color : 'white'),
            },
          };
        },
    };
    return (
        <>
            <div className="UserConfig-wrapper">
                <div className="left-side">
                    <div className="UserConfig-main-window">
                        <div className="UserConfig-main-wrapper">
                            <div className="UserConfig-header">
                                <h3>Хэрэглэгчийн тохиргоо</h3>
                            </div>
                            <div className="dashboard-nav">
                                <p id="section-dashboard" className={section === "dashboard" ? "active-link" : ""} onClick={() => {setSection("dashboard")}}>Хувийн мэдээлэл</p>
                                <p id="section-activity" className={section === "activity" ? "active-link" : ""} onClick={() => {setSection("activity")}}>Холбоо барих</p>
                                <p id="section-log" className={section === "log" ? "active-link" : ""} onClick={() => {setSection("log")}}>Нууцлал</p>
                            </div>
                            {section === "dashboard" ? 
                                <div className="user-personal-info">
                                    <div className="user-personal-header">
                                        <h4>Хувийн мэдээлэл</h4>
                                    </div>
                                    <TextFieldWithLabel name="userinfo-lastname" label="Нэр" placeholder="Нэр" />
                                    <div className="textFieldWithLabel-wrapper">
                                        <label htmlFor="">Холбоос нэр</label>
                                        <div className="textField-wrapper">
                                            <p className="">www.caak.mn/u/</p><input placeholder="Холбоос нэр" name="userinfo-handle" id="userinfo-handle"></input>
                                        </div>
                                    </div>
                                    <TextAreaWithLabel name="userinfo-bio" label="Тухай" placeholder="Өөрийнхөө тухай бичнэ үү." />
                                </div>:
                                section === "activity" ? 
                                    <div className="user-contact-info">
                                        <div className="user-contact-header">
                                            <h4>Холбоо барих</h4>
                                        </div>
                                        <div className="dual-textfield">
                                            <TextFieldWithLabel name="userinfo-phonenumber" label="Утасны дугаар" placeholder="Утас" disabled />
                                            <TextFieldWithLabel name="userinfo-email" label="Имэйл" placeholder="Имэйл" disabled />
                                            <TextFieldWithLabel defaultValue={facebook} name="userinfo-facebook" label="Сошиал хаягууд" placeholder="Facebook" onChange={(e) => setFacebook(e.target.value)}/>
                                            <TextFieldWithLabel name="userinfo-instagram" placeholder="Instagram" />
                                            <TextFieldWithLabel name="userinfo-twitter" placeholder="Twitter" />
                                            <TextFieldWithLabel name="userinfo-linkedin" placeholder="Linkedin" />
                                        </div>
                                    </div>:
                                    section === "log" ? 
                                        <div>
                                            <div className="user-privacy">
                                                <div className="user-privacy-header">
                                                    <h4>Нууцлал</h4>
                                                </div>
                                                <div className="user-privacy-selection">
                                                    <Select 
                                                        styles={customStyles}
                                                        defaultValue={options[0]}
                                                        options={options}
                                                        components={{ Option: IconOption, SingleValue: IconOption }}
                                                        isSearchable={false}
                                                    />
                                                </div>
                                                <div className="user-privacy-checkbox">
                                                    <label htmlFor="">Элссэн группуудыг ил харуулах</label>
                                                    <input type="checkbox" name="user-show-joined-groups" id="user-show-joined-groups"></input>
                                                </div>
                                                <div className="user-privacy-checkbox">
                                                    <label htmlFor="">Үүсгэсэн группуудыг ил харуулах</label>
                                                    <input type="checkbox" name="user-show-created-groups" id="user-show-created-groups"></input>
                                                </div>
                                                <TextFieldWithLabel name="user-current-password" label="Нууц үг солих" placeholder="Одоогийн нууц үг" />
                                                <TextFieldWithLabel name="user-new-password" placeholder="Шинэ нууц үг" />
                                                <TextFieldWithLabel name="user-new-password-confirmation" placeholder="Шинэ нууц үг давтах" />
                                                <p className="user-forgot-password">Нууц үгээ мартсан уу?</p>
                                            </div>
                                            <div className="UserConfig-footer">
                                                <p className="user-delete-profile" onClick={() => {setShowDeleteProfile(true)}}>Профайл устгах</p>
                                            </div>
                                            <div className="deleteprofile">
                                                <DeleteProfileModal onClose={() => setShowDeleteProfile(false)} show={showDeleteProfile}/>
                                            </div>
                                        </div>:
                                        <p>section not found</p>}                    
                            
                        </div>
                        <div className="user-buttons">
                            <RoundedButton content="Болих" />
                            <RoundedButton content="Хадгалах" />
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <UserSidebar/>
                </div>
            </div> 
        </>
    )
}

export default UserConfig;