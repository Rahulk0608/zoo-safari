import React from "react";
 
var textStyle = {
    marginTop: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
};

var customStyle = {
    width: "255px"
};

function Card2(props){

    return (
       <div className="card2" style = {customStyle}>
         <img src={props.image2} alt={"a_pic"} height={"200px"} width={"100%"}></img>
        <h6 style={textStyle}>{props.info}</h6>
        <h5 style={textStyle}>{props.description}</h5>
        <p style={textStyle}>{props.para}</p>
        </div>
         
    )

}

export default Card2;