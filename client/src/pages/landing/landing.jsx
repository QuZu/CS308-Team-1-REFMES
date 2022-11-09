import React from "react";
import AppNavBar from "../../components/appnavbar.jsx"


function Landing(){
    return (
        <div className="App">
            <AppNavBar/>
            <h1 style={{textAlign: "center", marginTop: "172px", fontSize: "42px"}}>WELCOME, THIS IS <b>REFMES</b>!</h1>
            <h2 style={{textAlign: "center", marginTop: "72px", fontSize: "24px"}}>Justice in Football!</h2>
        </div>
    )
}

export default Landing;