
import AppNavBar from "../../components/appnavbar.jsx";
import RatingBox from "../../components/comment/post-comment.jsx";

import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import "../post-match-comment/post-match-comment.css";
import CommentBoxs from "../../components/comment/post-comment.jsx";
import * as ReactBootstrap from "react-bootstrap";

function PostMatchPage() {
    const userID = "6374a8295ac7890d97b6a182";
    const [AllMatchData, setAllMatchData] = useState({});
    const [loading,setLoading] = useState(true);
    var [datamatch,setDatamatch]=useState([])
    var currentWeek="";
    var weekData={
        weekno:1,
        start_Date:new Date("2022-11-13"),
        end_Date:new Date("2022-11-20")
    };

    const setWeek= async()=>{
        await axios.post(`${process.env.REACT_APP_URL}/api/weeks/setWeek`,weekData)
        .then(res=>{
            console.log(res);
        }).catch(err => console.log(err));
    };
    const getMatch= async() => {
        currentWeek="3";
        // await axios.get(`${process.env.REACT_APP_URL}/api/weeks/getWeek`)
        // .then(res=>{
        //     console.log("Current week: ",res.data)
        //     currentWeek=res.data;
        // });
        var count=0;
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getAll/${currentWeek}`)
            .then( res => {
                console.log("Week:",currentWeek);
                const MatchDatas=res.data;
                console.log(MatchDatas);
                setDatamatch(MatchDatas);
                setLoading(false);

        }).catch(err => console.log(err));
        //setLoading(true);
    };

    useEffect(() => {
        //setWeek();
        getMatch();
    }, []);
    console.log("Final Data:",datamatch)
    return(
         loading ? 
        <div className="d-flex justify-content-center">
           (<ReactBootstrap.Spinner animation="border"/>)
        </div> 
        :
        <div>
            <AppNavBar/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Post-Match Rating for Week {currentWeek}</h1>
            </div>
            <div className=" row matches">
                {
                    datamatch ?
                    (datamatch.length>0 ? 
                        datamatch.map((item)=>{
                            return(
                                <div key={item._id}>
                                <div>
                                    <CommentBoxs
                                     AllData={item}
                                    >

                                    </CommentBoxs>
                                </div>
                                </div>
                            )
                        })
                        
                        : <p>Already Voted All !!!</p>
                    )
                    :
                    <p>Loading...</p>
                }
        
            </div>
        </div>
        
    )
}
export default PostMatchPage