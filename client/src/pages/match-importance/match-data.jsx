import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import SortedMatches from "./match-standings.jsx";
function MatchDataPage({Week}) {
    const[loading,setLoading] = useState(false);
    const [allmatchDetails, setallMatchDetails] = useState([]);
  
    const getWeekMatchDetails = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getWeekMatchDetails/${Week}`)
            .then(res => {
                setallMatchDetails(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };
    useEffect(() => {
        getWeekMatchDetails();
    }, [])
    //console.log(allmatchDetails);
    return (
      <div>
        {loading ?
        <div className="mt-1">
            <SortedMatches allmatches={allmatchDetails} />
        </div>
        :
        <p>Loading...</p>
        }
      </div>
    );
  }
  export default MatchDataPage;