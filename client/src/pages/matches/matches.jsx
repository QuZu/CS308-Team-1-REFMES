
import AppNavBar from "../../components/appnavbar.jsx";
import MatchesInnerPage from "./matches-inner.jsx";
import React, {useState, useEffect } from "react";
import axios from "axios";
import "../matches/matches.css";


function MatchesPage() {

    const [loading, setLoading] = useState(false);
    const [currentWeekNo, setCurrentWeekNo] = useState(5);

    const getCurrentWeek = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/weeks/getWeek/`)
            .then(res => {
                setCurrentWeekNo(res.data.week_no);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getCurrentWeek();
    }, []);

    return(
        <div>
            <AppNavBar/>
            <div><h1 style={{textAlign: "center", margin: "2em 0em 1em"}}>Super League Matches</h1></div>
            <MatchesInnerPage currentWeekNo={currentWeekNo}/>
        </div>
    )
}
export default MatchesPage