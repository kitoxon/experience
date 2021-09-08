import './css/ReportModal.css'
import { useState } from 'react'

function ReportModal() {
    const [isDropped, setIsDropped] = useState(false);
    return (
        <div className="reportOutDiv">
            <div className="reportInDiv">
                <h2>Репорт</h2>
                <i className="fas fa-times-circle"></i>
                <div className="reportType">
                    <div className="copyright">
                        <p>Зохиогчийн эрх зөрчсөн</p>
                        <div className={`list ${isDropped ? 'collapsed' : 'expanded'}`}> 
                            <li>Мэдээ хуулсан<i className="far"><i className="fa"></i></i></li>
                            <li>Гэрэл зураг ашигласан<i className="far"><i className="fa"></i></i></li>
                            <li>Дуу ая ашигласан<i className="far"><i className="fa"></i></i></li>
                            <li>Дүрс бичлэг ашигласан<i className="far"><i className="fa"></i></i></li>
                            <li>Ном, сэтгүүлийн материал авсан<i className="far fa"><i className="fa"></i></i></li>
                            <li>Нийтлэл пост хуулсан<i className="far"><i className="fa"></i></i></li>
                        </div>
                    </div>
                    <i className="fas fa-chevron-right" onClick={() => {setIsDropped(!isDropped)}}></i>
                </div>
                <div className="reportType">
                    <p>Архи тамхи сурталчилсан</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="reportType">
                    <p>Садар самуун сурталчилсан</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="reportType">
                    <p>Буу зэвсэг сурталчилсан</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="reportType">
                    <p>Бусад</p>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default ReportModal