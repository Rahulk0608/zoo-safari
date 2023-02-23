import React from "react";

function handleClickClose(){
  document.querySelector(".header").style.display ="none";
};


function Header(){
   
  return (
    <div className="header-div">
  
      <ul  className="header">
         <button className="cross"
          onClick ={handleClickClose}
         >X</button>
        <div className="move">
         <li className="list">Home</li>
         <li className="list"
         >Attraction</li> 
         <li className="list"
          >Biodiversity</li>
         <li className="list">Eat & Drink</li>
         <li className="list">Stay</li>
         <li className="list">Book Your Safari</li>      
         <li className="list">Contact Us</li>
        </div>
       
  
      </ul>
      

    </div>
    )
}

export default Header;
