import { useStore } from "../../store/store";
import "../profile/profile.css";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { userLogout } from "../../store/userreducer";
import axios from "axios";
import AppNavBar from "../../components/appnavbar.jsx";
import stadium from '../../stadiums/fenerbahce.jpg';
import clubLogo from '../../logos/fenerbahce.png';
import profilePhoto from '../../components/refbar/user_profile.png'
import {BsTwitter, BsInstagram, BsLinkedin, BsPencilFill, BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';
import CommentBox from "../../components/comment/commentbox";
function ProfilePage() {
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const {user:currentUser} = state;
    const [UserComments,setUserComments]=useState([]);
    const [loading,setLoading]=useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const getUserComments = async () => {
      await axios.get(`${process.env.REACT_APP_URL}/api/comments/getUserComments/${currentUser.user.id}`).then(res => {
          if (res.data == []) {
              console.log("Empty");
          } else {
              setUserComments(res.data);
              setLoading(true);
          }
      }).catch(err => console.log(err))
  };
console.log(UserComments);
useEffect(() => {
  getUserComments();
}, [])

 return(
  <div className="profile-info row align-items-center mr-0">
    <AppNavBar/>
    {loading ?
    <div>
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
        <div className="col-4 left-sidebar-margin">
          <div className="profile-left-sidebar">
            <p className="mt-2 profile-section-text d-flex justify-content-center">Fan Information</p>
            <hr></hr>
            <div className="club_container">
              <div className="col-4 club_inner"><img src={clubLogo}/></div>
              <div className="col-8 club_inner"><p>{currentUser.user.fan_of}</p></div>
            </div>
            <div className="social_media_container">
              <div className="social_media_inner"><a style={{color: "#1D9BF0"}} href="https://twitter.com/Fenerbahce"><BsTwitter/></a></div>
              <div className="social_media_inner"><a style={{color: "#FE0088"}} href="https://www.instagram.com/fenerbahce"><BsInstagram/></a></div>
            </div>
            <p className="mt-2 profile-section-text d-flex justify-content-center">User Information</p>
            <hr></hr>
            <div className="user-profile-information">
              <p className="d-flex justify-content-center profile-subsection-text">Email:</p>
              <input className=" user-profile-input" disabled={true} value={currentUser.user.email}></input>
              <p className="d-flex justify-content-center profile-subsection-text">Username:</p>
              <input className=" user-profile-input" disabled={true} value={currentUser.user.username}></input>
              <p className="d-flex justify-content-center profile-subsection-text">Full Name:</p>
              <input className="user-profile-input" disabled={true} value={currentUser.user.full_name}></input>
              <p className="d-flex justify-content-center profile-subsection-text">Total Comments:</p>
              <p className="d-flex justify-content-center profile-section-text">{UserComments.length}</p>
            </div> 
          </div>
        </div>
          <div className="col-6"> 
            {UserComments.length > 0 ? UserComments.slice(0, 10).map((item) => {

              return(
              <div style={{width: "100%"}} key={item._id}>
                  <div className="container d-flex justify-content-center">
                  <CommentBox commentPerson={currentUser.user.full_name} pComment={item.comment} myDate={item.date} MatchData={item.match_infos}/>
                  </div>
              </div>

              );
              })
              :
              <p style={{marginTop: "1em"}}>No comments yet!</p>
              }
          </div>   
      </div>
    </div>
    :
    <div>Comments Loading...</div>
  }
  
  </div>
 )
}
export default ProfilePage