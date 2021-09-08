import { useState } from "react";
import "./css/SquareButtonWithIcon.css"

/**
 * Square button with Icon and Description, used in interest selection. Has fixed width and height.
 * 
 * @param {*} props Necessary props:
 *      props.content - Text content below icon
 *      props.id - Checkbox input field ID
 *      props.icon - Icon name
 *      props.check - Checkbox change event handler function
 */

function SquareButtonWithIcon(props) {
    
    const [data] = useState(props.data)

    return (
        <div className="squareButtonWithIcon-wrapper">
            <input type="checkbox" value={props.content} id={props.id} data={props.data} name={props.id} onChange={(e) => props.check(e, data)}></input>
            <label htmlFor={props.id}>
                <div className="squareButtonWithIcon-innerDiv">
                    <span className={"fas " + props.icon}></span>
                    <p>{props.content}</p>
                </div>
            </label>
        </div>
    );
}

export default SquareButtonWithIcon;