import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import Carousel from 'react-bootstrap/Carousel';
import * as ReactBootstrap from "react-bootstrap";
import "../home/home.css";

function Home() {
   const [state, dispatch] = useStore();
   const {user: currentUser} = state;
   const [loading, setLoading] = useState(false);
   const [index, setIndex] = useState(0);
   const [topStandings, setTopStandings] = useState({});

   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
   };

   const getStandings = async()=>{
      await axios.get(`${process.env.REACT_APP_URL}/api/matches/getstandings`).then(res=>{
         const topStandingsArray = [];
         for (var i = 0; i < 5; i++) {
            topStandingsArray.push(res.data[i]);
         }
         setTopStandings(topStandingsArray);
         setLoading(true);
         console.log(res.data);
      }).catch(err => console.log(err))
   };

   useEffect(() => {
      getStandings();
   }, [])

   return(
      <div>
         <AppNavBar/>
         <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item style={{height: "600px", background: "#bc4"}}>
               <img className="d-block w-100 h-100" alt="..."/>
               <Carousel.Caption style={{marginBottom: "1.5em"}}>
                  <h2>Welcome to REFMES!</h2>
                  <p>Referee Management and Assignment System for TFF</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: "600px", background: "#23d"}}>
               <img className="d-block w-100 h-100" alt="..."/>
               <Carousel.Caption style={{marginBottom: "1.5em"}}>
                  <h2>Give Ratings to Referees</h2>
                  <p>Give both pre-match and post-match ratings</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height: "600px", background: "#42a"}}>
               <img className="d-block w-100 h-100" alt="..."/>
               <Carousel.Caption style={{marginBottom: "1.5em"}}>
                  <h2>Track Live Results</h2>
                  <p>Live status of referee assignments and matches</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
         <div>
            <h1 style={{textAlign: "center", marginTop: "132px", fontSize: "42px"}}>WELCOME, THIS IS <b>REFMES</b>!</h1>
            <h2 style={{textAlign: "center", marginTop: "72px", marginBottom: "72px", fontSize: "24px"}}>Justice in Football!</h2>
         </div>
         <div className="container mb-5">
            <div className="row">
               <div className="col-7">
                  <div className="home-top-standings-container">
                     <div className="home-top-standings-inner-container">
                        <div className="home-top-standings-inner-item"><b>Rank</b></div>
                        <div className="home-top-standings-inner-item-club"><b>Club Name</b></div>  
                        <div className="home-top-standings-inner-item"><b>Pts</b></div>
                     </div>
                     { loading ?
                        (topStandings.map((item, index) => {
                           return(
                           <div className="home-top-standings-inner-container" key={index} idx={index}>
                              <div className="home-top-standings-inner-item">{topStandings[index].rank}</div>
                              <div className="home-top-standings-inner-item-club">{topStandings[index].team.name}</div>
                              <div className="home-top-standings-inner-item">{topStandings[index].points}</div>
                           </div>);
                        }))
                     :
                     <div className="d-flex justify-content-center">
                        <ReactBootstrap.Spinner animation="border"/>
                     </div>   
                     }
                  </div>
               </div>
               <div className="col-5">
                  <div className="home-top-standings-container">
                     <div className="home-top-standings-inner-container">
                        <div className="home-top-standings-inner-item"><b>Rank</b></div>
                        <div className="home-top-standings-inner-item-club"><b>Club Name</b></div>  
                        <div className="home-top-standings-inner-item"><b>Pts</b></div>
                     </div>
                     { loading ?
                        (topStandings.map((item, index) => {
                           return(
                           <div className="home-top-standings-inner-container" key={index} idx={index}>
                              <div className="home-top-standings-inner-item">{topStandings[index].rank}</div>
                              <div className="home-top-standings-inner-item-club">{topStandings[index].team.name}</div>
                              <div className="home-top-standings-inner-item">{topStandings[index].points}</div>
                           </div>);
                        }))
                     :
                     <div className="d-flex justify-content-center">
                        <ReactBootstrap.Spinner animation="border"/>
                     </div>   
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Home