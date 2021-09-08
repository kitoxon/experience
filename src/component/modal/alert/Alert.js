import RoundedButton from '../../buttons/general/RoundedButton'
import './css/Alert.css'

function Alert(props){
    if (!props.show) {
        return null;
    }
    return(
        <div className="alert-out">
            <div className="alert-wrapper">
                <div className="alertmodal-wrapper">
                    {props.data.noti === 'success' ?
                        <div>
                            <i className="fas fa-check-circle"></i>
                            <h3>Амжилттай</h3>
                            <p>{props.data.msg}</p>
                        </div>:
                        <div>
                            <i className="fas fa-exclamation-circle"></i>
                            <h3>Амжилтгүй</h3>
                            <p>{props.data.msg}</p>
                        </div>
                    }
                    <RoundedButton content="Хаах" onClick={() => props.setShow(false)}/>
                </div>
            </div>
        </div>
        
    )
}

export default Alert