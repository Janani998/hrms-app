import React from "react";
import Button from "../../component/button/Button";
import Card from "../../component/card/Card";
import Header from "../../component/header/Header";
import {FaEllipsisH} from "react-icons/fa";
import Avatar from "../../component/avatar/Avatar";



export default function Home(){
    const progressList = [
        {
            profileImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW-ZwCwVc36zz4rk0ecfKi3GPIzGUMTjVAlQ&usqp=CAU",
            name : "Mary G Loius",
            designation : "Project Manager",
            status : "Practical Round"
        },
        {
            profileImage : "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            name : "Vince Jacob",
            designation : "UI/UX Designer",
            status : "Practical Round"
        },
        {
            profileImage : "https://i1.wp.com/www.hindishayaricollections.com/wp-content/uploads/2020/03/beautifull-girls-images-download-46.jpg?resize=667%2C1000&ssl=1",
            name : "Neil Brian",
            designation : "React Developer",
            status : "Final Round"
        },
        {
            profileImage : "https://i.pinimg.com/236x/11/dc/43/11dc43c418eda8a1a7b74833be82ba64.jpg",
            name : "Jaidev Biswas",
            designation : "UI/UX Designer",
            status : "HR Round"
        },
    
    ]
    return(
        <div className = "home">
            <Header pageHeader = "Dashboard"/>
            <div className = "main-section">
                <div className = "left-section">
                    <Card height = "140px" width = "90%" background = "#fdbd64" classes = {{cardClass : "greeting-container"}}>
                        <div className = "greetings-content">
                            <div style = {{marginBottom : "12px"}}>Good Morning <strong>Kathy!</strong></div>
                            <div>Today you have 9 new Applcations</div>
                            <div>Also you need to hire 2 new UX Designers, 1 React Native Developer</div>
                            <a href = "#" style = {{color : "black", marginTop : "12px"}}>Read More</a>
                        </div>
                        <img src = {process.env.PUBLIC_URL + '/work-time-image.svg'} alt = "work-time-image" height = "150px" width = "200px"/>
                    </Card>
                    <Card height = "300px" width = "90%" classes = {{cardClass : "recruitment-progress-container"}}>
                        <div className = "progress-header">
                            <h2>Recruitment Progress</h2>
                            <Button height = "40px" width = "180px" background = "#fdbd64" text = "View All"/>
                        </div>  
                        <div>
                            <table>
                                <thead className = "table-row">
                                    <th>Full Name</th>
                                    <th>Designation</th>
                                    <th>Status</th>
                                    <th>    </th>
                                </thead>
                                <tbody>
                                    {progressList.map((user,index) =>
                                        <tr key = {index} className = "table-row">
                                            <td>
                                                <Avatar srcURL ={user.profileImage} />
                                                <span>{user.name}</span>
                                            </td>
                                            <td>{user.designation}</td>
                                            <td>{user.status}</td>
                                            <td><FaEllipsisH style = {{marginLeft : "100px"}} /></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div></div>
                    </Card>
                </div>
                <div className = "right-section">
                    <Card height = "100px" width = "400px"/>
                    <Card height = "100px" width = "400px"/>
                </div>
            </div>   
        </div>
    );
}