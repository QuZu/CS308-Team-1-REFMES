import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import RatingBox from "../../components/ratingbox/ratingbox.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "../post-match/post-match.css";

function RatingBoxes({ userID }) {
    const [postRatingData, setPostRatingData] = useState({});
    const [loading,setLoading] = useState(false);

    const getPostRating = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/postRatings/getPostRating/${userID}`)
            .then(res => {
                setPostRatingData(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getPostRating();
    }, []);

    const boxes = [];
    for (let i = 0; i < postRatingData.length; i++) {
        const postRating = postRatingData[i];
        boxes.push(<RatingBox match_id={postRating["match_id"]}/>);
    }
    return <div className="matches">{boxes}</div>;
}

function PostMatchPage() {
    const weekNo = 7;
    const userID = "6374a8295ac7890d97b6a182";

    return(
        <div>
            <AppNavBar/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Post-Match Rating for Week {weekNo}</h1>
            </div>
            <RatingBoxes userID={userID}/>
            <div className="matches">
                <RatingBox club1={0} club1Score={3} club2={2} club2Score={2} referee="Cüneyt Çakır" weekNo={weekNo}/>
                <RatingBox club1={8} club1Score={1} club2={14} club2Score={1} referee="Fırat Aydınus" weekNo={weekNo}/>
                <RatingBox club1={7} club1Score={2} club2={3} club2Score={6} referee="Kutluhan Bilgiç" weekNo={weekNo}/>
            </div>
        </div>
    )
}
export default PostMatchPage