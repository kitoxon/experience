import { useEffect, useState } from 'react'
import Util from "../../Utility/Util"
import './css/DateSelect.css'

function DateSelect(props) {

   
    const years = []

    for (let i = 2021; i >= 1930; i--) {
        years.push(<option key={i} value={i}>{i}</option>)
    }

    const months = []

    for (let i = 1; i <= 9; i++) {
        months.push(<option key={i} value={"0" + i}>{i}</option>)
    }
    for (let i = 10; i <= 12; i++){
        months.push(<option key={i} value={i}>{i}</option>)
    }

    const days = []

    for (let i = 1; i <= 9; i++) {
        days.push(<option key={i} value={"0" + i}>{i}</option>)
    }
    for (let i = 10; i <= 31; i++) {
        days.push(<option key={i} value={i}>{i}</option>)
    }

    let date = Util.unmergeDate(props.date)
    const [year, setYear] = useState(date.year)
    const [month, setMonth] = useState(date.month)
    const [day, setDay] = useState(date.day)

    const onChangeDate = props.onChange

    useEffect(() => {
        onChangeDate(Util.mergeDate(year, month, day))
    }, [year, month, day, onChangeDate])

    
    return (
        <div>
            <div className='selectBox'>
                <div className='selectDate'>
                    <div className="outDiv">
                        <p>Таны төрсөн он</p>
                        <select name="year" className="date" defaultValue={year} onChange={(e) => setYear(e.target.value)}>
                            <option value={''}  disabled="disabled"></option> 
                            {years}
                        </select>
                    </div>
                    <div className="outDiv">
                        <p>Сар</p>
                        <select name="month" className="date" defaultValue={month} onChange={(e) => setMonth(e.target.value)}>
                            <option value={''}  disabled="disabled"></option>
                            {months}
                        </select>
                    </div>
                    <div className="outDiv">
                        <p>Өдөр</p>  
                        <select name="day" className="date" defaultValue={day} onChange={(e) => setDay(e.target.value)}>
                            <option value={''} disabled="disabled"></option>
                            {days}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelect
