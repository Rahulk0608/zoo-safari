import React from "react";


function Footer(props){
    return (
        <div className="footer-items">
           
              <h2>{props.name}</h2>
              <p>{props.line1}</p>
              <p>{props.line2}</p>
              <p>{props.line3}</p>
              <p>{props.line4}</p>
              <p>{props.line5}</p>
              <p>{props.phone}</p>
        </div>
         
    )
}


export default Footer;