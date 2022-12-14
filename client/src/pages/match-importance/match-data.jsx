import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import SortedMatches from "./match-standings.jsx";
import RefereeDisplay from "./referee-display.jsx";
function MatchDataPage({Week}) {
    const[loading,setLoading] = useState(false);
    const [allmatchDetails, setallMatchDetails] = useState([]);
    const [WeekReferee,setWeekReferee]=useState({})
     const stabilweek="5"
    const getWeekMatchDetails = async() => {
      await axios.all([
        axios.get(`${process.env.REACT_APP_URL}/api/matches/getWeekMatchDetails/${Week}`),
        axios.get(`${process.env.REACT_APP_URL}/api/refereesOfWeek/getRefereesOfWeek/${stabilweek}`)
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
              <RefereeDisplay RefData={WeekReferee} CurrentWeek={stabilweek} />
          </div>
        </div>
        :
        <p>Loading...</p>
        }
      </>
    );
  }
  export default MatchDataPage;