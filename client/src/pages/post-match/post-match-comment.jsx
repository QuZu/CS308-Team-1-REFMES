import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddComment from "../../components/post-comment/post-comment.jsx";

function PostMatchCommentPage() {
    const params = useParams();
    const matchID = params.matchID;

    const [matchDetails, setMatchDetails] = useState([]);
    const [loading,setLoading] = useState(false);

    const getSingleMatchDetails = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getSingleMatchDetails/${matchID}`)
            .then(res => {
                setMatchDetails(res.data[0]);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getSingleMatchDetails();
    }, []);

    return(
        <div>
            <AppNavBar/>
            <h1 style={{textAlign: "center", marginTop: "172px"}}>Post Match Comment Page</h1>
            <h2 style={{textAlign: "center", marginTop: "172px"}}>{matchID}</h2>
            <AddComment matchData={matchDetails}/>
        </div>
    )
}
export default PostMatchCommentPage