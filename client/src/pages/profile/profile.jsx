import { useStore } from "../../store/store";
import "../profile/profile.css";
import { useNavigate } from "react-router";
import React, { useCallback, useState } from "react";
import { userLogout } from "../../store/userreducer";
import axios from "axios";
import AppNavBar from "../../components/appnavbar.jsx";
import stadium from '../../stadiums/fenerbahce.jpg';
import clubLogo from '../../logos/fenerbahce.png';
import profilePhoto from '../../photos/halperk.png';
import {BsTwitter, BsInstagram, BsLinkedin, BsPencilFill, BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

function ProfilePage() {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const {user:currentUser} = state;
    const {user:value}=currentUser
    const [errorMessage, setErrorMessage] = useState("");
    const goToEdit = (e) => {
    navigate("/edit")
  }

 return(
  <div className="profile-info row align-items-center mr-0">
    <AppNavBar/>

    <div className="user_profile_cap">
      <div className="user_edit_pen"><a href="/edit"><BsPencilFill/></a></div>
      <div className="user_profile_cover">
        <img src={stadium} className="stadium" alt="img"/>
      </div>
      <div className="user_profile_headline">
          <img src={profilePhoto} alt="img"/> 
          <article style={{display:"flex"}}><p style={{marginRight: "5px", fontSize: "30px"}}>{currentUser.user.full_name}</p><p style={{marginTop:"15px"}}>(@{currentUser.user.username})</p></article>
      </div>
    </div>

    <div className="user_profile_main">
      <div className="col-4">
        <div className="follow_container">
          <div className="col-6 follow_inner">
            <div><a><b>Followers</b></a></div>
            <div><a>48</a></div>
          </div>
          <div className="col-6 follow_inner">
            <div><a><b>Followings</b></a></div>
            <div><a>35</a></div>
          </div>
        </div>

        <div className="club_container">
          <div className="col-4 club_inner"><img src={clubLogo}/></div>
          <div className="col-8 club_inner"><p>{currentUser.user.fan_of}</p></div>
        </div>

        <div className="social_media_container">
          <div className="social_media_inner"><a style={{color: "#1D9BF0"}} href="https://twitter.com/huseyinalperk"><BsTwitter/></a></div>
          <div className="social_media_inner"><a style={{color: "#FE0088"}} href="https://www.instagram.com/huseyinalperk/"><BsInstagram/></a></div>
          <div className="social_media_inner"><a style={{color: "#0077B7"}} href="https://www.linkedin.com/in/halperk/"><BsLinkedin/></a></div>
        </div>
      </div>
      <div className="col-6">
        <div style={{textAlign:"center"}}>
            <div className="user_comment_container" style={{marginTop: 0}}>
              <div className="user_comment_inner user_comment_inner_top"><a>Fenerbahçe vs. Galatasaray (Week 9)</a></div>
              <div className="user_comment_inner user_comment_inner_main"><a><b>Cüneyt Çakır</b> performed very well. He managed to control pressure in the match.</a></div>
              <div className="user_comment_inner user_comment_inner_bottom"><a>Vote: </a><a className="user_vote_stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></a></div>
            </div>
            <div className="user_comment_container">
              <div className="user_comment_inner user_comment_inner_top"><a>Beşiktaş vs. Trabzonspor (Week 3)</a></div>
              <div className="user_comment_inner user_comment_inner_main"><a><b>Fırat Aydunus</b>' performance was not enough for this big match.</a></div>
              <div className="user_comment_inner user_comment_inner_bottom"><a>Vote: </a><a className="user_vote_stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/><BsStar/></a></div>
            </div>
            <div className="user_comment_container">
              <div className="user_comment_inner user_comment_inner_top"><a>Adana Demirspor vs. İstanbul Başakşehir  (Week 21)</a></div>
              <div className="user_comment_inner user_comment_inner_main"><a><b>Mete Kalkavan</b> made a lot of mistakes and left behind a great deal of controversial decision.</a></div>
              <div className="user_comment_inner user_comment_inner_bottom"><a>Vote: </a><a className="user_vote_stars"><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/><BsStar/></a></div>
            </div>
        </div>
      </div>
    </div>
  </div>
 )
}
export default ProfilePage