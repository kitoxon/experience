import "./css/RectangleSocialBtn.css"

/**
 * Rectangular Social Button that expands to width of parent container.
 * 
 * @param {*} props Necessary props:
 *      props.social - Facebook, Gmail or Twitter
 *      props.action - login or register
 * 
 * @example Example social media background colors:
 *      Facebook - #5F73A7
 *      Gmail - #FFFFFF
 *      Twitter - #4FBCEF
 */

function RectangleSocialBtn(props) {
    let icon;
    let action;
    
    if (props.social === "Facebook")
        icon = "fa-facebook"
    else if (props.social === "Gmail")
        icon = "fa-google";
    else if (props.social === "Twitter")
        icon = "fa-twitter";

    if (props.action === "login")
        action = "нэвтрэх"
    else if (props.action === "register")
        action = "бүртгүүлэх"

    return (
        <button className={"socialButton-wrapper " + props.social} {...props}>
            <span className={"fab " + icon}></span>
            <p>{props.social + "-ээр " + action}</p>
        </button>
    )
}

export default RectangleSocialBtn;