import React, { useEffect, useState } from "react";
import axios from "axios";
import "../admin-auth/selectReferee.css";
import AdminSelectReferee from "./selectReferee";
function AdminSelectRefereeLanding(){
    const [week, setweek] = useState({});
    const[loading,setLoading] = useState(false);
    const [allData, setallData] = useState({});

  const getWeek = async()=>{
    await axios.get(`${process.env.REACT_APP_URL}/api/weeks/getWeek`).then(response=>{
       axios.get(`${process.env.REACT_APP_URL}/api/referees/getAllref`).then(res=>{
        setallData(res.data);
        setLoading(true);
      }).catch(err => console.log(err))
      setweek(response.data.week_no);
  
    }).catch(err => console.log(err))
  };
  useEffect(() => {
      getWeek();
  }, [])

    //console.log(allData);
    return(
        <div>
            {loading ?
            <>
                <h1 className="selectRefh1"> SELECT THE REFEREES OF THE WEEK {week}: </h1>
                <AdminSelectReferee currentweek={week} allData={allData}/>
            </>
             :
             <p>Loading...</p>
            }
        </div>
    )
};
export default  AdminSelectRefereeLanding;