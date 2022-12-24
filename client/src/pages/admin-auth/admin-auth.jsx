import React from "react";
import "../admin-auth/admin-auth.css";
import { useNavigate } from "react-router";

function AdminAuthPage(){
    const navigate = useNavigate();

    const goToRefmesRating = (e) => {
      navigate("/admin/refmes_rating")
    }

    const goToUpdatePreWeek = (e) => {
      navigate("/admin/update_pre_week")
    }

    const goToUpdatePostWeek = (e) => {
      navigate("/admin/update_post_week")
    }

    const goToRetrieveReferee = (e) => {
      navigate("/admin/retrieve_referee_info")
    }

    const goToAddReferee = (e) => {
      navigate("/admin/add_referee")
    }

    const goToAddObserver = (e) => {
      navigate("/admin/add_observer")
    }

    return(
        <div>
            <pppNavBarSingle/>
            <div>
              <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Admin Control Panel</h1>
            </div>
            <div className="admin-auth-container container">
              <div className="row">
                <div className="admin-auth-btn-container col-12 d-flex justify-content-center">
                  <p onClick={goToRefmesRating} className="admin-auth-btn btn btn-warning">REFMES Referee Rating Algorithm</p>
                </div>
                <div className="admin-auth-btn-container col-12 d-flex justify-content-center">
                  <p onClick={goToUpdatePreWeek} className="admin-auth-btn btn btn-success">Update Pre-Week</p>
                </div>
                <div className="admin-auth-btn-container col-12 d-flex justify-content-center">
                  <p onClick={goToUpdatePostWeek} className="admin-auth-btn btn btn-success">Update Post-Week</p>
                </div>
                <div className="admin-auth-btn-container col-12 d-flex justify-content-center">
                  <p onClick={goToRetrieveReferee} className="admin-auth-btn btn btn-primary">Retrieve Referee Information</p>
                </div>
                <div className="admin-auth-btn-container col-12 d-flex justify-content-center">
                  <p onClick={goToAddReferee} className="admin-auth-btn btn btn-secondary">Add a New Referee</p>
                </div>
                <div className="admin-auth-btn-container col-12 d-flex justify-content-center">
                  <p onClick={goToAddObserver} className="admin-auth-btn btn btn-secondary">Add a New Observer</p>
                </div>
              </div>
            </div>
        </div>
    );
}
export default AdminAuthPage;