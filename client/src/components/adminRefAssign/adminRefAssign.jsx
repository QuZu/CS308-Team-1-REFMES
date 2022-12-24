import React, { useEffect, useState } from "react";
import axios from "axios";
import "../adminRefAssign/adminRefAssign.css";
import * as ReactBootstrap from "react-bootstrap";
import RefAssignBox from "../refAssignBox/refAssignBox.jsx"; 

function AdminRefAssignPage ( {currentWeek, allData, formData, setFormData} ){
    const [loading,setLoading] = useState(false);
    const [allMatchDetails, setAllMatchDetails] = useState([]);
    const [weekReferee, setWeekReferee] = useState([]);
    const [standingsData, setStandingsData] = useState([]);
    const [sortedMatches, setSortedMatches] = useState([]);
    const [sortedRefereees, setSortedReferees] = useState([]);
    const [currentYear, setCurrentYear] = useState();
    const [refArray, setRefArray] = useState([]);

    const c_images = [
        { id: "fenerbahce", src: "Fenerbahce"},
        { id: "galatasaray", src: "Galatasaray"},
        { id: "besiktas", src: "Besiktas"},
        { id: "basaksehir", src: "Istanbul Basaksehir"},
        { id: "adanademirspor", src: "Adana Demirspor"},
        { id: "konyaspor", src: "Konyaspor"},
        { id: "hatayspor", src: "Hatayspor"},
        { id: "giresunspor", src: "Giresunspor"},
        { id: "alanyaspor", src: "Alanyaspor"},
        { id: "sivasspor", src: "Sivasspor"},
        { id: "antalyaspor", src: "Antalyaspor"},
        { id: "gaziantepfk", src: "Gazişehir Gaziantep"},
        { id: "umraniyespor", src: "Ümraniyespor"},
        { id: "istanbulspor", src: "İstanbulspor"},
        { id: "kasimpasaspor", src: "Kasimpasa"},
        { id: "ankaragucuspor", src: "Ankaragucu"},
        { id: "trabzonspor", src: "Trabzonspor"},
        { id: "karagumrukspor", src: "Fatih Karagümrük"},
        { id: "kayserispor", src: "Kayserispor"}
    ];

    const getAssignmentDetails = async() => {
        await axios.all([
          axios.get(`${process.env.REACT_APP_URL}/api/matches/getWeekMatchDetails/${currentWeek}`),
          axios.get(`${process.env.REACT_APP_URL}/api/refereesOfWeek/getRefereesOfWeek/${currentWeek}`),
          axios.get(`${process.env.REACT_APP_URL}/api/matches/getstandings`),
          axios.get(`${process.env.REACT_APP_URL}/api/admin/getRefmesRatingWeights`),
          axios.get(`${process.env.REACT_APP_URL}/api/weeks/getCurrentYear`)
        ]).then(axios.spread((res1, res2, res3, res4, res5) => {
            var mydata = [];
            for (let index = 0; index < res2.data.myarray.length; index++) {
                const oneRef = res2.data.myarray[index];     
                var mydate = oneRef.first_super_date.split(".");
                mydata.push({
                    name: oneRef.name,
                    observerPoint: oneRef.observerRating[0][1]===0 ? 0 : (oneRef.observerRating[0][0] /oneRef.observerRating[0][1]),
                    fanPoint: oneRef.preRating[0][1]===0 ? 0 : (oneRef.preRating[0][0] /oneRef.preRating[0][1]),
                    experience: res5.data.currentYear - parseInt(mydate[2]),
                    ratio: 0
                })
            }
            var wConstant = parseFloat(res4.data.wConstant);
            var wExperience = parseFloat(res4.data.wExperience);
            var wFan = parseFloat(res4.data.wFan);
            var wObserver = parseFloat(res4.data.wObserver);
            for (let index = 0; index < mydata.length; index++) {
                const arrayelement = mydata[index];
                if (arrayelement.observerPoint === 0 && arrayelement.fanPoint === 0){
                    arrayelement.ratio = 0.00.toFixed(2);
                } else {
                    var total = (wConstant) + (arrayelement.observerPoint) * wObserver + (arrayelement.fanPoint) * wFan + (arrayelement.experience) * wExperience;
                    arrayelement.ratio = (total/20).toFixed(2);
                }
            }
            setAllMatchDetails(res1.data);
            setWeekReferee(res2.data);
            setStandingsData(res3.data);
            setCurrentYear(res5.data.currentYear);
            setRefArray(mydata);
            setLoading(true);
        })).catch(err => console.log(err));
    };

    var standingList = [];
    if (standingsData.length !== 0) {
        standingsData.forEach((item) => {
            var teamrank = item.rank;
            var teamname = item.team.name;
            var asciName = (c_images.find(({src})=>src === teamname)).id;
            var team = {
                rank: teamrank,
                name: teamname,
                asciname: asciName,
            }
            standingList.push(team);
        });
    }

    var rankingList = [];
    if (standingList.length !== 0) {
        allMatchDetails.forEach((element) => {
            var club1_asci = element.club1_info[0].asci_name;
            var club2_asci = element.club2_info[0].asci_name;
            var club1_name = element.club1_info[0].name;
            var club2_name = element.club2_info[0].name;

            var club1_rank = (standingList.find(({asciname})=>asciname === club1_asci)).rank;
            if(club1_asci === "fenerbahce" || club1_asci === "galatasaray" || club1_asci === "besiktas" || club1_asci === "basaksehir" || club1_asci === "trabzonspor") {
                club1_rank = club1_rank - 5;
            }
            
            var club2_rank = (standingList.find(({asciname})=>asciname ===club2_asci)).rank;
            if(club2_asci === "fenerbahce" || club2_asci === "galatasaray" || club2_asci === "besiktas" || club2_asci === "basaksehir" || club2_asci === "trabzonspor") {
                club2_rank = club2_rank - 5;
            }
            var matchID = element._id;
            var allData={
                club1_asci: club1_asci,
                club2_asci: club2_asci,
                club1: club1_name,
                club2: club2_name,
                match_id: matchID,
                totalrank: club1_rank + club2_rank
            }
            rankingList.push(allData);
        });
    }

    if (refArray.length !== 0) {
        refArray.sort(function(a, b) {
            if (a.ratio < b.ratio) {return 1;}
            if (a.ratio > b.ratio) {return -1;}
            return 0;
        });
        // console.log("Sorted Referees: ", refArray);
    }
    
    if (rankingList.length !== 0) {
        rankingList.sort(function(a, b){
            if (a.totalrank > b.totalrank) {return 1;}
            if (a.totalrank < b.totalrank) {return -1;}
            return 0;
        });
        // console.log("Sorted Matches: ", rankingList);
    }

    var resultList = [];
    var innerList = {refereeDetails: {}, matchDetails: {}};
    for (let i = 0; i < rankingList.length; i++) {
        innerList = {refereeDetails: refArray[i], matchDetails: rankingList[i]};
        resultList.push(innerList);
    }
    
    setFormData({...FormData, assignmentList: resultList});

    useEffect(() => {
        getAssignmentDetails();
    }, []);

    return(
        <div className="container">
            { loading ?
            <>
            <div className="row">
                { refArray && rankingList ?
                (rankingList.map((item, index) => {
                    return(<RefAssignBox key={index} refereeData={refArray[index]} matchData={rankingList[index]} idx={index}/>);
                }))
                :
                <></>
                }
            </div>
            </>
            :
            <div className="d-flex justify-content-center">
                <ReactBootstrap.Spinner animation="border"/>
            </div>
            }
        </div>
    )
};

export default AdminRefAssignPage;