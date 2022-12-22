import React from "react";
import "../standingstable/standingstable.css"
//importing all club logos
import findLogo from "../clubLogos/clubLogos"
function StandingsTable({AllArray}) {
    const c_images = [
        { name: "Fenerbahçe",id: "fenerbahce", src: "Fenerbahce"},
        { name: "Galatasaray",id: "galatasaray", src: "Galatasaray"},
        { name: "Beşiktaş",id: "besiktas", src: "Besiktas"},
        { name: "Başakşehir", id: "basaksehir", src: "Istanbul Basaksehir"},
        { name: "Adana Demirspor",id: "adanademirspor", src: "Adana Demirspor"},
        { name: "Konyaspor", id: "konyaspor", src: "Konyaspor"},
        { name: "Hatayspor",id: "hatayspor", src: "Hatayspor"},
        { name: "Giresunspor",id: "giresunspor", src: "Giresunspor"},
        { name: "Alanyaspor",id: "alanyaspor", src: "Alanyaspor"},
        { name: "Sivasspor",id: "sivasspor", src: "Sivasspor"},
        { name: "Antalyaspor",id: "antalyaspor", src: "Antalyaspor"},
        { name: "Gaziantep FK",id: "gaziantepfk", src: "Gazişehir Gaziantep"},
        { name: "Ümraniyespor",id: "umraniyespor", src: "Ümraniyespor"},
        { name: "İstanbulspor", id: "istanbulspor", src: "İstanbulspor"},
        { name: "Kasımpaşa",id: "kasimpasaspor", src: "Kasimpasa"},
        { name: "Ankaragücü",id: "ankaragucuspor", src: "Ankaragucu"},
        { name: "Trabzonspor",id: "trabzonspor", src: "Trabzonspor"},
        { name: "Karagümrük",id: "karagumrukspor", src: "Fatih Karagümrük"},
        { name: "Kayserispor",id: "kayserispor", src: "Kayserispor"}
    ]

    return (
   <div className="container paddings-mini">
      <div className="row">
         <div className="col-md-10 col-lg-12 standing-table ">
            <table className="table-striped table-responsive table-hover result-point">
               <thead className="point-table-head">
                  <tr>
                     <th className="text-left">Rank</th>
                     <th className="text-center">Team</th>
                     <th className="text-center">Played</th>
                     <th className="text-center">Win</th>
                     <th className="text-center">Draw</th>
                     <th className="text-center">Lose</th>
                     <th className="text-center">GF</th>
                     <th className="text-center">GA </th>
                     <th className="text-center">GD</th>
                     <th className="text-center">Points</th>
                     <th className="text-center">Form</th>
                  </tr>
               </thead>
               <tbody className="text-center">
                  {AllArray ?
                    (
                        AllArray.map(item=>{
                            //console.log(item.all.played);
                            var forms=item.form;
                            var badges=[]
                              for (let index = 0; index < forms.length; index++) {
                                const element = forms[index];
                                if(element==="L")
                                    badges.push(<div key={index} className="standing-badge lose-badge">L</div>)
                                if(element==="W")
                                    badges.push(<div key={index} className="standing-badge win-badge">W</div>)
                                if(element==="D")
                                    badges.push(<div key={index} className="standing-badge draw-badge">D</div>)
                              }
                              const teamName=item.team.name
                              const asciName=(c_images.find(({src})=>src ===teamName));
                              const DisplayName=(c_images.find(({src})=>src ===teamName)).name;
                              var teamlink;
                              if(asciName)
                               teamlink=asciName.id
                               else
                               teamlink="fenerbahce"

                            return(
                                <tr key={item.rank}>
                                    <td className="standing-table-text-left-number"><b>{item.rank}</b></td>
                                    <td className="text-left">
                                        <img src={findLogo(DisplayName)} alt="logo"/>
                                        <a className="standing-table-teamname" href={`/club/${teamlink}`}> 
                                        {DisplayName}
                                        </a>
                                        
                                    </td>
                                    <td>{item.all.played}</td>
                                    <td ><b className="standings-win-text-color">{item.all.win}</b></td>
                                    <td><b className="standings-draw-text-color">{item.all.draw}</b></td>
                                    <td><b className="standings-lose-text-color">{item.all.lose}</b></td>
                                    <td>{item.all.goals.for}</td>
                                    <td>{item.all.goals.against}</td>
                                    <td>{item.goalsDiff}</td>
                                    <td> <b>{item.points}</b></td>
                                    <td>
                                        {badges.map(element=>{
                                            return(element);
                                        })}
                                    </td>
                                 </tr>
                            )
                        })
                    )
                    :
                  <p>Loading...</p>

                  }
               </tbody>
            </table>
         </div>
      </div>
   </div>

    );
  }
  export default StandingsTable;