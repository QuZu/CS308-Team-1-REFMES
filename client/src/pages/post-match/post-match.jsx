import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import RatingBox from "../../components/ratingbox/ratingbox.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "../post-match/post-match.css";

function PostMatchPage() {
    const weekNo = "3";
    const userID = "6374a8295ac7890d97b6a182";

    const [matchDetails, setMatchDetails] = useState([]);
    const [loading,setLoading] = useState(false);

    const getMatchDetails = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getMatchDetails/${weekNo}`)
            .then(res => {
                setMatchDetails(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    const saveUserID = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getMatchDetails/${weekNo}`)
            .then(res => {
                setMatchDetails(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getMatchDetails();
    }, []);
    return(
        <div>
            <AppNavBar/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Post-Match Rating for Week {weekNo}</h1>
            </div>
            <div className="matches">
            {matchDetails.map((singleMatchDetails) => {
                return(<RatingBox key={singleMatchDetails._id} matchData={singleMatchDetails} userID={userID}/>)
            })}
            </div>
        </div>
    )
}

export default PostMatchPage