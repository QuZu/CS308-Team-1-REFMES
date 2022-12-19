import React from "react";
import findLogo from "../clubLogos/clubLogos";
import "../clubs/clubCard.css"

function ClubCard({clubName}){

    console.log("clubname: ", clubName);
   
    // logo = related image source
    var logo= findLogo(clubName);

    return(
        
        <a href = {`/club/${clubName}`}> <div  className="card clubcard">

            <div className="club-card-image"> <img src= {logo}  className="card-img-top c-card-img" alt= {clubName}/> </div>
            <div className="card-body c_title ">
                <h3 className="card-title">{clubName}</h3> 
            </div> 
        </div> </a>
    )
}
export default ClubCard


