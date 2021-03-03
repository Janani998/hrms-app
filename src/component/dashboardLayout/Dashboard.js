import React from "react";
import { AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineCalendar } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { RiFileList2Line } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
const navItems = [
    {
        name : "Dashboard",
        icon : <AiOutlineHome/>,
        link : "/"
    },
    {
        name : "Recruitment",
        icon : <MdPeopleOutline/>,
        link : "/recruitment"
    },
    {
        name : "Onboarding",
        icon : <RiFileList2Line/>,
        link : "/onboarding"
    },
    {
        name : "Reports",
        icon : <VscGraph/>,
        link : "/reports"
    },
    {
        name : "Calender",
        icon : <AiOutlineCalendar/>,
        link : "/calender"
    },
    {
        name : "Settings",
        icon : <FiSettings/>,
        link : "/settings"
    }
]
const DashboardLayout = ({children}) =>{
    const location = useLocation();
    return(
        <div className = "container">
            <div className = "dashboard-layout">
                <nav className = "side-nav-bar">
                    <div className = "logo-container">
                        <h3>Newton HR</h3>
                    </div>
                    <div className = "nav-container">
                        {navItems.map((navItem,index) => 
                            <Link to = {navItem.link}>
                            <div key = {index} className = {`nav-item ${navItem.link === location.pathname ? 'selected' : ''}`}>
                                    {navItem.icon}
                                    <label className = "item-name">{navItem.name}</label>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className = "image-container">
                        <img src = {process.env.PUBLIC_URL + '/nav-image.svg'} alt = "nav-image" style ={{height : "100%",width:"100%"}} />
                    </div>
                </nav>
                <div className = "main-container">
                    {children}
                </div>
            </div>
        </div>
        
    );
}

export default DashboardLayout;