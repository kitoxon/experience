import "./css/RoundedButton.css"
import Loader from "react-loader-spinner";
/**
 * Rounded black button that expands to width of parent container.
 * 
 * @param {*} props Necessary props:
 *      props.content - Text content of button
 *      props.onClick - onclick function
 */

function RoundedButton(props) {
    return (
        <button className="roundedButton-wrapper" onClick={props.onClick} disabled={props.disabled}>
            {(props.loading) ? 
                <Loader type="ThreeDots" color="#fff" height={10} width={50} />: 
                <p>{props.content}</p>
            }
        </button>
    )
}

export default RoundedButton;