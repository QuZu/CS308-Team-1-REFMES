import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";
import VotingResultBox from '../../components/voting-result-box/voting-result-box';
function  VotingResultInner({PreWeek}) {
    const[loading,setLoading] = useState(false);
    const [allmatchDetails, setallMatchDetails] = useState([]);
    const getMatches=async()=>{
        await axios.get(`${process.env.REACT_APP_URL}/api/matches/getMatchDetails/${PreWeek}`).then((result) => {
            setallMatchDetails(result.data);
            setLoading(true);
        }).catch((err) => {
            
        });
    }
    useEffect(() => {
        getMatches();
    }, [])
    console.log(allmatchDetails);
    return (
    <div>
        <b className='d-flex justify-content-center row mt-3 mb-3'>Voting Results and Referees for Week {PreWeek} Matches</b>
        {allmatchDetails.map(item=>{
            return(
                <div className='d-flex justify-content-center row' key={item._id}>
                    <VotingResultBox matchData={item} />
                </div>
            )

        })}
    
    </div>
  )
}

export default VotingResultInner