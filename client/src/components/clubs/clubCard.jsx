import React from "react";
import "../clubs/clubCard.css"


//importing all club logos
import logoFenerbahce from '../../logos/fenerbahce.png';
import logoGalatasaray from '../../logos/galatasaray.png';
import logoBesiktas from '../../logos/besiktas.png';
import logoBasaksehir from '../../logos/basaksehir.png';
import logoAdanaDemirspor from '../../logos/adana_demirspor.png';
import logoKonyaspor from '../../logos/konyaspor.png';
import logoHatayspor from '../../logos/hatayspor.png';
import logoGiresunspor from '../../logos/giresunspor.png';
import logoAlanyaspor from '../../logos/alanyaspor.png';
import logoSivasspor from '../../logos/sivasspor.png';
import logoAntalyaspor from '../../logos/antalyaspor.png';
import logoGaziantepFK from '../../logos/gaziantep_fk.png';
import logoUmraniyespor from '../../logos/umraniyespor.png';
import logoIstanbulspor from '../../logos/istanbulspor.png';
import logoKasimpasa from '../../logos/kasimpasa.png';
import logoAnkaragucu from '../../logos/ankaragucu.png';
import logoTrabzonspor from '../../logos/trabzonspor.png';
import logoKaragumruk from '../../logos/karagumruk.png';
import logoKayserispor from '../../logos/kayserispor.png';

function ClubCard({clubName, asciName}){

    console.log("clubname: ", clubName);
    console.log("asciName: ", asciName);
   
    // declaring the logos dictionary
    const c_images = [
        { id: "fenerbahce", src: logoFenerbahce},
        { id: "galatasaray", src: logoGalatasaray},
        { id: "besiktas", src: logoBesiktas},
        { id: "basaksehir", src: logoBasaksehir},
        { id: "adanademirspor", src: logoAdanaDemirspor},
        { id: "konyaspor", src: logoKonyaspor},
        { id: "hatayspor", src: logoHatayspor},
        { id: "giresunspor", src: logoGiresunspor},
        { id: "alanyaspor", src: logoAlanyaspor},
        { id: "sivasspor", src: logoSivasspor},
        { id: "antalyaspor", src: logoAntalyaspor},
        { id: "gaziantepfk", src: logoGaziantepFK},
        { id: "umraniyespor", src: logoUmraniyespor},
        { id: "istanbulspor", src: logoIstanbulspor},
        { id: "kasimpasaspor", src: logoKasimpasa},
        { id: "ankaragucuspor", src: logoAnkaragucu},
        { id: "trabzonspor", src: logoTrabzonspor},
        { id: "karagumrukspor", src: logoKaragumruk},
        { id: "kayserispor", src: logoKayserispor}

    ]

    // logo = related image source
    
    var logo=(c_images.find(({id})=>id === asciName )).src;
    

    return(
        
        <div  className="card clubcard">
            <img src= {logo}  className="card-img-top" alt= {clubName}/>
            <div className="card-body">
                <a href = {`/club/${asciName}`}> <h5 className="card-title">{clubName}</h5> </a>
            </div>
        </div>
       
    )
}
export default ClubCard


