import { useNavigate } from "react-router";
import AppNavBar from "../../components/appnavbar.jsx"
import { userLogout } from "../../store/userreducer";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { useStore } from "../../store/store";
import "../edit/edit.css";

function Edit(){
    const [state, dispatch] = useStore();
    const navigate = useNavigate();
    const {user:currentUser} = state;
    const {user:value}=currentUser
    const [errorMessage, setErrorMessage] = useState("");
    const goTopass = (e) => {
        navigate("/edit/password")
      }

    const goTousername = (e) => {
        navigate("/edit/username")
      }

    const deleteUser = useCallback((data) => {
      axios
        .post(`${process.env.REACT_APP_URL}/api/users/delete`,value)
        .then((res) => {
          if (res.status === 200 && res.data.message) {
            setErrorMessage(res.data.message);
          } else if (res.status === 200) {
            setErrorMessage("You delete account succesfully");
            
            dispatch(userLogout());
            navigate("/landing");
          } else {
            setErrorMessage("Error! Please try again.");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
          setErrorMessage("Error! Please try again.");
        });
    }, [navigate, dispatch]);

    return(
      <div className="container">
        <AppNavBar/>
        <div className="edit_buttons_main">
          <div className="card p-1 mb-0 card-shadow change-password">
            <div className="card-body">
                <div className="row edit_buttons_container">
                  <div className="edit_buttons_inner"><button onClick = {goTopass} type='submit' className="col-6 btn btn-block btn-success">
                    CHANGE PASSWORD</button></div>
                  <div className="edit_buttons_inner"><button onClick = {goTousername} type='submit' className="col-6 btn btn-block btn-warning">
                    CHANGE USERNAME</button></div>
                  <div className="edit_buttons_inner"><button onClick = {deleteUser} type='submit' className="col-6 btn btn-block btn-danger">
                    DELETE USER</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Edit