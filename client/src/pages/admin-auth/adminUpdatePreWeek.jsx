import React, { useState, useEffect } from "react";
import axios from "axios";
import "./adminUpdatePreWeek.css";
import AppNavBarSingle from "../../components/appnavbarsingle.jsx";
import AdminRefSelect from "../../components/adminRefSelect/adminRefSelect.jsx";
import AdminRefAssign from "../../components/adminRefAssign/adminRefAssign.jsx";
import AdminPreFinalSummary from "../../components/adminPreFinalSummary/adminPreFinalSummary.jsx";
import * as ReactBootstrap from "react-bootstrap";

function AdminUpdatePreWeekPage(){
    
    const [loading, setLoading] = useState(false);
    const [preWeekNo, setPreWeekNo] = useState(0);
    const [postWeekNo, setPostWeekNo] = useState(0);
    const [isValid, setIsValid] = useState(false);
    const [refData, setRefData] = useState({});
    const[page, setPage]=useState(0);
    const [formData,setFormData]=useState({
        weekReferee: [],
        decidedReferee:[],
        checkedCheckboxes:[],
        nextButton:true,
        prevButton:false
    });
    
    const getCurrentWeek = async() => {
        await axios.all([
            axios.get(`${process.env.REACT_APP_URL}/api/weeks/getPreWeek`),
            axios.get(`${process.env.REACT_APP_URL}/api/weeks/getPostWeek`),
            axios.get(`${process.env.REACT_APP_URL}/api/referees/getAllref`)
        ]).then(axios.spread((res1, res2, res3) => {
            setPreWeekNo(res1.data.week_no);
            setPostWeekNo(res2.data.week_no);
            if (res1.data.week_no - res2.data.week_no <= 2) {setIsValid(true);}
            setRefData(res3.data);
            setLoading(true);
        })).catch(err => console.log(err));
    };

    useEffect(() => {
        getCurrentWeek();
    }, []);

    const PageDisplay=()=>{
        if(page === 0) {
            return <AdminRefSelect currentWeek={preWeekNo} allData={refData} formData={formData} setFormData={setFormData}/>
        } else if (page === 1) {
            return <AdminRefAssign currentWeek={preWeekNo} allData={refData} formData={formData} setFormData={setFormData}/>
        } else {
            return <AdminPreFinalSummary currentWeek={preWeekNo} allData={refData} formData={formData} setFormData={setFormData}/>
        }
    }
   
    return(

        <div>
            <AppNavBarSingle/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Admin Update Pre Week</h1>
            </div>
            { loading ?
            <>
                { isValid ?
                <div style={{textAlign: "center"}}>
                    {/* <a>Pre-Week: {preWeekNo} Post-Week: {postWeekNo}</a> */}
                    {PageDisplay()}

                    <div className="footer" style={{marginBottom: "2rem"}}>
                        <button disabled={page === 0 || formData.prevButton} onClick={()=>{setPage((currPage)=>currPage-1)}}>Prev</button>
                        <button disabled={page === 3 || !formData.nextButton} onClick={()=>{setPage((currPage)=>currPage+1)}}>Next</button>
                    </div>
                </div>
                :
                <div style={{textAlign: "center"}}>
                    <a>Week values creates an inconsistency when performs this update, first update post-week, please!</a>
                </div>
                }
            </>
            :
            <div className="d-flex justify-content-center">
                <ReactBootstrap.Spinner animation="border"/>
            </div>
            }
        </div>

    );
}
export default AdminUpdatePreWeekPage;