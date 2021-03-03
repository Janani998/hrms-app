import React from "react";
 
const defaultClasses = {cardClass : ""}
export default function Card({height,width,children,background,classes = {...defaultClasses}}){
    const {cardClass} = classes
    return(
        
        <div className = {`card ${cardClass}`} style = {{height :`${height}`, width : `${width}`, backgroundColor:`${background}`}}>
            {/* {console.log(background)} */}
            {children}
        </div>
    );
}

