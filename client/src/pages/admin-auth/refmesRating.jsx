import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MLR from "ml-regression-multivariate-linear";
import AppNavBarSingle from "../../components/appnavbarsingle.jsx"
import * as ReactBootstrap from "react-bootstrap";

function calculateRefmesRating(weights, totalFanRating, fanRatingCount, totalObserverRating, observerRatingCount, yearExperience) {
    const wFan = weights[0];
    const wObserver = weights[1];
    const wExperience = weights[2];
    const wConstant = weights[3];

    const fanRating = (totalFanRating / fanRatingCount) * 20;
    const observerRating = (totalObserverRating / observerRatingCount) * 20;

    const refmesPoint = (wFan * fanRating) + (wObserver * observerRating) + (wExperience * yearExperience) + wConstant;
    const refmesRating = (refmesPoint / 20).toFixed(2);

    return refmesRating;
}

function RefmesRatingPage(){
    const [errorMessage, setErrorMessage] = useState("");
    const [wFan, setWFan] = useState();
    const [wObserver, setWObserver] = useState();
    const [wExperience, setWExperience] = useState();
    const [wConstant, setWConstant] = useState();
    const [loading,setLoading] = useState(false);

    const getWeights = async() => {
        await axios
            .get(`${process.env.REACT_APP_URL}/api/admin/getRefmesRatingWeights`)
            .then(res => {
                if (res.data) {
                    setWFan(res.data.wFan);
                    setWObserver(res.data.wObserver);
                    setWExperience(res.data.wExperience);
                    setWConstant(res.data.wConstant);
                    setLoading(true);
                }
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        getWeights();
    }, [])

    // Fan Rating, Observer Rating, Experience of Referee

    const x = [
        [100, 100, 15],
        [100, 100, 10],
        [100, 100, 7],
        [100, 100, 5],
        [100, 100, 3],
        [100, 100, 1],
        [100, 90, 5],
        [100, 90, 1],
        [100, 80, 5],
        [100, 70, 5],
        [100, 60, 5],
        [100, 50, 5],
        [100, 40, 5],
        [100, 30, 5],
        [100, 0, 5],
        [90, 100, 5],
        [90, 100, 1],
        [80, 100, 5],
        [70, 100, 5],
        [60, 100, 5],
        [50, 100, 5],
        [40, 100, 5],
        [30, 100, 5],
        [0, 100, 5],
        [80, 80, 5],
        [60, 60, 5],
        [40, 40, 5],
        [20, 20, 5]];

    const y = [
        [102], // 100, 100, 15
        [101.5],
        [101],
        [100], // 100, 100, 5
        [99.5],
        [98],
        [96], // 100, 90, 5
        [95.5],
        [92],
        [88],
        [84],
        [80],
        [76],
        [72],
        [37], // 100, 0, 5
        [97], // 90, 100, 5
        [96.5],
        [96],
        [95],
        [94],
        [93],
        [92],
        [91],
        [90], // 0, 100, 5
        [81], // 80, 80, 5
        [65],
        [38],
        [18]];

    const mlr = new MLR(x, y);
    // console.log(mlr.weights);
    // const weights = [0.2633877143059147, 0.6347570089117198, 0.13270641429156882, 13.04011230161882];
    // const refmesRating = calculateRefmesRating(weights, 200, 40, 100, 24, 5);
    // console.log(refmesRating);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        if(true){
            setErrorMessage("Please, enter all fields!");
        }
        else{
            setErrorMessage("You have successfully added observer to the database!");
        }
        // await axios.post(`${process.env.REACT_APP_URL}/api/`,)
        // .then(res =>{
        //     console.log(res.data);

        // }).catch(err=>console.log(err));
    };

    return(
        <div>
            <AppNavBarSingle/>
            <h1 style={{textAlign: "center", marginTop: "144px"}}>REFMES Rating</h1>

            <div>
                { loading ?
                    <div>
                        <div><a>Weight of Fan Rating: {wFan}</a></div>
                        <div><a>Weight of Observer Rating: {wObserver}</a></div>
                        <div><a>Weight of Referee Experience: {wExperience}</a></div>
                        <div><a>Constant: {wConstant}</a></div>
                    </div>
                    :
                    <div className="d-flex justify-content-center">
                        <ReactBootstrap.Spinner animation="border"/>
                    </div>
                }

            </div>

        </div>
    )
};
export default RefmesRatingPage;