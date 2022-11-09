import React from "react";
import AppNavBar from "../../components/appnavbar.jsx"

function Home() {
   return(
      <div className="App">
         <AppNavBar/>
         <h1 style={{textAlign: "center", marginTop: "172px"}}>Successful Login!</h1>
      </div>
   )
}
export default Home