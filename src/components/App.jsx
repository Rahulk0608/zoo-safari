import React from "react";
import Top from "./Top";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Card2 from "./Card2";
import "../styles.css";
import Middle from "./Middle";

const image2 = "https://www.centralfloridazoo.org/wp-content/uploads/2017/04/ANIMALS-shutterstock_382892662_1400x840_acf_cropped.jpg";
const image3 = "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg";
const image4 = "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg";


function App(){
  return(
    <div>
      <Top/>
      <Header/>
      <img 
        src  ={image2} 
        alt = {"a_picture"} 
        height = "600px"
         width = "100%"
      />

      <Card
        info = "REIMAGINE INDIA"
        description = "It's time to Reimagine India like never before."
      />
      <Card
        info = "VIRTUAL ZOO EXPERIENCE"
        description = "Experience India before your travel."
       />
      <Card
        info = "TRAVELLER ESSENTIALS"
        description = "Travel Requirements for Tourists to India."
      />

      <Middle
       para1 = "This beloved establishment first opened its gates to the public in 1973, and has since become one of the best rainforest zoos in the world."
       para2 =  "These include plaudits from Forbes Traveler as one of the best zoos in the world, the Asian Attraction Awards for Most Popular Attraction in the Wildlife Park category and the STB 22nd Tourism Award for Best Leisure Attraction Experience of the Year. It was ranked as one of the top 3 zoos in the world by the TripAdvisor Travellers’ Choice Award in 2018."
      />
            
      <div className="checkout-head">
       <h1>Also</h1>
       <h1 id="h1">Check Out</h1>
      </div>
           <Card2
             image2 = {image2}
             info = "NATURE & WILDLIFE"
             description = "Walk on the wild side"
             para = "Located on the north-western side of the island, the Singapore Zoo is a haven for wondrous wildlife."
            />
           <Card2
              image2 = {image3}
              info = "PARK & GARDENS"
              description = "Walk on the wild side"
              para = "Located on the north-western side of the island, the Singapore Zoo is a haven for wondrous wildlife and a must-visit for animal lovers."
            />
           <Card2
              image2 = {image4}
              info = "RESERVE"
              description = "Sungeh buloh wetland reserve"
              para = "Located on the north-western side of the island, the Singapore Zoo is a haven."
            />
           <Card2
              image2 = {image2}
              info = "PARK & GARDENS"
              description = "Singapore's iconic greenspaces"
              para = "Located on the north-western side of the island."
            />
         

     <div className="footer-area">
       <Footer
        name = "About Us"
        line1 = "Contact Us"
        line2 = "Privacy Policy"
        line3 = "Terms of Use"
        />
       <Footer
        name = "Attractions"
        line1 = "Herbivore Safari"
        line2 = "Bear Safari"
        line3 = "Tiger Safari"
        line4 = "Lion Safari"
        line5 = "Leaopard Safari"
        />
       <Footer 
        name = "Need quick answers "
        line1 = "Get them via chatbot or Facebook"
        line2 = "Toll-free Number"
        phone = "1800 000 0000"
        />
       <Footer
        name = "Connect with Us"
        line1 = "Facebook"
        line2 = "Instagram"
        line3 = "Twitter"
        />
            
     </div>
            <footer>
              <p>© 2023 Rahul Kumar</p>
            </footer>
                  
          </div>

        )
    }


     export default App;