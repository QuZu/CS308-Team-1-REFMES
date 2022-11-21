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
    return(
        <div>
            <div> <img src={logo} style={{height: "150px", marginLeft:"500px"}} alt="refmes_logo"/> </div>
            <div><h1>ADMIN CONTROL PANEL</h1></div>
            <div style={{minHeight:"100px", marginTop:"20px"}}  className="row">
                    <button onClick={goToAddReferee} style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-success">
                    ADD REFEREE</button>
                    <button onClick={goToSelectReferee} style={{margin: "0 auto"}} type='submit' className="col-5 btn btn-block btn-warning">
                    SELECT THE REFEREE OF THE WEEK</button>
            </div>
        </div>
    );
}
export default AdminAuthPage;