import React from "react";

const Button = ({text,height,width,background}) =>{
    return(
        <div className = "button" style = {{height :`${height}`, width : `${width}`, backgroundColor:`${background}`}}>
            {text}
        </div>
    );
}

export default Button;
