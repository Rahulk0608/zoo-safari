import React from "react";

function handleClickOn(){
    document.querySelector(".header").style.display ="block";
};


function Top(){

    return(<div className="top-nav">
       
       <ul className="top">
        <li className="click" 
          onClick={handleClickOn}
           >CLICK</li>
        <li className="travel">TRAVEL ADVISORY</li>
        <li className="travel">INDIA</li>
       </ul>
    </div>
    )
}

export default Top;