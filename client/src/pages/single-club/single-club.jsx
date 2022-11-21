import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import React, { useCallback, useState } from "react";
import axios from "axios";
import "./single-club.css" 
import { useEffect } from "react";

//importing all club logos
import logoFenerbahce from '../../logos/fenerbahce.png';
import logoGalatasaray from '../../logos/galatasaray.png';
import logoBesiktas from '../../logos/besiktas.png';
import logoBasaksehir from '../../logos/basaksehir.png';
import logoAdanaDemirspor from '../../logos/adana_demirspor.png';
import logoKonyaspor from '../../logos/konyaspor.png';
import logoHatayspor from '../../logos/hatayspor.png';
import logoGiresunspor from '../../logos/giresunspor.png';
import logoAlanyaspor from '../../logos/alanyaspor.png';
import logoSivasspor from '../../logos/sivasspor.png';
import logoAntalyaspor from '../../logos/antalyaspor.png';
import logoGaziantepFK from '../../logos/gaziantep_fk.png';
import logoUmraniyespor from '../../logos/umraniyespor.png';
import logoIstanbulspor from '../../logos/istanbulspor.png';
import logoKasimpasa from '../../logos/kasimpasa.png';
import logoAnkaragucu from '../../logos/ankaragucu.png';
import logoTrabzonspor from '../../logos/trabzonspor.png';
import logoKaragumruk from '../../logos/karagumruk.png';
import logoKayserispor from '../../logos/kayserispor.png';


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
  console.log(ClubData);
  // declaring the logos dictionary
  const images = [
    { id: "fenerbahce", src: logoFenerbahce},
    { id: "galatasaray", src: logoGalatasaray},
    { id: "besiktas", src: logoBesiktas},
    { id: "basaksehir", src: logoBasaksehir},
    { id: "adanademirspor", src: logoAdanaDemirspor},
    { id: "konyaspor", src: logoKonyaspor},
    { id: "hatayspor", src: logoHatayspor},
    { id: "giresunspor", src: logoGiresunspor},
    { id: "alanyaspor", src: logoAlanyaspor},
    { id: "sivasspor", src: logoSivasspor},
    { id: "antalyaspor", src: logoAntalyaspor},
    { id: "gaziantepfk", src: logoGaziantepFK},
    { id: "umraniyespor", src: logoUmraniyespor},
    { id: "istanbulspor", src: logoIstanbulspor},
    { id: "kasimpasaspor", src: logoKasimpasa},
    { id: "ankaragucuspor", src: logoAnkaragucu},
    { id: "trabzonspor", src: logoTrabzonspor},
    { id: "karagumrukspor", src: logoKaragumruk},
    { id: "kayserispor", src: logoKayserispor}

  ]

  // result = related image source
  const result=(images.find(({id})=>id === clubName)).src;
  console.log("result: ", result);
  // declaring the playerlist
  var playerlist = ClubData.playerArray;

  return(
      
    <div className="col">
      
        <div className="row"> <AppNavBar/> </div>
        <div id = "club-info-section" className = "row">
          <div id = "club-logo" className = "col-3"> <a href = {ClubData.website} target = "_blank"> <img id = "club-image" src = {result} alt = "Fenerbahce logo" /> </a> </div>
          <div id = "club-info" className="col-9">
            <div id = "c-i-h"  className="row"> <h1 id = "c-info-head"> {ClubData.full_name} </h1> <br/> </div>
            <div id = "c-i-t1" className="row"> <p className="c-info-text"> Founded: {ClubData.founded}</p> <br/> </div>
            <div id = "c-i-t2" className="row"> <p className="c-info-text"> Stadium informations: {ClubData.stadium}</p> </div>
            <div id = "c-i-g"  className="row"> <p className="c-info-text"> {ClubData.full_name} ({ClubData.founded}) </p> 
            <p className="c-g-info"> {ClubData.info}</p>
            </div>
          </div>
        </div>
        
        <div id = "player-list-section" className = "row"> 
          <div id = "table-head" className = "col container text-center"> <h2> Current List of Players</h2> </div>
         
          <div id = "table" className = "col-8">
            <table  className= "players-table"> 
                <thead>
                  <tr>
                    <th>Player Name</th> <th>Jersey Number</th> <th>Age</th> <th>Height</th> <th>Foot</th>
                  </tr>
                </thead>
                <tbody>
                { playerlist ?
                  (playerlist.length > 0 ?
                    playerlist.map((item) => {
                      
                      return(
                      
                        <tr key={item.pName}>
                          <td className="name-col">{item.pName}</td>
                          <td>{item.jerseyNumber}</td>
                          <td>{item.Age}</td>
                          <td>{item.height}</td>
                          <td>{item.Foot}</td>
                        </tr>
                      );
                    }) : <></>)            :<></>                  
                }
                </tbody>
            </table>
            </div>
        </div>
    </div>
     
  )
}
export default SingleClubPage