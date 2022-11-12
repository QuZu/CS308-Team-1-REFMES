import React from "react";
import "../refbar/refbar.css";
import user_MeteKalkavan from "../refbar/mete-kalkavan.jpg";
import user_AliPalabiyik from "../refbar/ali-palabiyik.jpg";
import user_profile from"../refbar/user_profile.png"
import CommentBox from "../comment/commentbox";




function RefInfo({refName}) {
  var list=[
    {commentPerson:"Mert",pComment:"Hakemde baya iyiydi,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mi eget urna tempor sollicitudin ut eu ipsum. Aliquam lobortis odio justo, ut congue mauris sodales at. Proin non ligula at diam rhoncus finibus. Nam et lobortis nulla. Ut id tortor metus. Cras porta fringilla dui, vel consectetur quam gravida sed. Vestibulum faucibus ante nunc, a faucibus magna ullamcorper eget. Sed vel risus purus."},
    {commentPerson:"Kuzu",pComment:"Hakemde baya kötü yönetti"},
    {commentPerson:"demo1",pComment:"Hakemde iyiydi,demo1 olarak beğendim"},

];
const picname = (refName.name).replace(" ", '');
const images = [
  { id: "MeteKalkavan", src: user_MeteKalkavan},
  { id: "AliPalabiyik", src: user_AliPalabiyik},
  { id: "EnisMert", src: user_profile},
]

const result=(images.find(({id})=>id ===picname)).src;
console.log(result)


list.sort(function(a, b){
  if(a.commentPerson < b.commentPerson) { return -1; }
  if(a.commentPerson > b.commentPerson) { return 1; }
  return 0;
})
    return (
        <div className="col">
        <div className="padding-15 row">
          <div className="col-sm-8 col-md-9">
          <div className="container d-flex justify-content-center">
            <div className="col-sm-8 col-md-11">
              <div className="card ">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 grad-color user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                      <img src={result} className="img-radius" style={{height: "80px"}}alt="User-Profile">
                      </img>
                      </div>
                      <h3 className="f-w-500">{refName.name}</h3>
                      <h6>Referee</h6>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-5 p-b-5 b-b-default f-w-500"> Personal Information </h6>
                        <div className="row">
                          <div className="col">
                            <p className="f-w-500 m-b-0">Place of birth:</p>
                            <h6 className="text-muted f-w-400">{refName.BirthPlace}</h6>
                          </div>
                          <div className="col">
                            <p className="f-w-500 m-b-0">Date of birth:</p>
                            <h6 className="text-muted f-w-400">{refName.BirthDate}</h6>
                          </div>
                        </div>
                        <h6 className="m-b-10 p-b-5 p-t-15 b-b-default f-w-500">Referee information</h6>
                        <div className="row">
                          <div className="col">
                            <p className="f-w-500 m-b-0">FIFA referee:</p>
                            <h6 className="text-muted f-w-400">{refName.FifaDate}</h6>
                          </div>
                          <div className="col">
                            <p className="f-w-500 m-b-0" >First Super League Match:</p>
                            <h6 className="text-muted f-w-400">{refName.FirstSuperDate}</h6>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="d-flex justify-content-start">
              <div className=" col-sm-8 col-md-12">
                <div className="card">
                  <div className="card-header t-center grad-color text-white">
                    REFMES Rating
                  </div>
                  <div className="card-body">
                    <p className="card-text"></p>
                    <p className="f-w-700">4.1 / 5</p>
                    <footer className="text-muted">- This score was calculated with various variables.
                    <a href="pointcalculation"> More info</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-15 row">
        <div className="col-sm-8 col-md-9">
          <div className="container d-flex justify-content-center">
            <div className="col-sm-8 col-md-11">
              <div className="card">
                <div className="card-header t-center grad-color text-white f-w-500">
                  Short Biography
                </div>
                <div className="card-body">
                  <p className="card-text">
                  {refName.Biography}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-sm-3 col-md-2">
            <div className="d-flex justify-content-start">
              <div className=" col-sm-8 col-md-12">
                <div className="card">
                  <div className="card-header t-center grad-color text-white">
                    Fans Rating
                  </div>
                  <div className="card-body">
                    <p className="card-text"></p>
                    <p className="f-w-700">3.78 / 5</p>
                    <footer className="text-muted">- This score is the average of the fan ratings.
                    <a href="pointcalculation"> More info</a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="padding-15 row">
      <div className="col-sm-8 col-md-9">
      <div className="container d-flex justify-content-center">
        <div className="col-sm-8 col-md-12">
        <div className="row">
          <h1 className="text-center">Latest Pre-Match Comments</h1>
        </div>
        <div className="row">
      { list ?
            (list.length > 0 ?
              list.map((item) => {

                return(
                  <div
                    key={item.commentPerson}
                  >
                    <div
                      className="container d-flex justify-content-center padding-b"
                    >
                      <CommentBox
                       commentPerson={item.commentPerson}
                       pComment={item.pComment}
                       >
                      </CommentBox>
                    </div>
                  </div>

                );
              }) :<p>No comment yet !!!</p>)            :
            <p>Loading...</p>

          }
          </div>
          </div>
          </div>
      </div>
      </div>
      <div className="padding-15 row">
      <div className="col-sm-8 col-md-9">
      <div className="container d-flex justify-content-center">
        <div className="col-sm-8 col-md-12">
        <div className="row">
          <h1 className="text-center">Latest Post-Match Comments</h1>
        </div>
        <div className="row">
      { list ?
            (list.length > 0 ?
              list.slice(0,2).map((item) => {

                return(
                  <div
                    key={item.commentPerson}
                  >
                    <div
                      className="container d-flex justify-content-center padding-b"
                    >
                      <CommentBox
                       commentPerson={item.commentPerson}
                       pComment={item.pComment}
                       >
                      </CommentBox>
                    </div>
                  </div>

                );
              }) :<p>No comment yet !!!</p>)            :
            <p>Loading...</p>

          }
          </div>
          </div>
          </div>
      </div>
      </div>
      
    </div>
    );
  }

export default RefInfo;