import AppNavBarSingle from "../../components/appnavbarsingle.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../observer-auth/observerRating.css";
import ObserverRatingInnerPage from "./observerRating-inner";

function ObserverRatingPage() {

    const [currentWeekNo, setCurrentWeekNo] = useState(5);
    const getCurrentWeek = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/weeks/getWeek/`)
            .then(res => {
                setCurrentWeekNo(res.data.week_no);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getCurrentWeek();
    }, []);

    return(
        <div>
            <AppNavBarSingle/>
            <ObserverRatingInnerPage currentWeekNo={currentWeekNo}/>
        </div>
    )

    
}

export default ObserverRatingPage

