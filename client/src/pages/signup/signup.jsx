import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import "../signup/signup.css";
import AppNavBarSingle from "../../components/appnavbarsingle.jsx"

const signUpSchema = z
  .object({
    username: z.string().min(1),
    fullName: z.string().min(1),
    email: z.string().email("Please enter a valid email"),
    fanOf: z.string().min(1),
    password: z.string().min(8, {message: "Password must be at least 8 character"}).regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*';."_)(+,/:>\]<=?@\\^`|[}{~-])/,
        {message: "Password must contain uppercase, lowercase, numeric and special character"}),
    passwordConfirm: z.string(),
    privacyAgreement: z.boolean().refine((val) => val, {message: "You have to accept privacy policy"}),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords are not the same",
    path: ["passwordConfirm"]
  });

function Signup() {
  const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver: zodResolver(signUpSchema), mode: "all"});
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = useCallback((data) => {
    const newUser = {
      username: data.username,
      full_name: data.fullName,
      email: data.email,
      password: data.password,
      fan_of: data.fanOf
    };
    //const app_url="http://localhost:5000"
    //console.log(process.env.REACT_APP_URL);
    axios
      .post(`${process.env.REACT_APP_URL}/api/users/signup`, newUser)
      .then((res) => {
        if (res.data.message) {
          setErrorMessage(res.data.message);
        } else if (res.status === 200) {
          setErrorMessage(`You created your account successfully, please login to use`);
          reset();
          navigate("/login");
        } else {
          setErrorMessage("Error! Please try again.");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        setErrorMessage("Error! Please try again.");
      });
  }, [reset, navigate]);

  return (
    <div className="fullscreen row justify-content-center align-items-center">
      <AppNavBarSingle/>
      <div className="col-10 col-sm-6 col-lg-4 justify-content-start">
        <div className="card p-1 mb-0">
          <div className="card-body">
            <div className="text-center">
              <h2 className="mt-2">
                <b>SIGN UP</b>
              </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <p className="errorMessage">{errorMessage}</p>

              <div className="mt-3 d-flex flex-column">
                <input {...register("username")} placeholder="Username" type="text" className="btn-border input-style form-control"/>
                <small className="align-self-start error-text">{errors.username?.message}</small>
              </div>

              <div className="mt-3 d-flex flex-column">
                <input {...register("fullName")} placeholder="Full Name" type="text" className="btn-border input-style form-control"/>
                <small className="align-self-start error-text">{errors.fullName?.message}</small>
              </div>

              <div className="mt-3 d-flex flex-column">
                <input {...register("email")} placeholder="E-mail" type="email" className="btn-border input-style form-control"/>
                <small className="align-self-start error-text">{errors.email?.message}</small>
              </div>

              <div className="mt-3 d-flex flex-column">
                <input {...register("fanOf")} placeholder="Football Club" type="text" className="btn-border input-style form-control"/>
                <small className="align-self-start error-text">{errors.fanOf?.message}</small>
              </div>

              <div className="mt-3 d-flex flex-column">
                <input {...register("password")} placeholder="Password" type="password" className="btn-border input-style form-control"/>
                <small className="align-self-start error-text">{errors.password?.message}</small>
              </div>

              <div className="mt-3 d-flex flex-column">
                <input {...register("passwordConfirm")} placeholder="Confirm Password" type="password" className="btn-border form-control input-style"/>
                <small className="align-self-start error-text">{errors.passwordConfirm?.message}</small>
              </div>

              <div className="mt-3 d-flex flex-row">
                <input {...register("privacyAgreement")} id="checkbox" type="checkbox" className="form-check-input"/>
                <small>I have read and accepted &nbsp;<a className="link-success" href="s">Privacy Policy</a></small>
              </div>

              <small className="align-self-start error-text">{errors.privacyAgreement?.message}</small>

              <div className="mt-5 row text-center justify-content-center">
                <div className="col-12">
                  <button type="submit" className="btn btn-block col-6 btn-success">SIGN UP</button>
                </div>
              </div>

              <div className="mt-2 row text-center justify-content-center">
                <div className="col-12">
                  <Link className="link-success" to="/login"><p>Already have an account?</p></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
  