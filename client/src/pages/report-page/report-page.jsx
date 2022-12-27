import React from "react";
import AppNavBar from "../../components/appnavbar.jsx";
import "./report-page.css";


function ReportPage(){


    return(
        <div className="fullscreen row">
            <div className="report-page-container">
            <AppNavBar/>
            <div className="row report-page-header"> <h1> Report Page</h1> </div>
            <div className="row report-page-form">
                <form>
                    <div class="form-group">
                        <label className="report-page-label" for="exampleFormControlTextarea1">Please write your report and click send report.</label>
                        <textarea class="report-page-text-area form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button type="button" class="btn btn-success">Send report</button>
                    </div>

                </form>


            </div>
            </div>
            
        </div>
    )

}

export default ReportPage