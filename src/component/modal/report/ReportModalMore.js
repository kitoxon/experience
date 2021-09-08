import './css/ReportModal.css'
import TextAreaWithLabel from '../../input/TextAreaWithLabel'
import { useState } from 'react'

function ReportModalMore(){
    const [isDropped, setIsDropped] = useState(false);
    return(
        <div className="reportOutDiv">
            <div className="reportInDiv">
                <h2>Зохиогчийн эрх зөрчсөн</h2>
                <i className="fas fa-times-circle"></i>
                <div className="reportType">
                    <div className="copyright">
                        <p>Мэдээ хуулсан</p>
                        <div className={`list ${isDropped ? 'collapsed' : 'expanded'}`} style={{width: '100%', background:'transparent'}}> 
                            <TextAreaWithLabel placeholder="Тайлбар бичнэ үү"/>
                        </div>
                    </div>
                    <i className="fas fa-chevron-right" onClick={() => {setIsDropped(!isDropped)}}></i>
                </div>
            </div>
        </div>
    )
}
export default ReportModalMore