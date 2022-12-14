import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Rater from 'react-rater';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { useStore } from "../../store/store";
import "../post-comment/post-comment.css";
import * as ReactBootstrap from "react-bootstrap";
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

function PostCommentBox({ matchData }) {

    const [state, dispatch] = useStore();
    const {user:currentUser} = state;
    const [errorMessage, setErrorMessage] = useState("");
    const [comment, setComment] = useState("");
    const [isEmptyComment, setIsEmptyComment] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data, e) => {
        e.preventDefault();
        setComment(data.comment);
        if (comment == 0) {
            setIsEmptyComment(true);
        } else {
            setIsEmptyComment(false);
            const newComment = { comment: comment, user_id: currentUser.user.id, match_id: matchData._id, referee_id: matchData.ref_info[0]._id };
            axios
            .post(`${process.env.REACT_APP_URL}/api/comments/sendComment`, newComment)
            .then((res) => {
                if (res.status === 200 && res.data.message) {
                    setErrorMessage(res.data.message);
                } else if (res.status === 200) {
                    setErrorMessage("Your comment submitted successfully.");
                } else {
                    setErrorMessage("Error! Please try again.");
                }
            }).catch((err) => {
                console.log("Error: ", err);
                setErrorMessage("Error! Please try again.");
            });
            navigate("/post-match");
        }
    }
    
    return (
        <>
       <div className="post-comment-outer-container">
            <div className="post-comment-inner-container">
                <div className="post-comment-match">
                    <div className="post-comment-team">
                        <img src={(clubs.find(({name})=>name == matchData.club1_info[0].name)).src}/>
                        <a>{matchData.club1_info[0].name} <b>({matchData.club1_goals})</b></a>
                        </div>
                    <a> vs. </a>
                    <div className="post-comment-team">
                        <img src={(clubs.find(({name})=>name == matchData.club2_info[0].name)).src}/>
                        <a>{matchData.club2_info[0].name} <b>({matchData.club2_goals})</b></a>
                    </div>
                </div>

                <div className="post-comment-referee"><a href={`../referee/${matchData.ref_info[0].r_username}`}><b>{matchData.ref_info[0].name}</b></a></div>
            </div>
            <div>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <br/><textarea {...register("comment")} className="form-control" onChange={(e)=>setComment(e.target.value)} name="comment" cols="75" rows="5" placeholder="Type your comment here.."></textarea>
                    {isEmptyComment ? <div className="post-comment-comment-error"><a>Please enter a comment to send.</a></div> : <></>}
                    <br/><input type="submit" name="submitButton" className="btn btn-success" value={`Send`}/>
                </form>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default PostCommentBox;