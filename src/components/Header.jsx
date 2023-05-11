import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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

         <div className="dropdown">
            <li className="list">Attraction ▼</li> 
             <div class="dropdown-content">
               <a href="#">Nature Safari</a>
                <a href="#">Services</a>
                <a href="#">Galleries</a>
                <a href="#">Virtual Tour</a>
              </div>
          </div>  


          <div className="dropdown">
            <li className="list">Biodiversity ▼</li>
            <div class="dropdown-content">
               <a href="#">Tigers</a>
                <a href="#">Lions</a>
                <a href="#">Giraffe</a>
                <a href="#">Elephant</a>
                <a href="#">Birds</a>
                <a href="#">Bear</a>
                <a href="#">Zebra</a>
              </div>
          </div>

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
