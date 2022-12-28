import React, { useState, } from "react";
import { Link } from "react-router-dom";
import "../voting-result-box/voting-result-box.css";
import 'react-rater/lib/react-rater.css';
import findLogo from "../clubLogos/clubLogos";

function VotingResultBox({ matchData}) {
    const [hasRefInfo, setHasRefInfo] = useState(matchData.referee_id ? true : false);

    return (
        <>
        <div className="voting-result-box-outer-container">
            <div className="voting-result-box-inner-container">
                <div className="voting-result-box-inner-left">

                    <div className="voting-result-box-inner-left-name">
                        <p>{matchData.club1_info[0].name}</p>
                    </div>

                    <div className="voting-result-box-inner-left-image">
                        <img alt="Homeclub" className="voting-result-box-inner-left-club-img" src={findLogo(matchData.club1_info[0].name)}/>
                    </div>

                    <div className="voting-result-box-inner-left-score">
                        <p>-</p>
                    </div>

                </div>
                <div className="voting-result-box-inner-right">

                    <div className="voting-result-box-inner-right-score">
                        <p>-</p>
                    </div>

                    <div className="voting-result-box-inner-right-image">
                        <img alt="Awayclub" className="voting-result-box-inner-right-club-img" src={findLogo(matchData.club2_info[0].name)}/>
                    </div>

                    <div className="voting-result-box-inner-right-name">
                        <p>{matchData.club2_info[0].name}</p>
                    </div>

                </div>
            </div>
            <div className="voting-result-box-middle-container">
                <div className="voting-result-box-middle-referee">
                    {hasRefInfo ?
                        <div><b>Referee:</b> <Link className="voting-result-box-middle-link" to={`../referee/${matchData.ref_info[0].r_username}`}>{matchData.ref_info[0].name}</Link></div>
                        :   
                        <p>Referee is not assigned yet.</p>
                    }
                </div>
            </div>
            <div className="voting-result-box-bottom-container">
                <div className="voting-result-box-display-text">
                    <div className="voting-result-box-point-circle">4.56</div>
                </div>
            </div>
        </div>
        </>
    );
  }
  export default VotingResultBox;