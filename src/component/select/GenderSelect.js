import './css/GenderSelect.css'

function GenderSelect(props) {
    return (
        <div className="selectgender">
            <p>Та аль нь вэ?</p>
            <div className="genders">
                <input type="radio" id="maleButton" name="gender" value={"male"} {...props} checked={(props.defgender === "male") ? true : false}/>
                <label htmlFor="maleButton">
                    <i className="fas fa-male" style={{fontSize: 52}}></i>
                    <span>Эрэгтэй</span>
                </label>
                <input type="radio" id="femaleButton" name="gender" value="female" {...props} checked={(props.defgender === "female") ? true : false}/>
                <label htmlFor="femaleButton">
                    <i className="fas fa-female" style={{fontSize: 52}}></i>
                    <span>Эмэгтэй</span>
                </label>
            
            </div>
        </div>
    )
}

export default GenderSelect