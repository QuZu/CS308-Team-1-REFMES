import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import axios from "axios";

function ClubsPage() {

    var club1="fenerbahce";
    var club2="galatasaray";
    var club3="besiktas";

    return(
        <div>
            <AppNavBar/>
            <h1 style={{textAlign: "center", marginTop: "172px"}}>Clubs Page</h1>
            <div className="edit_buttons_main">
          <div className="card p-1 mb-0 card-shadow change-password">
            <div className="card-body">
                <div className="row edit_buttons_container">
                  <div className="edit_buttons_inner"><a href={`/club/${club1}`}>{club1}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club2}`}>{club2}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club3}`}>{club3}</a></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default ClubsPage
