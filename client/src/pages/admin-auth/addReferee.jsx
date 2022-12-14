import React from "react";
import "../admin-auth/addReferee.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function AdminAddReferee(){
  const [rname,Setname] = useState("");
  const [username,Setusername] = useState("");
  const [birthplace,Setbirthplace] = useState("");
  const [fifadate,Setfifadate] = useState("");
  const [bio,Setbio] = useState("");
  const [birthdate,Setbirthdate] = useState("");
  const [debutdate,Setdebutdate] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
        console.log(rname);
        const newReferee = {
          r_username: username,
          name: rname,
          biography: bio,
          birth_date: birthdate,
          birth_place: birthplace,
          fifa_date: fifadate,
          first_super_date: debutdate,
          total_rating: 0,
          rating_count: 0,
          totalMatch: 0,
          yellowCard: 0,
          avgYellowCard: 0.0,
          yellowToRed: 0,
          redCard: 0,
          avgRedCard: 0.0,
          penalty: 0,
          avgPenalty: 0.0
        };
        console.log(newReferee);
        if(!newReferee.r_username || !newReferee.name || !newReferee.biography || !newReferee.birth_date || !newReferee.birth_place || !newReferee.fifa_date || !newReferee.first_super_date){
          setErrorMessage("Please, enter all fields!");
        }
        await axios.post(`${process.env.REACT_APP_URL}/api/admin/addReferee`,newReferee)
        .then(res =>{
            console.log(res.data);

        }).catch(err=>console.log(err));
    

    }
    //const app_url="http://localhost:5000"
    //console.log(process.env.REACT_APP_URL);
    return(
        <div>
            <h1 style={{textAlign: "center", color: "red"}}>ADD REFEREE PAGE</h1>
            <div>
                <h2 style={{textAlign:"center"}}>FILL THE FOLLOWING INFORMATION ABOUT THE NEW REFEREE:</h2>
                <form className="form_addReferee" onSubmit={handleSubmit}>
                <div>
                <p className="p_addReferee">Enter the name of the referee:</p>
                <input onChange={(e)=>Setname(e.target.value)}  placeholder="Name" type="text" className="btn-border input-style form-control"/>
                 </div>
              <div>
                <p className="p_addReferee">Enter the username of the referee:</p>
                <input onChange={(e)=>Setusername(e.target.value)}  placeholder="Username" type="text" className="btn-border input-style form-control"/>
              </div>
              <div>
                <p className="p_addReferee">Enter the birth date of the referee:</p>
                <input onChange={(e)=>Setbirthdate(e.target.value)}  placeholder="Birth Date" type="text" className="btn-border input-style form-control"/>
              </div>
                 <div>
                <p className="p_addReferee">Enter the birth place of the referee:</p>
                <input onChange={(e)=>Setbirthplace(e.target.value)}  placeholder="Birth Place" type="text" className="btn-border input-style form-control"/>
                </div>
                <div>
                <p className="p_addReferee">Enter the date of the first match that the referee ruled:</p>
                <input onChange={(e)=>Setdebutdate(e.target.value)}  placeholder="Debut date" type="text" className="btn-border input-style form-control"/>
              </div>
              <div>
                <p className="p_addReferee">Enter the date when the referee get FIFA Cockade:</p>
                <input onChange={(e)=>Setfifadate(e.target.value)}  placeholder="FIFA Cockade date" type="text" className="btn-border input-style form-control"/>
              </div>
              <div>
                <p className="p_addReferee">Provide a short biography of the referee:</p>
                <textarea onChange={(e)=>Setbio(e.target.value)} style={{width: "100%", minHeight:"80px"}} placeholder="Biography..."></textarea>
              </div>
              <div  style={{marginLeft:"150px",marginTop:"20px",marginBottom:"20px"}}>
              <p className="errorMessage">{errorMessage}</p>
              <button  type="submit" className="btn btn-block col-8 btn-success">ADD REFEREE</button>
              </div>
                </form>
            </div>
        </div>
    )
};
export default AdminAddReferee;