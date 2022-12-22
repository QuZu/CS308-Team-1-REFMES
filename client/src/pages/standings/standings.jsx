import React from "react";
import AppNavBar from "../../components/appnavbar.jsx";
import StandingsTable from "../../components/standingstable/standingtable.jsx";
import {useState,useEffect} from "react"
import axios from "axios";
function StandingsPage() {
    const [allData, setallData] = useState({});
    const[loading,setLoading] = useState(false);
  
    const getStandings = async()=>{
      await axios.get(`${process.env.REACT_APP_URL}/api/matches/getstandings`).then(res=>{
        setallData(res.data);
        setLoading(true);
    
      }).catch(err => console.log(err))
    };
    useEffect(() => {
        getStandings();
    }, [])
    console.log(allData);
    return (
      <div>
        <AppNavBar/>
        <div>
            <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Super League Turkey Club Standings</h1>
        </div>
        {console.log(allData)}
        {loading ?
        <div className="mt-5">
            <StandingsTable AllArray={allData}/> 
        </div>
        :
        <p>Loading...</p>
        }
      </div>
    );
  }
  export default StandingsPage;