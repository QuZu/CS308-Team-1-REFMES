import React from "react";
import AppNavBar from "../../components/appnavbar.jsx";

function Landing(){
    return (
        <div className="App">
            <AppNavBar/>
            <h1 style={{textAlign: "center", marginTop: "172px"}}>Successful Login!</h1>
        </div>
    )
}

export default Landing;