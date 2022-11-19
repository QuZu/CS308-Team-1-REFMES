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

const clubs = [
    { name: "Fenerbahçe", src: logoFenerbahce},
    { name: "Galatasaray", src: logoGalatasaray},
    { name: "Beşiktaş", src: logoBesiktas},
    { name: "Başakşehir", src: logoBasaksehir},
    { name: "Adana Demirspor", src: logoAdanaDemirspor},
    { name: "Konyaspor", src: logoKonyaspor},
    { name: "Hatayspor", src: logoHatayspor},
    { name: "Giresunspor", src: logoGiresunspor},
    { name: "Alanyaspor", src: logoAlanyaspor},
    { name: "Sivasspor", src: logoSivasspor},
    { name: "Antalyaspor", src: logoAntalyaspor},
    { name: "Gaziantep FK", src: logoGaziantepFK},
    { name: "Ümraniyespor", src: logoUmraniyespor},
    { name: "İstanbulspor", src: logoIstanbulspor},
    { name: "Kasımpaşa", src: logoKasimpasa},
    { name: "Ankaragücü", src: logoAnkaragucu},
    { name: "Trabzonspor", src: logoTrabzonspor},
    { name: "Karagümrük", src: logoKaragumruk},
    { name: "Kayserispor", src: logoKayserispor},
  ]

function RatingBox({ matchData }) {

    const [state, dispatch] = useStore();
    const {user:currentUser} = state;
    const [rating, setRating] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [isInteractive, setIsInteractive] = useState(true);
    const [btnValue, setBtnValue] = useState("Submit");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating == 0) {
            console.log("You have to choose a rating to submit.")
        } else {
            const newPostRating = {rating: rating, user_id: currentUser.user.id, match_id: matchData._id, date: "2022-11-19"};
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
            setIsInteractive(false);
            setBtnValue("Saved");
        }
    }

    return (
        <>
        <div className="outer-container">
            <div className="rating-container">
                <div className="rating-left">
                    <div className="rating-left-match">
                        <div className="rating-team">
                            <img src={(clubs.find(({name})=>name == matchData.club1_info[0].name)).src}/>
                            <a>{matchData.club1_info[0].name} <b>({matchData.club1_goals})</b></a>
                        </div>
                        <a> vs. </a>
                        <div className="rating-team">
                            <img src={(clubs.find(({name})=>name == matchData.club2_info[0].name)).src}/>
                            <a>{matchData.club2_info[0].name} <b>({matchData.club2_goals})</b></a>
                        </div>
                    </div>
                    <div className="rating-left-referee"><a href={`../referee/${matchData.ref_info[0].r_username}`}><b>{matchData.ref_info[0].name}</b></a></div>
                </div>
                <div className="rating-right">
                    <Rater onRate={({rating}) => {setRating(rating);}} total={5} rating={0} interactive={isInteractive}/>
                </div>
                <div>
                <form onSubmit={handleSubmit}>
                    <input type="submit" name="submitButton" className="btn btn-success" value={`${btnValue}`}/>
                </form>
                </div>
            </div>
        </div>
        </>
    );
  }
  export default RatingBox;