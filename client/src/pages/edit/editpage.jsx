import { useNavigate } from "react-router";
import AppNavBar from "../../components/appnavbar.jsx"

function Edit(){
    const navigate = useNavigate();
    const goTopass = (e) => {
        navigate("/editpass")
      }
    const goTousername = (e) => {
        navigate("/editusername")
      }
    return(
      <div className="container">
        <AppNavBar/>
        <div className="card col-9 align-self-center p-1 mb-0 mt-4 change-password">
          <div className="card-body">
            <div className="text-center">
              <div className="mt-5 row text-center justify-content-center">
                <button
                    onClick = {goTopass}
                    type='submit'
                    style={{marginTop:"10px"}}
                    className="col-6 btn btn-block btn-success"
                >
                      CHANGE PASSWORD
                </button>
                <button
                    onClick = {goTousername}
                    type='submit'
                    style={{marginTop:"10px"}}
                    className="col-6 btn btn-block btn-warning"
                >
                      CHANGE USERNAME
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
export default Edit