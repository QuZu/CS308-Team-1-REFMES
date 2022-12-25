import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useStore } from "../../store/store";
import AppNavBarSingle from "../../components/appnavbarsingle.jsx"
import axios from "axios";

const ForgotPasswordSchema = z
  .object({
    email: z.string().email("Please enter a valid email")
  });

function ResetPassword() {

  const {register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(ForgotPasswordSchema), mode: "all",});
  const [, dispatch] = useStore();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = useCallback((data) => {
    const user = {
      email: data.email,
    };



    // axios
    // .post(`${process.env.REACT_APP_URL}/api/users/observerLogin`,user)
    // .then(res => {

    //     console.log("response", res);

    // })

    })
//     if(user.password === "CS308Team1admin"){
//         setErrorMessage("You logged in succesfully");
//         navigate("/admin-auth");
//     }
//     else{setErrorMessage("Error! Please try again.");}
//   }, [navigate, dispatch]);
  
  return (
    <div className="fullscreen row justify-content-center align-items-center">
      <AppNavBarSingle/>
      <div className="col-10 col-sm-6 col-lg-4 justify-content-start">
        <div className="card p-1 mb-0 card-shadow">
          <div className="card-body">
            <div className="text-center">
              <h2 className="mt-2 mb-3">
                <b>Reset Password</b>
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="errorMessage">{errorMessage}</p>
              <div className="mt-3 d-flex flex-column">
                <input {...register("email")} placeholder="Email" type="email" className="btn-border input-style form-control"/>
                <small className="align-self-start error-text">{errors.email?.message}</small>
              </div>

              <div className="mt-5 row text-center justify-content-center">
                <button type="submit" className="col-6 btn btn-block btn-success">Request New Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
);
}

export default ResetPassword;
