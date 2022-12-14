import React from "react";
import {useState,useEffect} from "react"
import axios from "axios";
import SortedMatches from "./match-standings.jsx";
import RefereeDisplayBox from "../../components/referee-display-importance/referee-display-box.jsx";

function RefereeDisplay({RefData,CurrentWeek}) {
  console.log("Refree:",RefData);
  var mydate=RefData[0].ref_info[0].first_super_date.split(".")
  var currentdate=new Date().getFullYear()
  console.log(currentdate-parseInt(mydate[2]));
    const[loading,setLoading] = useState(false);
    const[Refarray,setRefarray] = useState([]);

    const getallrefpoints = async()=>{
      let mydata=[]
      for (let index = 0; index < RefData.length; index++) {
        const element = RefData[index];
        let response=await axios.get(`${process.env.REACT_APP_URL}/api/refereesOfWeek/getpointsRefereesOfWeek/${element.referee_id}/${CurrentWeek}`)
        //console.log(response.data);
        var mydate=element.ref_info[0].first_super_date.split(".")
        mydata.push({name:element.ref_info[0].name, data:response.data,firstdate:parseInt(mydate[2]),sum:0,count:0,ratio:0})
      }
      for (let index = 0; index < mydata.length; index++) {
        const arrayelement = mydata[index];
        var totalsum=0;
        for (let index = 0; index < arrayelement.data.length; index++) {
          totalsum =totalsum+ arrayelement.data[index].rating;
        }
        arrayelement.sum=totalsum;
        arrayelement.count=arrayelement.data.length
        arrayelement.ratio=(totalsum/arrayelement.data.length).toFixed(2)

      }
      setRefarray(mydata)
      setLoading(true)

    };
    useEffect(() => {
      getallrefpoints();
    }, [])

if(Refarray)
{
  Refarray.sort(function(a, b){
    if(a.ratio < b.ratio) { return 1; }
    if(a.ratio > b.ratio) { return -1; }
    return 0;
  })
}
console.log("Dolu mu:",Refarray);

    return (
        <div>
        {loading ?
        <div className="mt-1">
            { Refarray? 
            (Refarray.map((item)=>{
                return(
                    <div key={item.name} className="match-importance-box-class">
                      <RefereeDisplayBox RefereeData={item}/>
                    </div>
                )
            }))
            :
            <p>Please wait</p>
            }
        </div>
        :
        <p>Loading...</p>
        }
      </div>
    );
  }
  export default RefereeDisplay;