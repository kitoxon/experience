import './css/SubMenu.css'

function SubMenu() {
    return(
        <div className="outtDiv">
            <div className="innDiv">
                <i className="far fa-bookmark"><span>Хадгалах</span></i>
                <i className="fas fa-pencil-alt"><span>Засах</span></i>
                <i className="far fa-trash-alt"><span>Устгах</span></i>
                <i className="fas fa-exclamation-triangle"><span>Репорт</span></i>
            </div>
        </div>
    )
}

export default SubMenu