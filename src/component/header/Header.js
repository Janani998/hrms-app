import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Input from "../input/Input";
import Avatar from "../avatar/Avatar";

const Header = ({pageHeader}) =>{
    return(
        <header className = "header">
            <div className = "page-header">
                <h1 className = "heading">{pageHeader}</h1>
            </div>
            <div className = "header-contents-container">
                <div className = "action-container">
                    <Input icon = {<BsSearch/>} classes = {{inputComponentClass : "hover-action"}} />
                    <AiOutlineSend className = "action-icon"/>
                    <IoMdNotificationsOutline className = "action-icon"/>
                </div>
                <div className = "profile-container">
                    <label>Kathy Walker</label>
                    <Avatar/>
                </div>
            </div>
        </header>
    );
}

export default Header;