import React from "react";
import logo from '../../logo.png';
import { useNavigate } from "react-router";
function ObserverAuthPage(){
    const navigate = useNavigate();
    const goToObserverRate = (e) => {
        navigate("/observer-auth/observerRating")
      }

    return(
        <div className="container-fluid">
            <div> <img src={logo} style={{height: "150px", marginLeft:"500px"}} alt="refmes_logo"/> </div>
            <div><h1 style = {{textAlign: 'center', color: 'red', marginTop: '30px'}}>OBSERVER PANEL</h1></div>
            <div style={{minHeight:"100px", marginTop:"20px"}}  className="row">
                    <button onClick={goToObserverRate} style={{margin: "0 auto", marginTop: '30px'}} type='submit' className="col-5 btn btn-block btn-success">
                    Rate Referee</button>
                    
            </div>
        </div>
    );
}
export default ObserverAuthPage;