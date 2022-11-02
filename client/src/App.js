import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from "./pages/landing/landing.jsx";
import Signup from "./pages/signup/signup";
import { useStore } from "./store/store";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import ErrorPage from "./pages/error/error";
import MyProfile from "./pages/profile/profile";
import EditPage from "./pages/edit/editpage"
import UserEditPage from "./pages/edit/usernameedit"
import PassEditPage from "./pages/edit/passedit"
function App() {
  const [state] = useStore();
  const { user: currentUser } = state;
  console.log("state")
  console.log(state)
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        { !currentUser ?
        <>
        <Route
        path="/"
        element={<Landing />}
        />
        <Route
        path="/landing"
        element={<Landing />}
        />
        <Route
        path="/login"
        element={<Login />}
        />
        <Route
        path="/signup"
        element={<Signup />}
        />
       <Route
        path="*"
        element={<ErrorPage />}
        />
        </>
        :
        <>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route
          path="/edit"
          element={< EditPage/>}
        />
        <Route
          path="/home"
          element={<Landing/>}
        />
        <Route
        path="/myprofile"
        element={<MyProfile />}
        />
        <Route
        path="/editpass"
        element={<PassEditPage/>}
        />
        <Route
        path="/editusername"
        element={<UserEditPage/>}
        />
        <Route
        path="*"
        element={<ErrorPage />}
        />
        </>
}
      </Routes>
    </React.Suspense>
  );
}

export default App;
