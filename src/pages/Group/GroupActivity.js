import { useState } from 'react';
import Select from 'react-select';
import { Line } from 'react-chartjs-2';
import "./css/GroupActivity.css"
import { DateTime } from 'luxon';

function GroupActivity() {
    const [selectType, setSelectType] = useState("view");
    const [selectTime, setSelectTime] = useState("week");
    const selectTypeOptions = [
        { value: "view", label: "Үзсэн" },
        { value: "follow", label: "Дагагчид" },
        { value: "age", label: "Нас" },
        { value: "gender", label: "Хүйс" },
    ]
    const selectTimeOptions = [
        { value:"week", label: "Сүүлийн 7 хоног" },
        { value:"month", label: "Сүүлийн сар" },
        { value:"season", label: "Сүүлийн улирал" },
        { value:"year", label: "Сүүлийн жил" },
        { value:"all", label: "Бүх цаг үе" },
    ]
    const chartData = {
        labels: ([
            'Д',
            'М',
            'Л',
            'П',
            'Ба',
            'Бя',
            'Н'
        ]),
        datasets: [{
            label: '',
            backgroundColor: '#000',
            data: (selectTime === "week" ? [4, 0, 8, 2, 6, 2, 2] : [])
        }]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                grid: {
                    borderColor: '#fff',
                },
                title: {
                    display: true,
                    text: "Үзсэн үзэлт",
                    padding: {
                        bottom: 50,
                    },
                    font: {
                        family: "Montserrat",
                        size: 20,
                        weight: "600"
                    },
                    color: "#000"
                },
                ticks: {
                    font: {
                        family: "Montserrat",
                        size: 18,
                        weight: "600"
                    },
                    color: "#000",
                },
            },
            x: {
                grid: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Өдөр",
                    padding: {
                        top: 30,
                    },
                    font: {
                        family: "Montserrat",
                        size: 20,
                        weight: "600"
                    },
                    color: "#000"
                },
                ticks: {
                    font: {
                        family: "Montserrat",
                        size: 18,
                        weight: "600"
                    },
                    color: "#000",
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        borderColor: "#000",
        borderWidth: 1,
        pointRadius: 0,
        layout: {
            padding: {
                right: 40
            }
        }
    }
    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', font: "normal normal 500 16px/19px Montserrat", color: '#000' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            width: '100%',
            backgroundColor: isDisabled
              ? null
                : isFocused
                    ? "#F6F6F6"
                    : "white",
            font: "normal normal 500 16px/19px Montserrat",
            color: isDisabled
              ? '#ccc'
              : 'black',
            cursor: isDisabled ? 'not-allowed' : 'default',
            ':active': {
              ...styles[':active'],
              backgroundColor:
                !isDisabled && (isSelected ? data.color : 'white'),
            },
          };
        },
    };
    const tableData = [
        {
            image: "https://ii1.pepperfry.com/media/catalog/product/s/a/1600x800/santiago-6-seater-sofa-set-with-ottoman-in-teal-color-by-arra-santiago-6-seater-sofa-set-with-ottoma-hrwpim.jpg",
            state: "Нийтлэгдсэн",
            date: "2021-06-06",
            reports: 0,
            data: [3, 3, 5, 5, 7]
        },
        {
            image: "https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo-v2.jpg",
            state: "Архивлагдсан",
            date: "2021-06-06",
            reports: 1,
            data: [2, 2, 4, 2, 0]
        },
        {
            image: "https://m.media-amazon.com/images/I/51Lb2DeZf4L._AC_SX679_.jpg",
            state: "Хүлээгдэж буй",
            date: "2021-09-06",
            reports: 0,
            data: [1, 1, 1, 1, 1]
        },
        {
            image: "https://ii1.pepperfry.com/media/catalog/product/s/a/1600x800/santiago-6-seater-sofa-set-with-ottoman-in-teal-color-by-arra-santiago-6-seater-sofa-set-with-ottoma-hrwpim.jpg",
            state: "Нийтлэгдсэн",
            date: "2021-06-06",
            reports: 0,
            data: [3, 3, 5, 5, 7]
        },
        {
            image: "https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo-v2.jpg",
            state: "Архивлагдсан",
            date: "2021-06-06",
            reports: 1,
            data: [2, 2, 4, 2, 0]
        },
        {
            image: "https://m.media-amazon.com/images/I/51Lb2DeZf4L._AC_SX679_.jpg",
            state: "Хүлээгдэж буй",
            date: "2021-09-06",
            reports: 0,
            data: [1, 1, 1, 1, 1]
        },
        {
            image: "https://ii1.pepperfry.com/media/catalog/product/s/a/1600x800/santiago-6-seater-sofa-set-with-ottoman-in-teal-color-by-arra-santiago-6-seater-sofa-set-with-ottoma-hrwpim.jpg",
            state: "Нийтлэгдсэн",
            date: "2021-06-06",
            reports: 0,
            data: [3, 3, 5, 5, 7]
        },
        {
            image: "https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo-v2.jpg",
            state: "Архивлагдсан",
            date: "2021-06-06",
            reports: 1,
            data: [2, 2, 4, 2, 0]
        },
        {
            image: "https://m.media-amazon.com/images/I/51Lb2DeZf4L._AC_SX679_.jpg",
            state: "Хүлээгдэж буй",
            date: "2021-09-06",
            reports: 0,
            data: [1, 1, 1, 1, 1]
        },
        {
            image: "https://ii1.pepperfry.com/media/catalog/product/s/a/1600x800/santiago-6-seater-sofa-set-with-ottoman-in-teal-color-by-arra-santiago-6-seater-sofa-set-with-ottoma-hrwpim.jpg",
            state: "Нийтлэгдсэн",
            date: "2021-06-06",
            reports: 0,
            data: [3, 3, 5, 5, 7]
        },
        {
            image: "https://static01.nyt.com/images/2016/12/06/well/move/yoga-for-everyone_promo/yoga-for-everyone_promo-superJumbo-v2.jpg",
            state: "Архивлагдсан",
            date: "2021-06-06",
            reports: 1,
            data: [2, 2, 4, 2, 0]
        },
        {
            image: "https://m.media-amazon.com/images/I/51Lb2DeZf4L._AC_SX679_.jpg",
            state: "Хүлээгдэж буй",
            date: "2021-09-06",
            reports: 0,
            data: [1, 1, 1, 1, 1]
        },
    ];
    const [tablePage, setTablePage] = useState(0);
    const pages = [];
    for(let i=0; i<tableData.length; i++) {
        if (i % 5 === 0){
            pages.push(i/5);
        }
    }
    console.log(tablePage);
    console.log(selectType, selectTime)
    return (
        <div className="GroupActivity-wrapper">
            <div className="post-search-wrapper">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Хүссэн постоо хайгаарай."></input>
            </div>
            <div className="graph-wrapper">
                <div className="select-wrapper">
                    <Select 
                        styles={customStyles}
                        defaultValue={selectTypeOptions[0]}
                        options={selectTypeOptions}
                        isSearchable={false}
                        onChange={e => setSelectType(e.value)}
                    />
                    <Select 
                        styles={customStyles}
                        defaultValue={selectTimeOptions[0]}
                        options={selectTimeOptions}
                        isSearchable={false}
                        onChange={e => setSelectTime(e.value)}
                    />
                </div>
                <div className="line-graph">
                    <Line
                        data={chartData}
                        options={chartOptions}
                    />
                </div>
            </div>
            <div className="posts-wrapper">
                <h3>Группын постууд</h3>
                <table className="posts-table">
                    <thead className="table-header">
                        <tr>
                            <th>Пост</th>
                            <th>Төлөв</th>
                            <th>Огноо</th>
                            <th>Репорт</th>
                            <th>Статистик</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.slice(tablePage*5, tablePage*5 + 5).map((row, i) => {
                                let date = DateTime.fromISO(row.date);
                                let maxValue = Math.max(...row.data);
                                let points = "";
                                let increment = 100/(row.data.length-1);
                                for (let j=0; j<row.data.length; j++) {
                                    let height = 65 - (65*row.data[j]/maxValue);
                                    points += (j)*increment + "," + height + " ";
                                }
                                return (
                                    <tr key={i}>
                                        <td className="image-cell"><img alt="img" src={row.image}></img></td>
                                        <td>{row.state}</td>
                                        <td>{date.year + "." + date.month + "." + date.day}</td>
                                        <td className={row.reports > 0 ? "red-text" : ""}>{row.reports}</td>
                                        <td className="graph-cell">
                                            <div>
                                                <svg viewBox="0 0 100 100">
                                                    <polyline
                                                        fill="none"
                                                        stroke="#000"
                                                        strokeWidth="1"
                                                        points={points}/>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={5}>
                                {
                                    pages.map(i => (
                                        <p key={i} onClick={() => {
                                            setTablePage(i);
                                        }}>{i}</p>
                                    ))
                                }
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default GroupActivity;