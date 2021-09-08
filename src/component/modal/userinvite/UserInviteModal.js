import './css/UserInviteModal.css'

function UserInviteModal(props) {
    return(
        <div className="outside">
            <div className="inside">
                <h2>Хэрэглэгч урих</h2>
                <i className="fas fa-times-circle"></i>
                <h3>Та дараах линкээр хэрэглэгч урина уу</h3>
                <input defaultValue={props.link}></input>
                <span>ХУУЛАХ</span>
            </div>
        </div>
    )
}

export default UserInviteModal