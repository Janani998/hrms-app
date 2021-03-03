import React from "react";

const Avatar = ({srcURL = "https://www.goodmorningimageshddownload.com/wp-content/uploads/2019/01/Whatsapp-Profile-DP-Images-4-300x282.jpg"}) =>{
    return(
        <div className = "avatar">
            <img src = {srcURL} alt = "avatar" className = "image"/>
        </div>
    );
}

export default Avatar;