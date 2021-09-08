import "./css/UserDashboard.css";
import RoundedButton from "../buttons/general/RoundedButton";
import DefaultAvatar from '../../resources/images/default_avatar.jpg'
import { Line } from 'react-chartjs-2'

function UserDashboard() {
    const data = {
        labels: [' ', ' ', ' ', ' ', ' '],
        datasets: [
          {
            label: 'Сүүлийн 24 цаг',
            data: [0, 5, 10, 5, 15],
            borderColor: '#000',
          },
        ],
      };
      
      const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                grid: {
                    borderColor: '#fff',
                },
                ticks: {
                    font: {
                        family: "Montserrat",
                        size: 15,
                        weight: 'normal'
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
                    text: "12 цаг",
                    font: {
                        family: 'Montserrat',
                        size: 15,
                        weight: 'normal'
                    },
                    color: "#000"
                },
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        borderColor: "#fff",
        borderWidth: 1,
        pointRadius: 0,
      };
    return (
        <div className="UserDashboard-wrapper">
            <div className="last-Post"> 
                <div className="header">
                    <h2>Хамгийн сүүлд үзсэн пост</h2>
                    <RoundedButton content="Очих"/>
                </div>
                <div className="post">
                    <img src="https://images.unsplash.com/photo-1629133892337-0d62ccdfba61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80" alt="post"></img>
                    <div className="post-detail">
                        <div>
                            <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="post-detail"></img>
                            <div className="details">
                                <h4>Сонин сайхан</h4>
                                <span>@g/soninsaihan</span>
                                <h5>2021.08.01</h5>
                            </div>
                        </div>
                        <p>Зураг тайлбартай бол энд орж ирнэ. Байхгүй бол энд нь хоосон байна.</p>
                        <div>
                            <i className="far fa-hand-peace"></i>
                            <span>125</span>
                            <i className="far fa-comment-dots"></i>
                            <span>5</span>
                            <i className="fas fa-share"></i>
                            <span>9</span>
                        </div>
                        <h6>Дэлгэрэнгүй</h6>
                    </div>
                </div>
            </div>
            <div className="followers-comments">
                <div className="followers">
                    <h3>Хамгийн сүүлд дагасан хэрэглэгчид</h3>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <p>Бүгдийг харах</p>
                </div>
                <div className="comments">
                    <h3>Хамгийн сүүлд бичсэн сэтгэгдлүүд</h3>
                    <div className="comment">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="post-detail"></img>
                        <span>Гоё болжээ keep it up</span>
                    </div>
                    <div className="comment">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="post-detail"></img>
                        <span>Гоё болжээ keep it up</span>
                    </div>
                    <div className="comment">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="post-detail"></img>
                        <span>Гоё болжээ keep it up</span>
                    </div>
                    <div className="comment">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="post-detail"></img>
                        <span>Гоё болжээ keep it up</span>
                    </div>
                </div>
            </div>
            <div className="reports">
                <h3>Репортууд</h3>
                <div className="header">
                    <p>Пост</p>
                    <p>Сэтгэгдэл</p>
                </div>
                <div className="report-posts">
                    <h4>2021.05.19</h4>
                    <div className="report-section">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="report-post"/>
                        <div className="delete">
                            
                            <p><span className="you">Таны</span> постыг <span className="author">Зохиогчийн эрх зөрсөн</span> гэж үзэн устгасан.
                                <i className="fas fa-paper-plane"></i>
                                <i className="fas fa-trash-alt"></i>
                            </p>
                            <span>Хэрэв та эндүүрэл гарсан гэж үзэж байвал бидэнд хандаарай.</span>
                        </div>
                    </div>
                    <div className="report-section">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="report-post"/>
                        <div className="delete">
                            
                            <p><span className="you">Таны</span> постыг <span className="author">Зохиогчийн эрх зөрсөн</span> гэж үзэн устгасан.
                                <i className="fas fa-paper-plane"></i>
                                <i className="fas fa-trash-alt"></i>
                            </p>
                            <span>Хэрэв та эндүүрэл гарсан гэж үзэж байвал бидэнд хандаарай.</span>
                        </div>
                    </div>
                </div>
                <div className="report-posts">
                    <h4>2021.05.19</h4>
                    <div className="report-section">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="report-post"/>
                        <div className="delete">
                            
                            <p><span className="you">Таны</span> постыг <span className="author">Зохиогчийн эрх зөрсөн</span> гэж үзэн устгасан.
                                <i className="fas fa-paper-plane"></i>
                                <i className="fas fa-trash-alt"></i>
                            </p>
                            <span>Хэрэв та эндүүрэл гарсан гэж үзэж байвал бидэнд хандаарай.</span>
                        </div>
                    </div>
                    <div className="report-section">
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="report-post"/>
                        <div className="delete">
                            
                            <p><span className="you">Таны</span> постыг <span className="author">Зохиогчийн эрх зөрсөн</span> гэж үзэн устгасан.
                                <i className="fas fa-paper-plane"></i>
                                <i className="fas fa-trash-alt"></i>
                            </p>
                            <span>Хэрэв та эндүүрэл гарсан гэж үзэж байвал бидэнд хандаарай.</span>
                        </div>
                    </div>
                </div>
                <div className="report-comments">
                    
                </div>
            </div>
            <div className="active-viewed">
                <div className="active-users">
                    <h3>Хамгийн сүүлд дагасан хэрэглэгчид</h3>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <div className="leaders-list">
                        <img src={DefaultAvatar} alt="leader" />
                        <p>Энхгэрэл<span>365 Аура</span></p>
                        <RoundedButton content="Дагах"/>
                    </div>
                    <p>Бүгдийг харах</p>
                </div>
                <div className="active-right">
                    <div className="most-viewed">
                        <h3>Хандалт</h3>
                        <span>Сүүлийн 24 цаг</span>
                        <div>
                            <Line data={data} options={options} />
                        </div>
                        <p>Дэлгэрэнгүй статистик</p>
                    </div>
                    <div className="caak-ads">
                        <h3>Хэрхэн caak ads-г ашиглан орлогоо нэмэгдүүлэх вэ?</h3>
                        <img src="https://images.unsplash.com/photo-1629122271630-2f39ef9ddde8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="ad"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard;