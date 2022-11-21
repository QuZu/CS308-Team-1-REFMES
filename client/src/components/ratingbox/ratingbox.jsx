import React, { useCallback, useState, useEffect } from "react";
import Rater from 'react-rater';
import axios from "axios";
import { useStore } from "../../store/store";
import "../ratingbox/ratingbox.css";
import 'react-rater/lib/react-rater.css';
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

const clubs = ["Fenerbahçe", "Galatasaray", "Beşiktaş", "Başakşehir", "Adana Demirspor",
"Konyaspor", "Hatayspor", "Giresunspor", "Alanyaspor", "Sivasspor",
"Antalyaspor", "Gaziantep FK", "Ümraniyespor", "İstanbulspor", "Kasımpaşa",
"Ankaragücü", "Trabzonspor", "Karagümrük", "Kayserispor"];


const clubLogos = [logoFenerbahce, logoGalatasaray, logoBesiktas, logoBasaksehir, logoAdanaDemirspor,
    logoKonyaspor, logoHatayspor, logoGiresunspor, logoAlanyaspor, logoSivasspor,
    logoAntalyaspor, logoGaziantepFK, logoUmraniyespor, logoIstanbulspor, logoKasimpasa,
    logoAnkaragucu, logoTrabzonspor, logoKaragumruk, logoKayserispor];

function RatingBox({ match_id }) {
    const club1 = 3; const club2 = 1; const club1Score = 2; const club2Score = 3; const referee="Cüneyt Çakır"; const weekNo=3;

    const [state, dispatch] = useStore();
    const {user:currentUser} = state;
    const [matchDetailsData, setMatchDetailsData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [loading,setLoading] = useState(false);

    const getMatchDetails = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/matches/getMatchDetails/${match_id}`)
            .then(res => {
                setMatchDetailsData(res.data);
                setLoading(true);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getMatchDetails();
    }, []);

    console.log("Zort: ", matchDetailsData);
    if (matchDetailsData.length == 1) {
        const club1Score = matchDetailsData[0]["club1_goals"];
        const club2Score = matchDetailsData[0]["club2_goals"];
        console.log("Hadi club1:", matchDetailsData[0]["club1_goals"]);
        console.log("Hadi club2:", matchDetailsData[0]["club2_goals"]);
    }

    function ratingFunction(rating) {
        const newPostRating = {rating: rating, user_id: "6374a8295ac7890d97b6a182", match_id: "6374f1412ae02fddd24a4c1b", date: "2022-11-15"};
        axios
        .post(`${process.env.REACT_APP_URL}/api/postRatings/addPostRating`, newPostRating)
        .then((res) => {
        if (res.status === 200 && res.data.message) {
            setErrorMessage(res.data.message);
        } else if (res.status === 200) {
            setErrorMessage("Your rating submitted successfully");
        } else {
            setErrorMessage("Error! Please try again.");
        }
        }).catch((err) => {
            console.log("Error: ", err);
            setErrorMessage("Error! Please try again.");
        });
    }
    

    return (
        <>
        <div className="outer-container">
            <div className="rating-container">
                <div className="rating-left">
                    <div className="rating-left-match">
                        <div className="rating-team">
                            <img src={clubLogos[club1]}/>
                            <a>{clubs[club1]} <b>({club1Score})</b></a>
                        </div>
                        <a> vs. </a>
                        <div className="rating-team">
                            <img src={clubLogos[club2]}/>
                            <a>{clubs[club2]} <b>({club2Score})</b></a>
                        </div>
                    </div>
                    <div className="rating-left-referee"><a href={`../referee/${referee}`}><b>{referee}</b></a></div>
                </div>
                <div className="rating-right">
                    <Rater onRate={({rating}) => {ratingFunction(rating)}} total={5} rating={0} interactive={true}/>
                </div>
            </div>
        </div>
        </>
    );
  }
  export default RatingBox;