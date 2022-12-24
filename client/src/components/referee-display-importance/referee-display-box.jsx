import React, { useCallback, useState, useEffect } from "react";

import "../referee-display-importance/referee-display-box.css";

function RefereeDisplayBox({ RefereeRank, RefereeData }) {

    return (
        <>
        <div className="referee-display-outer-container">
            <div className="referee-display-container">
                <div className="referee-display-rank-container">
                    <div className="referee-display-text">
                        <a>{RefereeData.rank}</a>
                    </div>
                </div>
                <div className="referee-display-left-container">
                    <div className="referee-display-text">
                        <a>{RefereeData.name}</a>
                    </div>
                </div>
                <div className="referee-display-right-container">
                    <div className="referee-display-text">
                        <div className="referee-display-point-circle">{RefereeData.ratio}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
  export default RefereeDisplayBox;