import React from "react";
import Container from 'react-bootstrap/Container';
import "../refbar/refbar.css";
import user_profile from "../refbar/user_profile.png";

function RefInfo() {
    return (
      <>
      
      <div className="padding">
        <div className="row">
          <div className="col-10">
          <div className="container d-flex justify-content-center">
            <div className="col-md-11">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                      <img src={user_profile} className="img-radius" style={{height: "80px"}}alt="User-Profile-Image">
                      </img>
                      </div>
                      <h3 className="f-w-500">Mete Kalkavan </h3>
                      <h6>Referee</h6>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-5 p-b-5 b-b-default f-w-500"> Personal Information </h6>
                        <div className="row">
                          <div className="col">
                            <p className="f-w-500 m-b-0">Place of birth:</p>
                            <h6 className="text-muted f-w-400">Samsun</h6>
                          </div>
                          <div className="col">
                            <p className="f-w-500 m-b-0">Date of birth:</p>
                            <h6 className="text-muted f-w-400">17.08.1979</h6>
                          </div>
                        </div>
                        <h6 className="m-b-10 p-b-5 p-t-15 b-b-default f-w-500">Referee information</h6>
                        <div className="row">
                          <div className="col">
                            <p className="f-w-500 m-b-0">FIFA referee:</p>
                            <h6 className="text-muted f-w-400">Since 2013</h6>
                          </div>
                          <div className="col">
                            <p className="f-w-500 m-b-0">First Super League Match:</p>
                            <h6 className="text-muted f-w-400">08.05.2011</h6>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-2">
          <div className="container d-flex justify-content-center">
            <div class="card user-card-full">
              <div class="card-header t-center">
                Web Site Total Point
              </div>
              <div class="card-body">
                <p class="card-text"></p>
                <p className="f-w-700">4 / 5</p>
                <footer className="text-muted">- This score was calculated with various variables.
                <a href="pointcalculation"> More info</a>
                </footer>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
      </>
    );
  }
  export default RefInfo;