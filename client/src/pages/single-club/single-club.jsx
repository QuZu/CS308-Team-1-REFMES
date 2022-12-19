import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import React, { useCallback, useState } from "react";
import axios from "axios";
import "./single-club.css" 
import { useEffect } from "react";

import findLogo from "../../components/clubLogos/clubLogos.jsx";

function SingleClubPage() { // it takes clubname parameter from clubs.jsx
  // getting parameters from clubs page
  const{clubName} = useParams();
  console.log("clubname use params: " , clubName);
  const [ClubData, setClubData] = useState({});
  const [Loading, setLoading] = useState(false);
    
  const getClub = async() =>{
    await axios.get(`${process.env.REACT_APP_URL}/api/clubs/getClub/${clubName}`).then(response =>{
      console.log("response: ", response);
      setClubData(response.data);
      setLoading(true);

    }).catch(err => console.log(err))

  };

  useEffect(()=> {
    getClub();
  }, [])
  console.log("club data",ClubData);
  // result = related image source
  const logo= findLogo(clubName);
  // declaring the playerlist
  var playerlist = ClubData.playerArray;

  return(
     
    <div className="container-fluid">
    <div className="col-12">
        <div className="row"> <AppNavBar/> </div>
        <div id = "club-info-section" className = "row">
          <div id = "club-logo" className = "col-3"> <a href = {ClubData.website} target = "_blank"> <img id = "club-image" src = {logo} alt = "Fenerbahce logo" /> </a> </div>
          <div id = "club-info" className="col-9">
            <div id = "c-i-h"  className="row"> <h1 id = "c-info-head"> <b>{ClubData.full_name}</b> </h1> <br/> </div>
            <div id = "c-i-t1" className="row"> <p className="c-info-text"> Founded: {ClubData.founded}</p> <br/> </div>
            <div id = "c-i-t2" className="row"> <p className="c-info-text"> Stadium informations: {ClubData.stadium}</p> </div>
            <div id = "c-i-g"  className="row"> <p className="c-info-text"> {ClubData.full_name} ({ClubData.founded}) </p> 
            <p className="c-g-info"> {ClubData.info}</p>
            </div>
          </div>
        </div>
        
        <div  className = "row"> 
          <div id = "table-head" className = "row container text-center"> <h2> Current List of Players</h2> </div>
         
          <div  className = "row">
            <div id = "table" className="col-8">
            <table  className= "players-table"> 
                <thead className="players-table-head">
                  <tr>
                    <th className="players-table-head-th">Player Name</th> <th className="players-table-head-th">Jersey Number</th> <th className="players-table-head-th">Age</th> <th className="players-table-head-th">Height</th> <th className="players-table-head-th">Foot</th>
                  </tr>
                </thead>
                <tbody>
                { playerlist ?
                  (playerlist.length > 0 ?
                    playerlist.map((item) => {
                      
                      return(
                      
                        <tr className = "players-table-tr" key={item.pName}>
                          <td className="name-col">{item.pName}</td>
                          <td className="players-table-td">{item.jerseyNumber}</td>
                          <td className="players-table-td">{item.Age}</td>
                          <td className="players-table-td">{item.height}</td>
                          <td className="players-table-td">{item.Foot}</td>
                        </tr>
                      );
                    }) : <></>)            :<></>                  
                }
                </tbody>
            </table>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default SingleClubPage