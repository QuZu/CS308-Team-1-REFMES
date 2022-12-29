import React, {useState, useEffect } from "react";
import axios from "axios";
import '../report/reportBox.css'
function ReportBox({ reportData }) {

    const [errorMessage, setErrorMessage] = useState("");
    const [answer,Setanswer] = useState("");
 
    const answerReport = () => {
        console.log(reportData);
            const newReport = {user_email: reportData.user_email , admin_answer: answer, report_id: reportData._id};
            axios
                .post(`${process.env.REACT_APP_URL}/api/admin/answerReport`, newReport)
                .then((res) => {
                    
                        if (res.status === 200) {
                        setErrorMessage("You have sent the answer to the email of the user successfully");
                    } else {
                        setErrorMessage("Error,try again!");
                    }
                }).catch((err) => {
                    console.log("Error: ", err);
                });
           
        
    }
    return (
        <div className="col-6 reportDiv">
        <p style={{textAlign:"center", fontSize:"23px"}}><b>{reportData.user_email}</b></p>
        <hr/>
        <p style={{textAlign:"center"}}>{reportData.user_message}</p>
          <div style={{textAlign:"center"}}>
            <form onSubmit={answerReport}>
              <textarea onChange={(e)=>Setanswer(e.target.value)}  className="reportsTextArea" placeholder="Enter your response here..."></textarea>
              <p>{errorMessage} </p>
              <button className="btn btn-success" type="submit"> Answer Report</button>
          </form>
          </div>
        </div>
    );
  }
  export default ReportBox;