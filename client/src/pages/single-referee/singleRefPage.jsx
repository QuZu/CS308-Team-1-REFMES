import React from "react";
import AppNavBar from "../../components/appnavbar.jsx"

import RefInfo from "../../components/refbar/refbar.jsx";

function RefPage() {
  var Refn="Mete Kalkavan"
    return (
      <div>
        <AppNavBar/>
        <RefInfo refName={Refn}></RefInfo>
      </div>
    );
  }
  export default RefPage;