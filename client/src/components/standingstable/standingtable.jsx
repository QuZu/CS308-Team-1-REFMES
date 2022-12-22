import React from "react";
import "../standingstable/standingstable.css"
//importing all club logos
function StandingsTable({AllArray}) {
    const c_images = [
        { id: "fenerbahce", src: "Fenerbahce"},
        { id: "galatasaray", src: "Galatasaray"},
        { id: "besiktas", src: "Besiktas"},
        { id: "basaksehir", src: "Istanbul Basaksehir"},
        { id: "adanademirspor", src: "Adana Demirspor"},
        { id: "konyaspor", src: "Konyaspor"},
        { id: "hatayspor", src: "Hatayspor"},
        { id: "giresunspor", src: "Giresunspor"},
        { id: "alanyaspor", src: "Alanyaspor"},
        { id: "sivasspor", src: "Sivasspor"},
        { id: "antalyaspor", src: "Antalyaspor"},
        { id: "gaziantepfk", src: "Gazişehir Gaziantep"},
        { id: "umraniyespor", src: "Ümraniyespor"},
        { id: "istanbulspor", src: "İstanbulspor"},
        { id: "kasimpasaspor", src: "Kasimpasa"},
        { id: "ankaragucuspor", src: "Ankaragucu"},
        { id: "trabzonspor", src: "Trabzonspor"},
        { id: "karagumrukspor", src: "Fatih Karagümrük"},
        { id: "kayserispor", src: "Kayserispor"}
    ]

    return (
   <div className="container paddings-mini">
      <div className="row">
         <div className="col-md-10 col-lg-12 standing-table mb-5">
            <table className="table-striped table-responsive table-hover result-point">
               <thead className="point-table-head">
                  <tr>
                     <th className="text-center">Rank</th>
                     <th className="text-center"></th>
                     <th className="text-left">Team</th>
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
                            var forms=item.form;
                            var badges=[]
                              for (let index = 0; index < forms.length; index++) {
                                const element = forms[index];
                                if(element==="L")
                                    badges.push(<div key={index} className="standing-badge lose-badge"><a>L</a></div>)
                                if(element==="W")
                                    badges.push(<div key={index} className="standing-badge win-badge"><a>W</a></div>)
                                if(element==="D")
                                    badges.push(<div key={index} className="standing-badge draw-badge"><a>D</a></div>)
                              }
                              const teamName=item.team.name
                              const asciName=(c_images.find(({src})=>src ===teamName));
                              var teamlink;
                              if(asciName)
                               teamlink=asciName.id
                               else
                               teamlink="fenerbahce"

                            return(
                                <tr key={item.rank} style={{borderBottom: "1px solid #dedede"}}>
                                    <td className="standing-table-text-left-number"><b>{item.rank}</b></td>
                                    <td><img src={item.team.logo} alt="logo"/></td>
                                    <td className="text-left d-flex align-items-center">
                                        <a className="standing-table-teamname" href={`/club/${teamlink}`}>{item.team.name}</a>
                                    </td>
                                    <td>{item.all.played}</td>
                                    <td><b className="standings-win-text-color">{item.all.win}</b></td>
                                    <td><b className="standings-draw-text-color">{item.all.draw}</b></td>
                                    <td><b className="standings-lose-text-color">{item.all.lose}</b></td>
                                    <td>{item.all.goals.for}</td>
                                    <td>{item.all.goals.against}</td>
                                    <td>{item.goalsDiff}</td>
                                    <td> <b>{item.points}</b></td>
                                    <td className="d-flex justify-content-center" style={{margin: "1em 0"}}>
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