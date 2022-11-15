import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import axios from "axios";

function RefereesPage() {
    var ref1="Enis Mert";
    var ref2="Ali Palabiyik";
    var ref3="Mete Kalkavan";
    return(
        <div>
            <AppNavBar/>
            <h1 style={{textAlign: "center", marginTop: "172px"}}>Referees Page</h1>
            <div className="edit_buttons_main">
          <div className="card p-1 mb-0 card-shadow change-password">
            <div className="card-body">
                <div className="row edit_buttons_container">
                  <div className="edit_buttons_inner"><a href={`/referee/${ref1}`}>{ref1}</a></div>
                  <div className="edit_buttons_inner"><a href={`/referee/${ref2}`}>{ref2}</a></div>
                  <div className="edit_buttons_inner"><a href={`/referee/${ref3}`}>{ref3}</a></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default RefereesPage