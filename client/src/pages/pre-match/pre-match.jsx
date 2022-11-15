import React from "react";
import AppNavBar from "../../components/appnavbar.jsx"
import "../pre-match/pre-match.css";
import {BsStar} from 'react-icons/bs';

function PreMatchPage() {
    return (
      <div>
        <AppNavBar/>
        <div style={{textAlign:"center", margin: "2em", color: "blue"}}>
        <h1>Vote the Referees of the Week 17:</h1>
        </div>
        <div style={{margin:" 2em auto",backgroundColor:"red"}}>
            <div className="row" style={{textAlign:"center",margin:"auto"}}>
                <div className="col-6 vote_border" style={{backgroundColor:"lightblue", marginTop:"10px", marginLeft:"100px"}}>
                    <p className="referee_name" style={{paddingTop:"10px"}}>Mete Kalkavan</p>
                </div>
                <div className="col-4 vote_border" style={{ marginTop:"10px", marginLeft:"10px",backgroundColor:"lightblue"}}>
                    <div className="user_vote_stars" style={{paddingTop:"15px"}}><BsStar id="1"/><BsStar id="2"/><BsStar id="3"/><BsStar id="4"/><BsStar id="5"/></div>
                </div>
            </div>
            <div className="row" style={{textAlign:"center",margin:"auto"}}>
                <div className="col-6 vote_border" style={{backgroundColor:"lightblue", marginTop:"10px", marginLeft:"100px"}}>
                    <p className="referee_name" style={{paddingTop:"10px"}}>Cüneyt Çakır</p>
                </div>
                <div className="col-4 vote_border" style={{marginTop:"10px", marginLeft:"10px",backgroundColor:"lightblue"}}>
                    <div className="user_vote_stars" style={{paddingTop:"15px"}}><BsStar id="1"/><BsStar id="2"/><BsStar id="3"/><BsStar id="4"/><BsStar id="5"/></div>
                </div>
            </div>
            <div className="row" style={{textAlign:"center",margin:"auto"}}>
                <div className="col-6 vote_border" style={{backgroundColor:"lightblue", marginTop:"10px", marginLeft:"100px"}}>
                    <p className="referee_name" style={{paddingTop:"10px"}}>Halil Umut Meler</p>
                </div>
                <div className="col-4 vote_border" style={{marginTop:"10px", marginLeft:"10px",backgroundColor:"lightblue"}}>
                    <div className="user_vote_stars" style={{paddingTop:"15px"}}><BsStar id="1"/><BsStar id="2"/><BsStar id="3"/><BsStar id="4"/><BsStar id="5"/></div>
                </div>
            </div>
            <div className="row" style={{textAlign:"center",margin:"auto"}}>
                <div className="col-6 vote_border" style={{backgroundColor:"lightblue", marginTop:"10px", marginLeft:"100px"}}>
                    <p className="referee_name" style={{paddingTop:"10px"}}>Yaşar Kemal Uğurlu</p>
                </div>
                <div className="col-4 vote_border" style={{marginTop:"10px", marginLeft:"10px",backgroundColor:"lightblue"}}>
                    <div className="user_vote_stars" style={{paddingTop:"15px"}}><BsStar id="1"/><BsStar id="2"/><BsStar id="3"/><BsStar id="4"/><BsStar id="5"/></div>
                </div>
            </div>
            <div className="row" style={{textAlign:"center",margin:"auto"}}>
                <div className="col-6 vote_border" style={{backgroundColor:"lightblue", marginTop:"10px", marginLeft:"100px"}}>
                    <p className="referee_name" style={{paddingTop:"10px"}}>Hüseyin Göçek</p>
                </div>
                <div className="col-4 vote_border" style={{marginTop:"10px", marginLeft:"10px",backgroundColor:"lightblue"}}>
                    <div className="user_vote_stars" style={{paddingTop:"15px"}}><BsStar id="1"/><BsStar id="2"/><BsStar id="3"/><BsStar id="4"/><BsStar id="5"/></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  export default PreMatchPage;