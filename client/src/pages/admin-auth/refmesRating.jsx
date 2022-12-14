import React from "react";
import axios from "axios";
import { useState } from "react";
function RefmesRatingPage(){
    const [observerweight,setobserverweight]=useState(0)
    const [errorMessage, setErrorMessage] = useState("");
    //setobserverweight(34.6)

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
             <h1 style={{textAlign: "center", color: "red"}}>REFMES Rating</h1>
             <div>
                <form onSubmit={handleSubmit}>
                <div>
                    <p>Observer Rating:</p>
                    <input onChange={(e)=>setobserverweight(e.target.value)}  placeholder={observerweight} type="number" className="btn-border input-style form-control"/>
                </div>
                <div>
                    <p>Give password to the observer:</p>
                    <input  placeholder="Password..." type="text" className="btn-border input-style form-control"/>
                </div>
                <div  style={{marginLeft:"150px",marginTop:"20px",marginBottom:"20px"}}>
                    <p className="errorMessage">{errorMessage}</p>
                    <button  type="submit" className="btn btn-block col-8 btn-success">Calculate</button>
                </div>
                </form>
             </div>
        </div>
    )
};
export default RefmesRatingPage;