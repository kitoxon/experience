import TextFieldWithLabel from '../input/TextFieldWithLabel'
import SquareButtonWithIcon from '../buttons/general/SquareButtonWithIcon'
import Select, { components } from 'react-select';
import TextAreaWithLabel from '../input/TextAreaWithLabel'
import './css/GroupSetting.css'
import { useState, useEffect } from 'react'
import DefaultAvatar from "../../resources/images/default_avatar.jpg"
import RoundedButton from '../buttons/general/RoundedButton'
import { useUser } from '../../context/userContext'
import { API, graphqlOperation } from 'aws-amplify'
import { getGroupUsers } from '../../graphql-custom/queries';
import { updateGroup } from '../../graphql/mutations'

function GroupSetting(props) {
    const [checked, setChecked] = useState(0)
    const [section, setSection] = useState('dashboard')
    const [role, setRole] = useState('')
    const [about, setAbout] = useState('')
    const [groupabout, setGroupAbout] = useState('')
    const {user} = useUser()
    const pepe = ''
    let userid = user.userdetail.id
    let groupid = props.groupid
    const saveGroupInfo = async () =>{
        try{
            await API.graphql(graphqlOperation(updateGroup, {input: {id: groupid, about: about}}))
        }catch(ex){
            console.log("GroupSetting-saveGroupInfo", ex)
        }
    }
    async function getUserGroup() {
        try{
            let groupname = await API.graphql(graphqlOperation(getGroupUsers, {group_id: groupid, user_id: userid} ))
            let groupinfo = groupname.data.getGroupUsers
            setRole(groupinfo.role)
            setGroupAbout(groupinfo.group.about)
        }catch(ex){
            console.log('Groupsetting-getUserGroup', ex)
        }
    }
    useEffect(() => {
        getUserGroup()
        // eslint-disable-next-line
    }, [])
    function handleCheck(e) {
        console.log(e)
        if (e.currentTarget.checked === true) {
        if(checked >= 3) {
            e.currentTarget.checked = false;
        } else {
            setChecked(checked + 1)
        }
        } else {
        setChecked(checked - 1)
        }
    }
    const options = [
        { value: 'public', label: 'Нээлттэй групп', icon: "fas fa-globe-americas" },
        { value: 'private', label: 'Хаалттай групп', icon: "fas fa-lock" }
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
            width: '80%',
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
    return(
        <div className="settingOutDiv">
            {role === "ADMIN" ? 
                <div className="GroupSetting-main-window">
                    <div className="GroupSetting-main-wrapper">
                        <div className="GroupSetting-header">
                            <h3>Группын тохиргоо</h3>
                        </div>
                        <div className="dashboard-nav">
                            <p id="section-dashboard" className={section === "dashboard" ? "active-link" : ""} onClick={() => {setSection("dashboard")}}>Группын мэдээлэл</p>
                            <p id="section-activity" className={section === "activity" ? "active-link" : ""} onClick={() => {setSection("activity")}}>Удирдагчид</p>
                            <p id="section-log" className={section === "log" ? "active-link" : ""} onClick={() => {setSection("log")}}>Нууцлал</p>
                        </div>
                        {section === "dashboard" ? 
                            <div className="group-info">
                                <div className="group-info-header">
                                    <h4>Группын мэдээлэл</h4>
                                </div>
                                <TextFieldWithLabel defaultValue={props.name} label="Нэр" placeholder="Нэр" />
                                <TextFieldWithLabel  defaultValue='@' label="Холбоос нэр" placeholder="Холбоос нэр" />
                                <TextAreaWithLabel   label="Тухай" defaultValue={groupabout} placeholder="Группын тухай бичнэ үү." onChange={(e) => setAbout(e.target.value)} />
                                
                                <TextFieldWithLabel  label="Утасны дугаар" placeholder="Утас" />
                                <h4>Төрөл сонгох</h4>
                                <div className="hobby side right" style={{display: "flex", flexDirection:"row", flexWrap:"wrap",justifyContent:"center", width:"100%"}}>
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-clock" content="Цаг үе" id="1" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-vest-patches" content="Загварын ертөнц" id="2" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-info-circle" content="Танин мэдэхүй" id="3" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-hiking" content="Аялал" id="4" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-meteor" content="Сансар огторгуй" id="5" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-graduation-cap" content="Боловсрол" id="6" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-plus-square" content="Эрүүл мэнд" id="7" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-hamburger" content="Хоол" id="8" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-brain" content="Сэтгэл судлал" id="9" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-cogs" content="Технологи" id="10" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-running" content="Спорт" id="11" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-microphone" content="Подкаст" id="12" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-video" content="Видео" id="13" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-music" content="Дуу хөгжим" id="14" /> 
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-film" content="Кино" id="15" />
                                    <SquareButtonWithIcon check={handleCheck} icon="fa-theater-masks" content="Зугаа" id="16" />
                                </div>
                                <h4>Группын дүрэм</h4>
                                <div className="rules">
                                    <TextFieldWithLabel  placeholder="Дүрэм 1" />
                                    <TextFieldWithLabel  placeholder="Дүрэм 2" />
                                    <TextFieldWithLabel  placeholder="Дүрэм 3" />
                                    <i className="fas fa-plus-circle" />
                                </div>
                            </div>:
                            section === "activity" ? 
                                <div className="group-leaders">
                                    <div className="group-leaders-header">
                                        <h4>Удирдагчид</h4>
                                    </div>
                                    <TextFieldWithLabel style={{marginTop: 40}} defaultValue={pepe} placeholder="Хайх хүнээ оруулна уу" />
                                    <div className="group-leaders-outDiv">
                                        <div className="group-leaders-list">
                                            <img src={DefaultAvatar} alt="leader" />
                                            <h2>Энхгэрэл Сүрэн</h2>
                                            <select>
                                                <option>Админ</option>
                                                <option>Модедатор</option>
                                                <option>Эдитор</option>
                                                <option>Гишүүн</option>
                                            </select>
                                        </div>
                                        <div className="group-leaders-list">
                                            <img src={DefaultAvatar} alt="leader" />
                                            <h2>Энхгэрэл Сүрэн</h2>
                                            <select>
                                                <option>Админ</option>
                                                <option>Модедатор</option>
                                                <option>Эдитор</option>
                                                <option>Гишүүн</option>
                                            </select>
                                        </div>
                                        <div className="group-leaders-list">
                                            <img src={DefaultAvatar} alt="leader" />
                                            <h2>Энхгэрэл Сүрэн</h2>
                                            <select>
                                                <option>Админ</option>
                                                <option>Модедатор</option>
                                                <option>Эдитор</option>
                                                <option>Гишүүн</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>:
                                section === "log" ? 
                                    <div className="group-privacy">
                                        <div className="group-privacy-header">
                                            <h4>Нууцлал</h4>
                                        </div>
                                        <div className="group-privacy-selection">
                                            <Select 
                                                styles={customStyles}
                                                defaultValue={options[0]}
                                                options={options}
                                                components={{ Option: IconOption, SingleValue: IconOption }}
                                                isSearchable={false}
                                            />
                                        </div>
                                        <div className="group-privacy-checkbox">
                                            <label htmlFor="">Дүрэм ил харуулах</label>
                                            <input type="checkbox" name="user-show-joined-groups" id="user-show-joined-groups"></input>
                                        </div>
                                        <div className="group-privacy-checkbox">
                                            <label htmlFor="">Удирдагчдийг ил харуулах</label>
                                            <input type="checkbox" name="user-show-created-groups" id="user-show-created-groups"></input>
                                        </div>
                                    </div>:
                                    <></>}                    
                    </div>
                    <div className="group-buttons">
                        <RoundedButton content="Болих" />
                        <RoundedButton content="Хадгалах" onClick={() => saveGroupInfo()}/>
                    </div>
                </div>:
                <p>Permission Denied</p>
            }
            
        </div>
    )
}

export default GroupSetting