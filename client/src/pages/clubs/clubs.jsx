import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import axios from "axios";

function ClubsPage() {

    var club1="fenerbahce";
    var club2="galatasaray";
    var club3="besiktas";
    var club4="basaksehirspor";
    var club5="adanademirspor";
    var club6="konyaspor";
    var club7="hatayspor";
    var club8="giresunspor";
    var club9="alanyaspor";
    var club10="sivasspor";
    var club11="antalyaspor";
    var club12="gaziantepfk";
    var club13="umraniyespor";
    var club14="istanbulspor";
    var club15="kasimpasaspor";
    var club16="ankaragucuspor";
    var club17="trabzonspor";
    var club18="karagumrukspor";
    var club19="kayserispor";


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
                  <div className="edit_buttons_inner"><a href={`/club/${club4}`}>{club4}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club5}`}>{club5}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club6}`}>{club6}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club7}`}>{club7}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club8}`}>{club8}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club9}`}>{club9}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club10}`}>{club10}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club11}`}>{club11}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club12}`}>{club12}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club13}`}>{club13}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club14}`}>{club14}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club15}`}>{club15}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club16}`}>{club16}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club17}`}>{club17}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club18}`}>{club18}</a></div>
                  <div className="edit_buttons_inner"><a href={`/club/${club19}`}>{club19}</a></div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default ClubsPage
