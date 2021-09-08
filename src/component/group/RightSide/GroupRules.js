import './css/GroupRules.css'
import { useState } from 'react'

function GroupRules() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return(
        <div className="ruleOutDiv">
            <div className="ruleInDiv">
                <p>1. Группын дүрэм номер нэг<i className="fas fa-chevron-down"></i></p>
                <p>2. Группын дүрэм номер хоёр<i className="fas fa-chevron-down"></i></p>
                <p>3. Группын дүрэм номер гурав<i className="fas fa-chevron-down"></i></p>
                <p>4. Группын дүрэм номер дөрөв<i className="fas fa-chevron-down"></i></p>
                <p>5. Группын дүрэм номер тав<i className="fas fa-chevron-down"></i></p>
                <p>6. Группын дүрэм номер зургаа<i className="fas fa-chevron-down"></i></p>
                <p>7. Группын дүрэм номер долоо<i className="fas fa-chevron-down"></i></p>
                <p>8. Группын дүрэм номер найм<i className="fas fa-chevron-down" onClick={() => setIsCollapsed(!isCollapsed)}></i></p>
                <div className={`text ${isCollapsed ? 'expanded' : 'collapsed'}`}>
                    <span>Группын дүрэм номер найм Группын дүрэм номер найм Группын дүрэм номер найм Группын дүрэм номер найм Группын дүрэм номер найм Группын дүрэм номер найм</span>
                </div>
            </div>
        </div>
    )
}
export default GroupRules