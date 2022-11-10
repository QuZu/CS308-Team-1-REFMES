import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import axios from "axios";

function MatchesPage() {
    return(
        <div>
            <AppNavBar/>
            <h1 style={{textAlign: "center", marginTop: "172px"}}>Matches Page</h1>
        </div>
    )
}
export default MatchesPage