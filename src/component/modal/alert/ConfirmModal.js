import { Fragment } from 'react'
import RoundedButton from '../../buttons/general/RoundedButton'
import './css/Confirm.css'

function ConfirmModal(props){

    const handleClickBtn = (type) => {
        if(type){
            if(props.data.onConfirm){
                props.data.onConfirm(props.data.onConfirmParams)
            }
        }else{
            if(props.data.onCancel){
                props.data.onCancel(props.data.onCancelParams)
            }
        }
        props.setShow(false)
    }

    return(
        <Fragment>
            { props.show ?
                <div className="confirm-out">
                    <div className="confirm-wrapper">
                        <div className="confirmmodal-wrapper">
                            <div className="approve">
                                <h2>{props.data.title}</h2>
                                <div>{props.data.content}</div>
                                <div className="confirm-buttons">
                                    <RoundedButton content="Үгүй" onClick={() => handleClickBtn(false)}/>
                                    <RoundedButton content="Тийм" onClick={() => handleClickBtn(true)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
        </Fragment>
    )
}

export default ConfirmModal
