import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import MatchBox from "../../components/matchbox/matchbox.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "../matches/matches.css";
import * as ReactBootstrap from "react-bootstrap";

function MatchesInnerPage({currentWeekNo}) {

    const [matchesData, setMatchesData] = useState({});
    const [loading, setLoading] = useState(false);
    const [weekNo, setWeekNo] = useState(3);
    const [playedWeek, setPlayedWeek] = useState(false);

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
        if (parseInt(currentWeekNo) > parseInt(weekNo)) {
            setPlayedWeek(true);
        } else {
            setPlayedWeek(false);
        }
    }, [weekNo]);

    function showWeek( desiredWeek ) {
        setLoading(false);
        setWeekNo(desiredWeek);
    }

    return(
        <div>
            <div className="matches-league-week-container">
                <div className="matches-league-week-inner-container"><a>Select a Week:</a></div>
                <div className="matches-league-week-inner-container">
                    <div onClick={() => showWeek("1")} className="matches-league-week-block" style={{margin: "0"}}><a className="matches-league-week-no">1</a></div>
                    <div onClick={() => showWeek("2")} className="matches-league-week-block"><a className="matches-league-week-no">2</a></div>
                    <div onClick={() => showWeek("3")} className="matches-league-week-block"><a className="matches-league-week-no">3</a></div>
                    <div onClick={() => showWeek("4")} className="matches-league-week-block"><a className="matches-league-week-no">4</a></div>
                    <div onClick={() => showWeek("5")} className="matches-league-week-block"><a className="matches-league-week-no">5</a></div>
                    <div onClick={() => showWeek("6")} className="matches-league-week-block"><a className="matches-league-week-no">6</a></div>
                    <div onClick={() => showWeek("7")} className="matches-league-week-block"><a className="matches-league-week-no">7</a></div>
                    <div onClick={() => showWeek("8")} className="matches-league-week-block"><a className="matches-league-week-no">8</a></div>
                    <div onClick={() => showWeek("9")} className="matches-league-week-block"><a className="matches-league-week-no">9</a></div>
                    <div onClick={() => showWeek("10")} className="matches-league-week-block"><a className="matches-league-week-no">10</a></div>
                    <div onClick={() => showWeek("11")} className="matches-league-week-block"><a className="matches-league-week-no">11</a></div>
                    <div onClick={() => showWeek("12")} className="matches-league-week-block"><a className="matches-league-week-no">12</a></div>
                    <div onClick={() => showWeek("13")} className="matches-league-week-block"><a className="matches-league-week-no">13</a></div>
                    <div onClick={() => showWeek("14")} className="matches-league-week-block"><a className="matches-league-week-no">14</a></div>
                    <div onClick={() => showWeek("15")} className="matches-league-week-block"><a className="matches-league-week-no">15</a></div>
                    <div onClick={() => showWeek("16")} className="matches-league-week-block"><a className="matches-league-week-no">16</a></div>
                    <div onClick={() => showWeek("17")} className="matches-league-week-block"><a className="matches-league-week-no">17</a></div>
                    <div onClick={() => showWeek("18")} className="matches-league-week-block"><a className="matches-league-week-no">18</a></div>
                    <div onClick={() => showWeek("19")} className="matches-league-week-block"><a className="matches-league-week-no">19</a></div>
                </div>
                <div className="matches-league-week-inner-container" style={{marginBottom: "1.5em"}}>
                    <div onClick={() => showWeek("20")} className="matches-league-week-block" style={{margin: "0"}}><a className="matches-league-week-no">20</a></div>
                    <div onClick={() => showWeek("21")} className="matches-league-week-block"><a className="matches-league-week-no">21</a></div>
                    <div onClick={() => showWeek("22")} className="matches-league-week-block"><a className="matches-league-week-no">22</a></div>
                    <div onClick={() => showWeek("23")} className="matches-league-week-block"><a className="matches-league-week-no">23</a></div>
                    <div onClick={() => showWeek("24")} className="matches-league-week-block"><a className="matches-league-week-no">24</a></div>
                    <div onClick={() => showWeek("25")} className="matches-league-week-block"><a className="matches-league-week-no">25</a></div>
                    <div onClick={() => showWeek("26")} className="matches-league-week-block"><a className="matches-league-week-no">26</a></div>
                    <div onClick={() => showWeek("27")} className="matches-league-week-block"><a className="matches-league-week-no">27</a></div>
                    <div onClick={() => showWeek("28")} className="matches-league-week-block"><a className="matches-league-week-no">28</a></div>
                    <div onClick={() => showWeek("29")} className="matches-league-week-block"><a className="matches-league-week-no">29</a></div>
                    <div onClick={() => showWeek("30")} className="matches-league-week-block"><a className="matches-league-week-no">30</a></div>
                    <div onClick={() => showWeek("31")} className="matches-league-week-block"><a className="matches-league-week-no">31</a></div>
                    <div onClick={() => showWeek("32")} className="matches-league-week-block"><a className="matches-league-week-no">32</a></div>
                    <div onClick={() => showWeek("33")} className="matches-league-week-block"><a className="matches-league-week-no">33</a></div>
                    <div onClick={() => showWeek("34")} className="matches-league-week-block"><a className="matches-league-week-no">34</a></div>
                    <div onClick={() => showWeek("35")} className="matches-league-week-block"><a className="matches-league-week-no">35</a></div>
                    <div onClick={() => showWeek("36")} className="matches-league-week-block"><a className="matches-league-week-no">36</a></div>
                    <div onClick={() => showWeek("37")} className="matches-league-week-block"><a className="matches-league-week-no">37</a></div>
                    <div onClick={() => showWeek('38')} className="matches-league-week-block"><a className="matches-league-week-no">38</a></div>
                </div>
                <div className="matches-league-week-inner-container" style={{marginBottom: "0.5em"}}><a>Current: <b>Week {currentWeekNo}</b></a></div>
                <div className="matches-league-week-inner-container" style={{marginBottom: "3em"}}><a>Selected: <b>Week {weekNo}</b></a></div>
            </div>
            {loading && matchesData ?
                <div className="matches">
                {matchesData.map((singleMatchDetails) => {
                    return(<MatchBox key={singleMatchDetails._id} matchData={singleMatchDetails} playedWeek={playedWeek}/>)
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
export default MatchesInnerPage