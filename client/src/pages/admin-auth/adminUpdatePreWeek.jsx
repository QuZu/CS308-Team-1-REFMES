import React from "react";
import "./adminUpdatePreWeek.css";
import AppNavBarSingle from "../../components/appnavbarsingle.jsx";
import * as ReactBootstrap from "react-bootstrap";

function AdminUpdatePreWeekPage(){
   
    return(

        <div>
            <AppNavBarSingle/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Admin Pre Week</h1>
            </div>
        </div>

    );
}
export default AdminUpdatePreWeekPage;