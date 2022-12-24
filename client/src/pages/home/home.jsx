import React, { useState } from "react";
import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx"

function Home() {
   const [state, dispatch] = useStore();
   const {user: currentUser} = state;

   return(
      <div className="App">
         <AppNavBar/>
         { currentUser ?
         <div>
            <h1 style={{textAlign: "center", marginTop: "172px", fontSize: "42px"}}>WELCOME, THIS IS <b>REFMES</b>!</h1>
            <h2 style={{textAlign: "center", marginTop: "72px", fontSize: "24px"}}>Justice in Football!</h2>
         </div>
         :
         <div>
            <h1 style={{textAlign: "center", marginTop: "172px", fontSize: "42px"}}>REFMES: Referee Management and Evaluation System</h1>
         </div>
         }
      </div>
   )
}
export default Home