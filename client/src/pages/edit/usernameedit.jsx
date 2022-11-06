import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../../store/store";
import { userLogin } from "../../store/userreducer";
import AppNavBar from "../../components/appnavbar.jsx"

function UsernameEdit(){

    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const {user:currentUser} = state;
    var [errorMessage, setErrorMessage] = useState("");
    var [newname,Setname]=useState("")
    var [confirmname,Setconfirmname]=useState("")

      const handleSubmit=(e)=>{
        e.preventDefault();
        if(newname==="")
            newname=currentUser.user.name
        if(confirmname==="")
            confirmname=currentUser.user.name
        const UserUpdate={
            id: currentUser.user.id,
            name: newname,
            email: currentUser.user.email
        }
        axios.post(`${process.env.REACT_APP_URL}/api/users/updatesetting`,UserUpdate)
        .then((res) =>{
            if (res.status === 200 && res.data.message) {
                setErrorMessage(res.data.message);
              } else if (res.status === 200) {
                setErrorMessage("You update account succesfully");
                
                dispatch(userLogin({user:UserUpdate}));
                //navigate("/landing");
              } else {
                setErrorMessage("Error! Please try again.");
              }
        })

        }
        return(
            <div className="container">
              <AppNavBar/>
              <div className="edit_buttons_main">
                <div className="card col-9 align-self-center p-1 mb-0 mt-4 change-password">
                  <div className="card-body">
                    <div className="text-center">
                      <h2 className="mt-2 mb-3">
                        <b>CHANGE USERNAME</b>
                      </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="errorMessage">{errorMessage}</p>
        
                      <div className="mt-3 d-flex flex-column">
                          <label htmlFor="name">New Name</label>
                        <input
                          value={newname}
                          onChange={(e)=>Setname(e.target.value)}
                          name="name"
                          className="btn-border input-style form-control"
                          placeholder="New Username"
                          type="text"
                        >
                        </input>
                      </div>
                      <div className="mt-3 d-flex flex-column">
                          <label htmlFor="confirmname">Confirm Name</label>
                        <input
                          value={confirmname}
                          name="confirmname"
                          onChange={(e)=>Setconfirmname(e.target.value)}
                          className="btn-border input-style form-control"
                          placeholder="Confirm username"
                          type="text"
        
                        >
                        </input>
                      </div>
        
                      <div className="mt-5 row text-center justify-content-center">
                        <button
                          type='submit'
                          className="col-6 btn btn-block btn-success"
                        >
                              CHANGE USERNAME
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        );
      }
export default UsernameEdit