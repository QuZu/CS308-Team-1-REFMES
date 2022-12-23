import React from "react";
import "../admin-auth/admin-auth.css";
import logo from '../../logo.png';
import { useNavigate } from "react-router";
function AdminAuthPage(){
    const navigate = useNavigate();
    const goToAddReferee = (e) => {
        navigate("/admin-auth/addReferee")
      }
      const goToSelectReferee = (e) => {
        navigate("/admin-auth/selectReferee")
      }
      const goToAddObserver = (e) => {
        navigate("/admin-auth/addObserver")
      }
      const goToEnterResults = (e) => {
        navigate("/admin-auth/enterResult")
      }

      const goToUpdateReferee = (e) => {
        navigate("/admin-auth/updateReferee")
      }
      const gotoRefmesRating = (e) => {
        navigate("/admin/refmesRating")
      }
      const gotoWeekDecide = (e) => {
        navigate("/admin/weekControl")
      }

    return(
        <div>
            <div> <img src={logo} style={{height: "150px", marginLeft:"500px"}} alt="refmes_logo"/> </div>
            <div><h1 className="h1_admin-auth">ADMIN CONTROL PANEL</h1></div>
            <div style={{minHeight:"100px", marginTop:"20px"}}  className="row">
                    <button onClick={goToAddReferee} style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-lg btn-success">
                    ADD REFEREE</button>
                    <button onClick={goToSelectReferee} style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-secondary">
                    SELECT THE REFEREES OF THE WEEK</button>
            </div>
            <div style={{minHeight:"100px", marginTop:"20px"}}  className="row">
                    <button onClick={goToAddObserver} style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-success">
                    ADD OBSERVER</button>
                    <button onClick={goToEnterResults} style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-secondary">
                   ENTER THE RESULTS OF THE MATCHES</button>
                  
            </div>
            <div style={{minHeight:"100px", marginTop:"40px"}}  className="row">
                    <button onClick={goToUpdateReferee}  style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-success btn-lg">
                    UPDATE THE REFEREE INFORMATION</button>
                    <button onClick={gotoRefmesRating}  style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-secondary btn-lg">
                    REFMES RATING</button>
            </div>
            <div style={{minHeight:"100px", marginTop:"40px"}}  className="row">
                    <button onClick={gotoWeekDecide}  style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-warning btn-lg">
                    WEEK STATUS</button>
            </div>
        </div>
    );
}
export default AdminAuthPage;