import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import React, { useCallback, useState } from "react";
import axios from "axios";
import "./single-club.css" 
import clubLogo from '../../logos/fenerbahce.png';
import { useEffect } from "react";

function SingleClubPage() {
  // getting parameters from clubs page
  const{clubName} = useParams();
  console.log("clubname: " , clubName);
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


  return(
      
    <div>
        <AppNavBar/>

        <div className = "club-general-info">
          <div className = "club-logo"> <a href = "https://www.fenerbahce.org/" target = "_blank"> <img id = "club-image" src = {clubLogo} alt = "Fenerbahce logo" /> </a> </div>
          <div className = "club-info">
            <div className = "c-i-h"> <h1 id = "c-info-head"> Fenerbahçe Spor Kulübü</h1> <br/> </div>
            <div className = "c-i-t1"> <p className="c-info-text"> Average age: 25</p> <br/> </div>
            <div className = "c-i-t2"> <p className="c-info-text"> Stadium informations: Ülker Fenerbahçe Şükrü Saracoğlu Stadyumu</p> </div>
            <div className = "c-i-g"> <p className="c-info-text"> Fenerbahçe Spor Kulübü (1907)</p> 
            <p className="c-info-text">Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum
            Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstumLorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum
            Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstumLorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum
            Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstumLorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum
            Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstumLorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum
            Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstumLorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum Lorem-impstum</p>
            </div>
          </div>
        </div>
        <div className = "players-twitter-section">
          <div className = "players-section"> 
            <div className = "p-section-header"> <h2> Current list of players</h2> </div>
            <div className = "p-section-table">
              <table className= "players-table table-sortable"> 
                  <thead>
                    <tr>
                      <th>Player Name</th> <th>Age</th> <th>Red-card</th> <th>Green-card</th> <th>Goals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className = "name-col">Enis Mert Kuzu</td> <td >21</td> <td >10</td> <td>20</td> <td>33</td> 
                    </tr>
                    <tr>
                      <td className = "name-col">Huseyin Alper Karadeniz</td> <td>21</td> <td>3</td> <td>15</td> <td>19</td> 
                    </tr>
                    <tr>
                      <td className = "name-col">Mehmet Eren Karabulut</td> <td>21</td> <td>0</td> <td>9</td> <td>23</td> 
                    </tr>
                    <tr>
                      <td className = "name-col">Ahmet Bilal Yildiz</td> <td>21</td> <td>7</td> <td>14</td> <td>21</td> 
                    </tr>
                  </tbody>
              </table>
            </div>
          </div>
          <div className = "twitter-section"> <p> Twitter Flow page comes here</p></div>
        </div>
        <div className = "empty-score-section">
          <div className = "empty-section"> <p> This is empty section so this place will fill out something</p></div>
          <div className = "score-section"> <p> Current scores come here</p></div>
        </div>

    </div>
     
  )
}
export default SingleClubPage