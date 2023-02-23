import React from "react";

function Card(props){

    return (
       <div className="card">
        <h6>{props.info}</h6>
        <p>{props.description}</p>
        </div>
         
    )

}

export default Card;