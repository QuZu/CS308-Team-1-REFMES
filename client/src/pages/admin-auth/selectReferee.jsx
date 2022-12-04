import React, { useEffect, useState } from "react";
import axios from "axios";
import RefCard from "../../components/refbar/refcard";
import "../admin-auth/selectReferee.css";
function AdminSelectReferee(){
    const [allData, setallData] = useState({});
  const[loading,setLoading] = useState(false);

  const getAllRef = async()=>{
    await axios.get(`${process.env.REACT_APP_URL}/api/referees/getAllref`).then(res=>{
      setallData(res.data);
      setLoading(true);
  
    }).catch(err => console.log(err))
  };
  useEffect(() => {
    getAllRef();
  }, [])
    console.log(allData);
    function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name){
        return 1;
      }
      return 0;
    }
  if(loading)
  {
    allData.sort(compare);
  }
    
    return(
        <div>
             <h1 className="selectRefh1"> SELECT THE REFEREES OF THE WEEK 14: </h1>
             <form className="selectRefform">
             <div className="mt-3 container">
                <div className="row">
             { allData ?
            (allData.length > 0 ?
              allData.map((item) => {
          

                return(
                  <div key={item.r_username} className="col-xl-3 col-sm-6 mb-5">
                    <label>
                        <input type="checkbox"/> <RefCard r_username={item.r_username} Refname={item.name}></RefCard>
                    </label>
                  </div>

                );
              }) :<p>No Referee yet !!!</p>)            :
            <p>Loading...</p>
          }
                </div>
            </div>
            <label>
            <button  style={{marginLeft: "500px"}} type="submit" className="btn btn-block col-8 btn-success">CONFIRM THE LIST</button>
            </label>
          </form>
        </div>
    )
};
export default AdminSelectReferee;