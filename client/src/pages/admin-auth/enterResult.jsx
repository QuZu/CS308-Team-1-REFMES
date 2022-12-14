import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultBox from "../../components/enterResult/ResultBox.jsx";
import * as ReactBootstrap from "react-bootstrap";
function AdminEnterResult(){
    const weekNo = "1";

    const [matchDetails, setMatchDetails] = useState([]);
    const [loading,setLoading] = useState(false);

    const getMatchDetails = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getMatchDetails/${weekNo}`)
            .then(res => {
                setMatchDetails(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getMatchDetails();
    }, []);
    console.log(matchDetails);
    return(
        <div>
             <h1 style={{textAlign: "center" ,color:"red", paddingBottom:"10px"}}>ENTER THE RESULTS OF THE WEEK {weekNo}</h1>
             {loading && matchDetails ?
                <div>
                {matchDetails.map((singleMatchDetails) => {
                    return(<ResultBox key={singleMatchDetails._id} matchData={singleMatchDetails}/>)
                })}
                </div>
                :
                <div className="d-flex justify-content-center">
                    <ReactBootstrap.Spinner animation="border"/>
                </div>
            }
        </div>

    )
};
export default AdminEnterResult;