import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import Carousel from 'react-bootstrap/Carousel';
import * as ReactBootstrap from "react-bootstrap";
import "../home/home.css";
import { Link } from "react-router-dom";
import slider1 from '../../dalle/match_2.jpg';
import slider2 from '../../dalle/match_1.jpg';
import slider3 from '../../dalle/match_3.jpg';

function Home() {
    const [state, dispatch] = useStore();
    const { user: currentUser } = state;
    const [currentweek, setcurrentweek] = useState();
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [topStandings, setTopStandings] = useState({});
    const [refData, setRefData] = useState({});

    const c_images = [
        { name: "Fenerbahçe", id: "fenerbahce", src: "Fenerbahce" },
        { name: "Galatasaray", id: "galatasaray", src: "Galatasaray" },
        { name: "Beşiktaş", id: "besiktas", src: "Besiktas" },
        { name: "Başakşehir", id: "basaksehir", src: "Istanbul Basaksehir" },
        { name: "Adana Demirspor", id: "adanademirspor", src: "Adana Demirspor" },
        { name: "Konyaspor", id: "konyaspor", src: "Konyaspor" },
        { name: "Hatayspor", id: "hatayspor", src: "Hatayspor" },
        { name: "Giresunspor", id: "giresunspor", src: "Giresunspor" },
        { name: "Alanyaspor", id: "alanyaspor", src: "Alanyaspor" },
        { name: "Sivasspor", id: "sivasspor", src: "Sivasspor" },
        { name: "Antalyaspor", id: "antalyaspor", src: "Antalyaspor" },
        { name: "Gaziantep FK", id: "gaziantepfk", src: "Gazişehir Gaziantep" },
        { name: "Ümraniyespor", id: "umraniyespor", src: "Ümraniyespor" },
        { name: "İstanbulspor", id: "istanbulspor", src: "İstanbulspor" },
        { name: "Kasımpaşa", id: "kasimpasaspor", src: "Kasimpasa" },
        { name: "Ankaragücü", id: "ankaragucuspor", src: "Ankaragucu" },
        { name: "Trabzonspor", id: "trabzonspor", src: "Trabzonspor" },
        { name: "Karagümrük", id: "karagumrukspor", src: "Fatih Karagümrük" },
        { name: "Kayserispor", id: "kayserispor", src: "Kayserispor" }
    ];

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const getData = async () => {
        await axios.all([
            axios.get(`${process.env.REACT_APP_URL}/api/matches/getstandings`),
            axios.get(`${process.env.REACT_APP_URL}/api/referees/getAllref`)
        ])
            .then(axios.spread((res1, res2) => {
                const topStandingsArray = [];
                for (var i = 0; i < 5; i++) {
                    topStandingsArray.push(res1.data[i]);
                }
                setTopStandings(topStandingsArray);
                setRefData(res2.data);
                console.log(res2.data);
                setLoading(true);
            })).catch(err => console.log(err));
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <AppNavBar />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item style={{ height: "640px", background: "#ddd" }}>
                    <div className="d-flex align-items-center justify-content-center h-100"><img src={slider1} className="d-block w-100" alt="..." /></div>
                    <Carousel.Caption style={{ marginBottom: "1.5em", textShadow: "0 0 1rem #000" }}>
                        <h2>Welcome to REFMES!</h2>
                        <p>Referee Management and Assignment System for TFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "640px", background: "#ddd" }}>
                    <div className="d-flex align-items-center justify-content-center h-100"><img src={slider2} className="d-block w-100" alt="..." /></div>
                    <Carousel.Caption style={{ marginBottom: "1.5em", textShadow: "0 0 1rem #000" }}>
                        <h2>Give Ratings to Referees</h2>
                        <p>Both pre-match and post-match ratings for referee assignments</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "640px", background: "#ddd" }}>
                    <div className="d-flex align-items-center justify-content-center h-100"><img src={slider3} className="d-block w-100" alt="..." /></div>
                    <Carousel.Caption style={{ marginBottom: "1.5em", textShadow: "0 0 1rem #000" }}>
                        <h2>Track Live Results</h2>
                        <p>Live status of referee assignments and matches</p>
                        <a className="btn btn-danger" href="../livestatus">Track Live Status</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <h2 style={{ textAlign: "center", padding: "72px 0", fontSize: "24px" }}>Completely Fair Referee Assignments with REFMES</h2>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="home-top-standings-container mb-2">
                            <p>REFMES is the only platform you can officially give ratings for the referees in the Super League, affecting the assignments of the referees in the later matches. This increases the fairness of the Turkish football, and its prestige throughout the globe. Turkish Football Federation owns this project, and takes actions according to the flow of the project. You can safely enter your comments about the referees of the matches, and you can give ratings both in pre-match and post-match periods. Also, you can view other fans' opinions about referees, and follow the live status for the current week. In order to have access to the full features of this website, you have to login first:</p>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <Link className="btn btn-success me-2" to={`../login`}>Login</Link>
                            <Link className="btn btn-danger" to={`../signup`}>Signup</Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="col-5">
                        <div className="home-top-standings-container mb-2">
                            <h5>Top Club Standings in the League</h5>
                        </div>
                        <div className="home-top-standings-container">
                            <div className="home-top-standings-inner-container">
                                <div className="home-top-standings-inner-item"><b>Rank</b></div>
                                <div className="home-top-standings-inner-item-club"><b>Club Name</b></div>
                                <div className="home-top-standings-inner-item"><b>Pts</b></div>
                            </div>
                            {loading ?
                                (topStandings.map((item, index) => {
                                    return (
                                        <div className="home-top-standings-inner-container" key={index} idx={index}>
                                            <div className="home-top-standings-inner-item">{topStandings[index].rank}</div>
                                            <div className="home-top-standings-inner-item-club">
                                                <Link to={`../club/${(c_images.find(({ src }) => src === topStandings[index].team.name)).id}`}>
                                                    {(c_images.find(({ src }) => src === topStandings[index].team.name)).name}
                                                </Link>
                                            </div>
                                            <div className="home-top-standings-inner-item">{topStandings[index].points}</div>
                                        </div>);
                                }))
                                :
                                <div className="d-flex justify-content-center mt-3">
                                    <ReactBootstrap.Spinner animation="border" />
                                </div>
                            }
                            <div className="home-top-standings-container my-3">
                                <h5 className=""><a className="btn btn-secondary" href="../standings">See All Club Standings</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home