import React, { useCallback, useState } from "react";
import Rater from 'react-rater';
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

function RatingBox({ club1 = 0, club1Score = 0, club2 = 1, club2Score = 0, referee = "Referee" }) {
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
                    <Rater onRate={({rating}) => {console.log(rating);}} total={5} rating={0} interactive={true}/>
                </div>
            </div>
            <form className="comment-container">
                <div className="comment-content">
                    <div className="comment-description">
                        <input className="comment-text btn-border input-style form-control" placeholder="Add a comment..." contentEditable="true" onClick={editComment}></input>
                    </div>
                    <div className="comment-menu">
                        <div className="btn btn-primary edit-button" onClick={editComment}>Edit</div>
                        <div className="btn btn-danger delete-button" onClick={deleteComment}>Delete</div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
  }
  export default RatingBox;