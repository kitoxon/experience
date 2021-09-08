import "./css/TextAreaWithLabel.css"

/**
 * Simple text field with label that expands to width of parent container
 * 
 * @param {*} props Necessary props:
 *      props.name - Name of text field, also becomes id
 *      props.label - Text of label
 *      props.placeholder - Placeholder text
 *      props.content - Text area content text
 */

function TextFieldWithLabel(props) {
    return (
        <div className="textAreaWithLabel-wrapper">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea id={props.name} defaultValue={props.defaultValue} name={props.name} placeholder={props.placeholder} onChange={props.onChange}>{props.content}</textarea>
        </div>
    )
}

export default TextFieldWithLabel;