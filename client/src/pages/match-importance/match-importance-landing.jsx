import React from "react";
import AppNavBar from "../../components/appnavbar.jsx";
import {useState,useEffect} from "react"
import axios from "axios";
import MatchDataPage from "./match-data.jsx";
import * as ReactBootstrap from "react-bootstrap";

function MatchImportancePage() {
    const [currentweek, setcurrentweek] = useState({});
    const[loading,setLoading] = useState(false);
  
    const getWeek = async()=>{
      await axios.get(`${process.env.REACT_APP_URL}/api/weeks/getWeek`).then(res=>{
        setcurrentweek(res.data.week_no);
        setLoading(true);
    
      }).catch(err => console.log(err))
    };
    useEffect(() => {
        getWeek();
    }, [])
    
    return (
      <div>
        <AppNavBar/>
        {loading ?
        <div className="mt-5">
            <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Order of Importance and Current Status Week {currentweek}</h1>
            <MatchDataPage  Week={currentweek}/>
        </div>
        :
        <div className="d-flex justify-content-center">
            <ReactBootstrap.Spinner animation="border"/>
        </div>
        }
      </div>
    );
  }
  export default MatchImportancePage;