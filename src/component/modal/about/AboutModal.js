import { useState } from "react";
import Select from "react-select";
import "./css/AboutModal.css"

function AboutModal(props) {
    const [active, setActive] = useState(false)
    const [page, setPage] = useState(0);
    const [section, setSection] = useState(0);
    if (props.show === false) {
        return null;
    }
    const titles = [
        "Хэрэглэгчийн тухай болон хөрөнгө",
        "Хэрэглэгчийн тухай",
        "Хэрэглэгчийн хөрөнгө",
    ]
    const contents = [
        [
            "Section 1.1. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
            "Section 1.2. You use ur information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
            "Section 1.3. Information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
        ],
        [
            "Section 2.1. When you usnd this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
            "Section 2.2. We work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
            "Section 2.3. Our information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
        ],
        [
            "Section 3.1. When This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
            "Section 3.2. Information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
            "Section 3.3. You’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.",
        ],
    ]
    const options = [
        { value: 1, label: '1-р хэсэг' },
        { value: 2, label: '2-р хэсэг' },
        { value: 3, label: '3-р хэсэг' },
    ]
    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#F6F6F6', font: 'normal normal 500 17px/24px Montserrat', height: '45px', color: '#000' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: isDisabled
              ? null
                : isFocused
                    ? "#F6F6F6"
                    : "white",
            font: "normal normal 500 17px/24px Montserrat",
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
    console.log("rendered")
    return (
        <div className="aboutModal-wrapper" onClick={(e) => {
            if (active === false)
                props.onClose();
            else {
                setSection(0);
                setPage(0);
                setActive(false);
            }
        }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className={"aura-square square-modal " + (active !== false ? (active === "aura" ? "active-square" : "disabled-square") : "") } onClick={(e) => {
                    if (active !== "aura")
                        setActive("aura");
                }}>
                    <i className="fas fa-fire"></i>
                    <p>Аура гэж юу вэ?</p>
                </div>
                <div className={"aura-content text-content " + (active === "aura" ? "active-content" : "")}>
                    <div className="aboutText-header">
                        <h2>Аура гэж юу вэ?</h2>
                    </div>
                    <div className="aboutText-main">
                        <div className="side-nav">
                            <div className="select-wrapper">
                                <Select 
                                    options={options}
                                    defaultValue={options[0]}
                                    isSearchable={false}
                                    styles={customStyles}
                                    onChange={e => setSection(e.value - 1)}
                                    value={options[section]}
                                />
                            </div>
                            {titles.map((title, i) => {
                                return (
                                    <div key={i} className={page === i ? "nav-button active-button" : "nav-button"}>
                                        <p onClick={() => {setPage(i)}}>
                                            {title}
                                        </p>
                                        <i className="fas fa-chevron-left"></i>
                                    </div>  
                                )  
                            })}
                        </div>
                        <div className="aboutText-body">
                            <p>
                                {contents[page][section]}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"member-square square-modal " + (active !== false ? (active === "member" ? "active-square" : "disabled-square") : "") } onClick={(e) => {
                    if (active !== "member")
                        setActive("member");
                }}>
                    <i className="far fa-user"></i>
                    <p>Гишүүнчлэл гэж юу вэ?</p>
                </div>
                <div className={"member-content text-content " + (active === "member" ? "active-content" : "")}>
                    <div className="aboutText-header">
                        <h2>Нууцлалын тухай</h2>
                    </div>
                    <div className="aboutText-main">
                        <div className="side-nav">
                            <div className="select-wrapper">
                                <Select 
                                    options={options}
                                    defaultValue={options[0]}
                                    isSearchable={false}
                                    styles={customStyles}
                                    onChange={e => setSection(e.value - 1)}
                                    value={options[section]}
                                />
                            </div>
                            {titles.map((title, i) => {
                                return (
                                    <div key={i} className={page === i ? "nav-button active-button" : "nav-button"}>
                                        <p onClick={() => {setPage(i)}}>
                                            {title}
                                        </p>
                                        <i className="fas fa-chevron-left"></i>
                                    </div>  
                                )  
                            })}
                        </div>
                        <p className="aboutText-body">
                            {contents[page][section]}
                        </p>
                    </div>
                </div>                                        
            </div>
        </div>
    )
}

export default AboutModal;