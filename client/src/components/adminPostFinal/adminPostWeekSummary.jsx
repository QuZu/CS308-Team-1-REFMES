import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import AdminMatchbox from './adminMatchbox';

function AdminPostWeekSummary({PostWeek,formData,setFormData}) {
    
    const[isdisabled,setDisabled]=useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [btnValue, setBtnValue] = useState("Submit");
    const handleClick=(e)=>{
    
    // axios.all([
    //     axios.post(`${process.env.REACT_APP_URL}/api/admin/updatePostWeek`,newRefereesOfWeek),
    //     axios.post(`${process.env.REACT_APP_URL}/api/admin/updateMatchScore`, newScore)
    // ])
    // axios
    // .post(`${process.env.REACT_APP_URL}/api/admin/updateMatchScore`, newScore)
    // .then((res) => {
    //         if (res.status === 200) {
    //         setErrorMessage("You have submitted result successfully");
    //         setBtnDisabled(true)
    //         setBtnValue("Submitted")
    //     } else {
    //         setErrorMessage("Error,try again!");
    //     }
    // }).catch((err) => {
    //     console.log("Error: ", err);
    // });  
}

  return (
    <div className='container'>
        <div className='row'>
        {formData.resultList.length >0 ?
            formData.resultList.map((item)=>{
                return(
                    <div className='d-flex justify-content-center'>
                        <AdminMatchbox SingleMatchData={item} />
                    </div>
                    )
                }
            )
        :
        <p>{JSON.stringify(formData.resultList)}</p>
        }
        </div>
        <div className="d-flex justify-content-center row">
            <button onClick={handleClick} disabled={isdisabled} className="preweek-ref-submit">{btnValue}</button>
            <p className="preweek-ref-error-mes">{errorMessage}</p>
        </div>
    </div>
    
  )
}

export default AdminPostWeekSummary