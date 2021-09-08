import './css/GroupBottom.css'

function GroupBottom(){
    return(
        <div className="bottomOutDiv">
            <div className="bottomInDiv">
                <div className="bottomInnerDiv">
                    <ul>
                        <li>Асуулт хариулт</li>
                        <li>Холбоо барих</li>
                        <li>Сурталчилгаа</li>
                    </ul>
                    <ul>
                        <li>Нууцлал</li>
                        <li>Үйлчилгээний нөхцөл</li>
                    </ul>
                </div>
                <div className="User-social-wrapper">
                    <div>
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div>
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </div>
                    <i className="fas fa-copyright"></i>
                    <span>2021 Саак Холдинг ХХК</span>
                </div>
            </div>
        </div>
    )
}
export default GroupBottom