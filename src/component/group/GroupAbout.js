import './css/GroupAbout.css'

function GroupAbout(props) {
    return(
        <div className="groupOutDiv">
            <div className="groupHeadDiv">
                <h2>{props.headline}</h2>
                <div className="groupInDiv">
                    {props.about}
                    {props.rules}
                    {props.leaders}
                    {props.members}
                </div>  
            </div>
            
        </div>
    )
}
export default GroupAbout