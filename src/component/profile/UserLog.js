import { useState } from 'react';
import 'react-dates/initialize';
import { DateTime }from "luxon";
import { Bar } from 'react-chartjs-2';
import "./css/UserLog.css";

// TODO: add date range picker to time management

function UserLog() {
    const posts = [
        "https://images.unsplash.com/photo-1627474456207-efcb21e79def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1606788075765-42f69501a452?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1627474457263-d7f14df58dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1627531732547-e16087354233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1627563178411-a90110bb64b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1627474456207-efcb21e79def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1627563178411-a90110bb64b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1627474456207-efcb21e79def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    ]
    const [groups, setGroups] = useState([
        {
            icon: "data:image/jpeg;base64,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",
            name: "Сонин зүйлс",
            members: 198478,
            backgroundImage: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        },
        {
            icon: "data:image/jpeg;base64,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",
            name: "Гэрэл зураг",
            members: 245162,
            backgroundImage: "https://static.vecteezy.com/system/resources/thumbnails/002/073/178/small/leaves-and-butterflies-pattern-one-line-art-background-free-vector.jpg"
        },
        {
            icon: "data:image/jpeg;base64,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",
            name: "Монголын морьтон монголчуудын нэгдсэн групп",
            members: 83312,
            backgroundImage: "https://creativecloud.adobe.com/content/dam/2019/201904/make-it-sell-it-patterns/JMFloralRepeat1100x1100.jpg"
        },
        {
            icon: "data:image/jpeg;base64,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",
            name: "Тэвчээр тасарлаа хөдөлгөөн",
            members: 1162,
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNj6C1pi2CcLqko66U-heQNeYZsrsY6hbgSg&usqp=CAU"
        },
    ])
    const users = [
        {
            icon: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
            name: "Энхгэрэл",
            aura: 365
        },
        {
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Чимэг",
            aura: 153
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
            name: "Даваа",
            aura: 34
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkhef03Xe6hgwxJvOOFeOJQT71NbRrMU34Q&usqp=CAU",
            name: "Самдан",
            aura: 152
        },
        {
            icon: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg",
            name: "Дамдин",
            aura: 38
        },
        {
            icon: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI",
            name: "Энхгэрэл",
            aura: 365
        },
        {
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Чимэг",
            aura: 153
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
            name: "Даваа",
            aura: 34
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkhef03Xe6hgwxJvOOFeOJQT71NbRrMU34Q&usqp=CAU",
            name: "Самдан",
            aura: 152
        },
        {
            icon: "https://api.time.com/wp-content/uploads/2017/12/terry-crews-person-of-year-2017-time-magazine-2.jpg",
            name: "Дамдин",
            aura: 38
        },
    ]
    const [comments, setComments] = useState([
        {
            date: "2021-07-01", 
            postAuthor: "Баасанжав",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            icon: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        },
        {
            date: "2021-07-01",
            postAuthor: "Балхжав Эрдэнэ",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            date: "2021-06-30",
            postAuthor: "Баасанжав",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            icon: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        },
        {
            date: "2021-06-30",
            postAuthor: "Балхжав Эрдэнэ",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            date: "2021-06-27",
            postAuthor: "Johnny",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        }
    ]);
    const [reports, setReports] = useState([
        {
            date: "2021-07-01", 
            postAuthor: "Баасанжав",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            type: "Зохиогчийн эрх зөрсөн",
            icon: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        },
        {
            date: "2021-07-01",
            postAuthor: "Балхжав Эрдэнэ",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            type: "Архи тамхи сурталчилсан",
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            date: "2021-06-30",
            postAuthor: "Баасанжав",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            type: "Зохиогчийн эрх зөрсөн",
            icon: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI"
        },
        {
            date: "2021-06-30",
            postAuthor: "Балхжав Эрдэнэ",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            type: "Архи тамхи сурталчилсан",
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            date: "2021-06-27",
            postAuthor: "Johnny",
            content: "Сүрлэг том эвэртэй Анколе нь Африк тивийн уугуул үүлдэр юм. Угаас үзүүр хүртэл 2.5 метр хүртэл урт ургадаг эвэр нь нарны хурц тусгалыг сарниулах, махчин амьтдаас хамгаалах зориулалттайгаар хувьсан бий болжээ.",
            type: "Зохиогчийн эрх зөрсөн",
            icon: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
    ]);
    /**
     * Time management variables
     */
    // const [startDate, setStartDate] = useState(() => {
    //     return DateTime.local().minus({days: 7})
    // })
    // const [endDate, setEndDate] = useState(() => {
    //     return DateTime.local();
    // })
    const startDate = DateTime.local().minus({days: 7});
    const endDate = DateTime.local();
    const weeklyHours = [5, 8, 4, 8, 6, 4, 2]
    const chartData = {
        labels: [
            'Д',
            'М',
            'Л',
            'П',
            'Ба',
            'Бя',
            'Н'
        ],
        datasets: [{
            label: '',
            backgroundColor: '#000',
            data: weeklyHours
        }]
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        barThickness: 17,
        barPercentage: 1
    }
    const sessionHours = 5;
    /**
     * Comments - grouped by date in commentContent array.
     */
    let commentContent = [];
    if (comments.length > 0) {
        let date = comments[0].date;
        let buffer = [];
        comments.forEach((comment, i) => {
            let commentWrapper = (
                <div key={i} className="comment">
                    <img src={comment.icon} alt="icon" />
                    <div>
                        <h4><strong>{comment.postAuthor}</strong>-н постонд сэтгэгдэл үлдээв.</h4>
                        <p>{comment.content}</p>
                    </div>
                    {console.log(i)}
                    <div className="trash-icon" onClick={()=>{
                        let foo = [...comments];
                        foo.splice(i, 1);
                        setComments(foo);
                    }}>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            )
            if (date === comment.date){
                buffer.push(commentWrapper)
            } else {
                let temp = date;
                date = comment.date;
                commentContent.push(
                    <div key={i} className="comment-group">
                        <h4>{temp}</h4>
                        {buffer}
                    </div>
                )
                buffer = [commentWrapper];
            }
        })
        commentContent.push(
            <div key={"last"} className="comment-group">
                <h4>{date}</h4>
                {buffer}
            </div>
        )
    }
    /**
     * Reports - grouped by date in reportContent array.
     */
    let reportContent = [];
    if (reports.length > 0) {
        let date = reports[0].date;
        let buffer = [];
        reports.forEach((report, i) => {
            let reportWrapper = (
                <div className="report" key={i}>
                    <img src={report.icon} alt="icon" />
                    <div>
                        <h4><strong>{report.postAuthor}</strong>-н постыг <span>{report.type}</span> гэж репорт хийсэн.</h4>
                        <p>{report.content}</p>
                    </div>
                    <div className="trash-icon" onClick={()=>{
                        let foo = [...reports];
                        foo.splice(i, 1);
                        setReports(foo);
                    }}>
                        <i className="far fa-trash-alt"></i>
                    </div>
                </div>
            )
            if (date === report.date){
                buffer.push(reportWrapper)
            } else {
                let temp = date;
                date = report.date;
                reportContent.push(
                    <div key={i} className="report-group">
                        <h4>{temp}</h4>
                        {buffer}
                    </div>
                )
                buffer = [reportWrapper];
            }
        })
        reportContent.push(
            <div key={"last"} className="report-group">
                <h4>{date}</h4>
                {buffer}
            </div>
        )
    }
    /**
     * Collapsible onclick handler function. Basically sets maxHeight to content.scrollheight to create collapsing effect.
     * @param {*} e Event
     */
    function handleClick(e){
        e.currentTarget.classList.toggle("active");
        var content = e.currentTarget.nextElementSibling;
        content.classList.toggle("active");
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
        let arrow = e.currentTarget.getElementsByClassName("arrow")[0];
        arrow.classList.toggle("fa-chevron-down");
        arrow.classList.toggle("fa-chevron-up");
    }
    return (
        <div className="UserLog-wrapper">
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="far fa-eye"></i>
                <p>Миний үзсэн постууд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                <div className="post-content">
                    {posts.map((image, i) => {
                        return (
                            <div className="square" key={i}>
                                <img className="grid-image" alt="post" src={image}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-arrow-alt-circle-up"></i>
                <p>Миний react үзүүлсэн постууд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                <div className="post-content">
                    {posts.map((image, i) => {
                        return (
                            <div className="square" key={i}>
                                <img className="grid-image" alt="post" src={image}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-users"></i>
                <p>Миний элссэн группууд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                {groups.length ? 
                    groups.map((group, i) => {
                        return (
                            <div key={i} className="group-content" style={{backgroundImage: "url(" + group.backgroundImage + ")", backgroundRepeat: "repeat"}}>
                                <div className="layer"></div>
                                <div className="content-wrapper">
                                    <img src={group.backgroundImage} alt="icon" />
                                    <div className="text-wrapper">
                                        <h3>{group.name}</h3>
                                        <p>{group.members + " гишүүд"}</p>
                                    </div>
                                    <div className="leave-button" onClick={() => {
                                        let foo = [...groups];
                                        foo.splice(i, 1);
                                        setGroups(foo);
                                    }}>Гарах</div>
                                </div>
                            </div>
                        )
                    }) : 
                    <></>
                }
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-user-friends"></i>
                <p>Миний үүсгэсэн группууд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                {groups.map((group, i) => {
                    return (
                        <div key={i} className="group-content" style={{backgroundImage: "url(" + group.backgroundImage + ")", backgroundRepeat: "repeat"}}>
                            <div className="layer"></div>
                            <div className="content-wrapper">
                                <img src={group.backgroundImage} alt="icon" />
                                <div className="text-wrapper">
                                    <h3>{group.name}</h3>
                                    <p>{group.members + " гишүүд"}</p>
                                </div>
                                <div className="leave-button" onClick={() => {
                                    let foo = [...groups];
                                    foo.splice(i, 1);
                                    setGroups(foo);
                                }}>Гарах</div>
                            </div>
                        </div>
                    )
                })}
            </div>    
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-plus-square"></i>
                <p>Миний оруулсан постууд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                <div className="post-content">
                    {posts.map((image, i) => {
                        return (
                            <div className="square" key={i}>
                                <img className="grid-image" alt="post" src={image}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-user"></i>
                <p>Миний дагасан хэрэглэгчид</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                <div className="user-content">
                    <div className="border-right">
                        {users.map((user, i) => {
                            return (
                                <div key={i} className="user">
                                    <img src={user.icon} alt="" />
                                    <div>
                                        <h4>{user.name}</h4>
                                        <p>{user.aura + " Аура"}</p>
                                    </div>
                                    <div className="follow-button">
                                        Дагах
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {users.map((user, i) => {
                            return (
                                <div key={i} className="user">
                                    <img src={user.icon} alt="" />
                                    <div>
                                        <h4>{user.name}</h4>
                                        <p>{user.aura + " Аура"}</p>
                                    </div>
                                    <div className="follow-button">
                                        Дагах
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-comment"></i>
                <p>Миний бичсэн сэтгэгдлүүд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                {
                    <div className="comment-content">
                        {commentContent}
                    </div>
                }
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-comment-dots"></i>
                <p>Миний react үзүүлсэн сэтгэгдлүүд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                {
                    <div className="comment-content">
                        {commentContent}
                    </div>
                }
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-user-plus"></i>
                <p>Миний урьсан хэрэглэгчид</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                <div className="user-content">
                    <div className="border-right">
                        <p>Сүүлд урьсан</p>
                        {users.map((user, i) => {
                            return (
                                <div key={i} className="user">
                                    <img src={user.icon} alt="" />
                                    <div>
                                        <h4>{user.name}</h4>
                                        <p>{user.aura + " Аура"}</p>
                                    </div>
                                    <div className="follow-button">
                                        Дагах
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p>Идэвхитэй урьсан</p>
                        {users.map((user, i) => {
                            return (
                                <div key={i} className="user">
                                    <img src={user.icon} alt="" />
                                    <div>
                                        <h4>{user.name}</h4>
                                        <p>{user.aura + " Аура"}</p>
                                    </div>
                                    <div className="follow-button">
                                        Дагах
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-exclamation-triangle"></i>
                <p>Миний хийсэн репортууд</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                {
                    <div className="report-content">
                        {reportContent}
                    </div>
                }
            </div>
            <div className="expandable" onClick={(e) => handleClick(e)}>
                <i className="fas fa-clock"></i>
                <p>Time management</p>
                <i className="arrow fas fa-chevron-down"></i>
            </div>
            <div className="expandable-content">
                <div className="time-content">
                    <div className="time-datepicker">
                        <p><i className="far fa-calendar"></i>{startDate.month} сарын {startDate.day} - {endDate.month} сарын {endDate.day}</p>
                    </div>
                    <p>Энэ хугацаанд зарцуулсан нийт хугацаа</p>
                    <h3>{weeklyHours.reduce((a, b) => a + b, 0) + " цаг"}</h3>
                    <div className="chart-wrapper">
                        <Bar
                            data={chartData}
                            options={chartOptions}
                        />
                    </div>
                    <p>Энэ хугацаанд зарцуулсан дундаж хугацаа</p>
                    <h3>{sessionHours + " цаг"}</h3>
                </div>
            </div>    
        </div>
    )
}

export default UserLog;