import React, { useState } from "react";
import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
   const [state, dispatch] = useStore();
   const {user: currentUser} = state;

   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };

   return(
      <div>
         <AppNavBar/>
         <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item style={{height: "600px", background: "#bc4"}}>
               <img className="d-block w-100 h-100"/>
               <Carousel.Caption>
                  <h2>Welcome to REFMES!</h2>
                  <p>Referee Management and Assignment System for TFF</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: "600px", background: "#23d"}}>
               <img className="d-block w-100 h-100"/>
               <Carousel.Caption>
                  <h2>Give Ratings to Referees</h2>
                  <p>Give both pre-match and post-match ratings</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: "600px", background: "#42a"}}>
               <img className="d-block w-100 h-100"/>
               <Carousel.Caption>
                  <h2>Track Live Results</h2>
                  <p>Live status of referee assignments and matches</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
         <div>
            <h1 style={{textAlign: "center", marginTop: "172px", fontSize: "42px"}}>WELCOME, THIS IS <b>REFMES</b>!</h1>
            <h2 style={{textAlign: "center", marginTop: "72px", fontSize: "24px"}}>Justice in Football!</h2>
         </div>
      </div>
   )
}
export default Home