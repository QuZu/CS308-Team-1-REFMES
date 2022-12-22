import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import SortedMatches from "./match-standings.jsx";
import RefereeDisplay from "./referee-display.jsx";
import * as ReactBootstrap from "react-bootstrap";

function MatchDataPage({Week}) {
    const[loading,setLoading] = useState(false);
    const [allmatchDetails, setallMatchDetails] = useState([]);
    const [WeekReferee,setWeekReferee]=useState([])
     const stabilweek="15"
    const getWeekMatchDetails = async() => {
      await axios.all([
        axios.get(`${process.env.REACT_APP_URL}/api/matches/getWeekMatchDetails/${Week}`),
        axios.get(`${process.env.REACT_APP_URL}/api/refereesOfWeek/getRefereesOfWeek/${Week}`)
      ])
      .then(axios.spread((res1, res2) => {
        setallMatchDetails(res1.data);
        setWeekReferee(res2.data)
        setLoading(true);
    
      })).catch(err => console.log(err));
    };
    useEffect(() => {
        getWeekMatchDetails();
    }, [])
    console.log(allmatchDetails);
    console.log(WeekReferee);
    return (
      <>
        {loading ?
        <div className="row">
          <div className="col-6">
              <SortedMatches allmatches={allmatchDetails} />
          </div>
          <div className="col-5">
            {WeekReferee.myarray.length >0 ? 
            <RefereeDisplay RefData={WeekReferee.myarray} CurrentWeek={Week} />
            :<h3 style={{textAlign: "center"}}>Something went wrong when getting referee..</h3> }
          </div>
        </div>
        :
        <div className="d-flex justify-content-center">
            <ReactBootstrap.Spinner animation="border"/>
        </div>
        }
      </>
    );
  }
  export default MatchDataPage;