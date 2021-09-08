import "./css/DeleteProfileModal.css"
import TextFieldWithLabel from "../../input/TextFieldWithLabel";
import RoundedButton from "../../buttons/general/RoundedButton";
import { useState } from "react";

/**
 * Modal for UserConfig's profile deletion button.
 * @param {*} props Necessary props:
 *      props.show - Boolean to determine whether modal is visible or not.
 *      props.onClose - Function to handle on close
 */
function DeleteProfileModal(props) {
    const [radio, setRadio] = useState()
    if (!props.show) {
        return null;
    }
    console.log(radio);
    return (
        <div className="DeleteProfileModal-wrapper" onClick={props.onClose}>
            <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
                <div className="modal-header">
                    <h3>Профайл устгах</h3>
                    <div className="checkbox-wrapper">
                        <p className="underline">Профайл устгах</p>
                        <input type="radio" id="deleteprofile-checkbox" name="deleteprofile-checkbox" value="delete" onChange={(e) => {setRadio(e.target.value);}}></input>
                    </div>
                    <div className="checkbox-wrapper">
                        <p className="underline">Профайл идэвхигүй болгох</p>
                        <input type="radio" id="deactivateprofile-checkbox" name="deleteprofile-checkbox" value="deactivate" onChange={(e) => {setRadio(e.target.value);}}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <TextFieldWithLabel label="Баталгаажуулах хэсэг" placeholder="Нууц үгээ оруулна уу." name="deleteprofile-confirmation" />
                    <div className="footer-buttons">
                        <RoundedButton content="Болих" onClick={props.onClose}/>
                        <RoundedButton content="Баталгаажуулах" onClick={() => {
                            // Delete account function here...
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteProfileModal;