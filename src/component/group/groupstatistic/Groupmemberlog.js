import './css/Groupmemberlog.css'
import DefaultAvatar from "../../../resources/images/default_avatar.jpg"
import Select from 'react-select';

function Groupmemberlog() {
    const selectTimeOptions = [
        { value:"week", label: "Сүүлийн 7 хоног" },
        { value:"month", label: "Сүүлийн сар" },
        { value:"season", label: "Сүүлийн улирал" },
        { value:"year", label: "Сүүлийн жил" },
        { value:"all", label: "Бүх цаг үе" },
    ]

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', font: "normal normal 500 16px/19px Montserrat", color: '#000' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            width: '100%',
            backgroundColor: isDisabled
              ? null
                : isFocused
                    ? "#F6F6F6"
                    : "white",
            font: "normal normal 500 16px/19px Montserrat",
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
        <div className="memberlogOut">
            <div className="groupsearch">
                <i className="fas fa-search" aria-hidden="true"/>
                <input type="text" placeholder="Хүссэн гишүүнээ хайгаарай."></input>
            </div>
            <div className="memberlogIn">
                <h1>Гишүүд</h1>
                <div className="select">
                    <Select 
                            styles={customStyles}
                            defaultValue={selectTimeOptions[0]}
                            options={selectTimeOptions}
                            isSearchable={false}
                        />
                </div>
                <div className="headers">
                    <span>Нэр</span>
                    <span>Холбоос нэр</span>
                    <span>Элссэн огноо</span>
                    <span>Нас</span>
                    <span>Хүйс</span>
                </div>
                <div className="memberlogInsi">
                    <img src={DefaultAvatar} alt="member" />
                    <span>Даржаа сүх</span>
                    <span>@Darjaasuh</span>
                    <span>2020.12.12</span>
                    <span>21</span>
                    <span>Эр</span>
                </div>
                <div className="memberlogInsi">
                    <img src={DefaultAvatar} alt="member" />
                    <span>Даржаа сүх</span>
                    <span>@Darjaasuh</span>
                    <span>2020.12.12</span>
                    <span>21</span>
                    <span>Эр</span>
                </div>
                
            </div>
        </div>
    )
}

export default Groupmemberlog