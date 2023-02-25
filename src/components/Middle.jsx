import React from "react";

var customStyle = {
    width: "250px",
    height: "150px",
    float: "right"
};

function Middle(props){
   
    return(
        <div className="middle">

            <div className="mid-left">
              <p>{props.para1}</p>
              <img src="https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg" style={customStyle}></img>
              <p>{props.para2}</p>

              <h2>Wondrous Wildlife</h2>
              <p>{props.para1}</p>
              <img src="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg" style={customStyle}></img>
              <p>{props.para2}</p>

              <h2>Spectacular Shows</h2>
              <p>{props.para1}</p>
              <img src="https://nationalzoo.si.edu/sites/default/files/animals/cheetah-002.jpg" style={customStyle}></img>
              <p>{props.para2}</p>
             </div>

            <div className="mid-right">
                <h2>Singapore Zoo</h2>
                <p>80 Lake Road, India 7298765</p>
                <h2>Operating Hours</h2>
                <p>Daily, 8.30am - 6 pm</p>
                <h2 className="ticket-website">Official Website</h2>
                <h2 className="ticket-website">Book Tickets</h2>
            </div>
        </div>
    )

}


export default Middle;