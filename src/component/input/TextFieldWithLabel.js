import "./css/TextFieldWithLabel.css"

/**
 * Simple text field with label that expands to width of parent container.
 * Does not add label if it was not provided.
 * 
 * @param {*} props Necessary props:
 *      props.name - Name of text field, also becomes id
 *      props.label - Text of label
 *      props.placeholder - Placeholder text
 *      props.content - Content text
 */

function TextFieldWithLabel(props) {

    let label = null;
    if (props.label != null){
        label = <label htmlFor={props.name}>{props.label}</label>;
    }
    return (
        <div className="textFieldWithLabel-wrapper">
            {label}
            <input {...props}></input>
        </div>
    )
}

export default TextFieldWithLabel;