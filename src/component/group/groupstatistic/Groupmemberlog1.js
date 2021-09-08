import './css/Groupmemberlog.css'
import './css/Groupmemberlog1.css'
import DefaultAvatar from "../../../resources/images/default_avatar.jpg"
import { DateTime } from 'luxon';
import { useState } from 'react';

function Groupmemberlog1() {
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
    return(
        <div className="memberlogOut">
            <div className="groupsearch">
                <i className="fas fa-search" aria-hidden="true"/>
                <input type="text" placeholder="Хүссэн гишүүнээ хайгаарай."></input>
            </div>
            <div className="memberlogIn1">
                <img src={DefaultAvatar} alt="groupavatar"/>
                <div className="groupmembername">
                    <h1>Индра Б.</h1>
                    <span>@u/indrab</span>
                </div>
                <table>
                    <tr>
                        <th>Нас</th>
                        <th>Хүйс</th>
                        <th>Элссэн огноо</th>
                    </tr>
                    <tr>
                        <td>23</td>
                        <td>Эм</td>
                        <td>2021.12.12</td>
                    </tr>
                </table>
                <div className="membericonout">
                    <div className="membericon">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </div>
                    <div className="membericon">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </div>
                    <div className="membericon">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div className="membericon">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </div>
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

export default Groupmemberlog1