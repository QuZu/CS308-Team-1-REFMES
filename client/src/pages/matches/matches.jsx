import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "../matches/matches.css";
import * as ReactBootstrap from "react-bootstrap";

function MatchesPage() {
    const weekNo = "3";

    const [matchesData, setMatchesData] = useState({});
    const [loading, setLoading] = useState(false);

    const getMatchDetails = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getMatchDetails/${weekNo}`)
            .then(res => {
                setMatchesData(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getMatchDetails();
    }, []);

    return(
        <div>
            <AppNavBar/>
            <div><h1 style={{textAlign: "center", marginTop: "172px"}}>Matches Page</h1></div>
            {loading && matchesData ?
                <div className="matches">
                {matchesData.map((singleMatchDetails) => {
                    return(<div key={singleMatchDetails._id} matchData={singleMatchDetails}>{singleMatchDetails._id}</div>)
                })}
                </div>
                :
                <div className="d-flex justify-content-center">
                    <ReactBootstrap.Spinner animation="border"/>
                </div>
            }
        </div>
    )
}
export default MatchesPage