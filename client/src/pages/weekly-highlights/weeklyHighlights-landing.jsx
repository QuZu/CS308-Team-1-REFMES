import React, { useEffect, useState } from "react";
import axios from "axios";
import WHighlightsPage from "./weekly-highlights";
import AppNavBar from "../../components/appnavbar.jsx";
function WHighlightsPageLanding(){
    const [week, setweek] = useState({});
    const[loading,setLoading] = useState(false);

  const getWeek = async()=>{
    await axios.get(`${process.env.REACT_APP_URL}/api/weeks/getWeek`).then(response=>{
      setweek(response.data.week_no);
      setLoading(true);
    }).catch(err => console.log(err))
  };
  useEffect(() => {
      getWeek();
  }, [])

    return(
        <div>
            {loading ?
            <>
                <AppNavBar/>
                <h1 style={{textAlign: "center", marginTop: "12px"}}>HIGHLIGHTS OF WEEK {week}</h1>
                <WHighlightsPage currentWeek= {week} />
            </>
             :
             <p>Loading...</p>
            }
        </div>
    )
};
export default  WHighlightsPageLanding;