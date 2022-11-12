import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import RatingBox from "../../components/ratingbox/ratingbox.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import axios from "axios";
import "../post-match/post-match.css";

function PostMatchPage() {
    return(
        <div>
            <AppNavBar/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Post-Match Rating and Comments</h1>
            </div>
            <div className="matches">
                <RatingBox club1={0} club1Score={3} club2={2} club2Score={2} referee="Cüneyt Çakır"/>
                <RatingBox club1={8} club1Score={1} club2={14} club2Score={1} referee="Fırat Aydınus"/>
                <RatingBox club1={7} club1Score={2} club2={3} club2Score={6} referee="Kutluhan Bilgiç"/>
            </div>
        </div>
    )
}
export default PostMatchPage