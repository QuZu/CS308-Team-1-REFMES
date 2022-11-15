import React, { useCallback, useState } from "react";
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

function RatingBox({ club1 = 0, club1Score = 0, club2 = 1, club2Score = 0, referee = "Referee", weekNo = 0 }) {
    const [state, dispatch] = useStore();
    const {user:currentUser} = state;

    const clubs = ["Fenerbahçe", "Galatasaray", "Beşiktaş", "Başakşehir", "Adana Demirspor",
                   "Konyaspor", "Hatayspor", "Giresunspor", "Alanyaspor", "Sivasspor",
                   "Antalyaspor", "Gaziantep FK", "Ümraniyespor", "İstanbulspor", "Kasımpaşa",
                   "Ankaragücü", "Trabzonspor", "Karagümrük", "Kayserispor"];
    
    const clubLogos = [logoFenerbahce, logoGalatasaray, logoBesiktas, logoBasaksehir, logoAdanaDemirspor,
                       logoKonyaspor, logoHatayspor, logoGiresunspor, logoAlanyaspor, logoSivasspor,
                       logoAntalyaspor, logoGaziantepFK, logoUmraniyespor, logoIstanbulspor, logoKasimpasa,
                       logoAnkaragucu, logoTrabzonspor, logoKaragumruk, logoKayserispor];

    function editComment() {
        console.log("zort diye editlendim");
        console.log(currentUser.user.name);
    }

    function deleteComment() {
        console.log("hadi eyw silindim ben");
    }
    const [errorMessage, setErrorMessage] = useState("");

    function ratingFunction(rating) {
        const newRating = {userEmail: currentUser.user.email, rating: rating, club1: clubs[club1], club2: clubs[club2], weekNo: weekNo};
        axios
            .post(`${process.env.REACT_APP_URL}/api/users/sendRating`, newRating)
            .then((res) => {
            if (res.data.message) {
                setErrorMessage(res.data.message);
            } else if (res.status === 200) {
                setErrorMessage(`You sent your comment successfully`);
            } else {
                setErrorMessage("Error! Please try again.");
            }
            })
            .catch((err) => {
            console.log("Error:", err);
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
                    <div className="rating-left-referee"><a href='../referee/referee-name'><b>{referee}</b></a></div>
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