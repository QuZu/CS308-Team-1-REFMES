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
import ProfilePage from "./pages/profile/profile";
import EditPage from "./pages/edit/editpage";
import UserEditPage from "./pages/edit/usernameedit";
import PassEditPage from "./pages/edit/passedit";
import RefPage from "./pages/single-referee/singleRefPage";
import PostMatchPage from "./pages/post-match/post-match";
import PreMatchPage from "./pages/pre-match/pre-match";
import AwardsPage from "./pages/awards/awards";
import WHighlightsPage from "./pages/weekly-highlights/weekly-highlights";
import MHighlightsPage from "./pages/monthly-highlights/monthly-highlights";
import SingleClubPage from "./pages/single-club/single-club";
import ClubsPage from "./pages/clubs/clubs";
import MatchesPage from "./pages/matches/matches";
import RefereesPage from "./pages/referees/referees";
import AdminPage from "./pages/admin/admin";
import AdminAuthPage from "./pages/admin-auth/admin-auth";
import AdminAddReferee from "./pages/admin-auth/addReferee";
import AdminSelectRefereeLanding from "./pages/admin-auth/selectref-landing";
import AdminAddObserver from "./pages/admin-auth/addObserver";

import AdminSelectReferee from "./pages/admin-auth/selectReferee";
import AdminUpdateReferee from "./pages/admin-auth/updateReferee";
import PostMatchCommentPage from "./pages/post-match/post-match-comment";
import StandingPage from "./pages/standings/standings";
import ObserverLoginPage from "./pages/observer/observerLogin";
import ObserverAuthPage from "./pages/observer-auth/observer-auth";
import ObserverRatingPage from "./pages/observer-auth/observerRating";


function App() {
  const [state] = useStore();
  const { user: currentUser } = state;
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        { !currentUser ?
        <>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-auth" element={<AdminAuthPage />} />
        <Route path="/admin-auth/addReferee" element={<AdminAddReferee />} />

        <Route path="/admin-auth/selectReferee" element={<AdminSelectRefereeLanding />} />
        <Route path="/admin-auth/addObserver" element={<AdminAddObserver />} />
        <Route path="/admin-auth/selectReferee" element={<AdminSelectReferee />} />
        <Route path="/observer" element={<ObserverLoginPage />} />
        <Route path="/observer-auth" element={<ObserverAuthPage />} />
        <Route path="/observer-auth/observerRating" element={<ObserverRatingPage />} />
        <Route path="/admin-auth/updateReferee" element={<AdminUpdateReferee />} />

        <Route path="*" element={<ErrorPage />} />
        </>
        :
        <>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={< EditPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit/password" element={<PassEditPage/>} />
        <Route path="/edit/username" element={<UserEditPage/>} />
        <Route path="/referee/:rUsername" element={<RefPage/>} />
        <Route path="/pre-match" element={<PreMatchPage />} />
        <Route path="/post-match" element={<PostMatchPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/highlights/weekly" element={<WHighlightsPage />} />
        <Route path="/highlights/monthly" element={<MHighlightsPage />} />
        <Route path="/club/:clubName" element={<SingleClubPage />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/referees" element={<RefereesPage />} />
        <Route path="/matches/:matchID" element={<PostMatchCommentPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/post-comment" element={<PostMatchCommentPage/>} />
        <Route path="/standings" element={<StandingPage/>} />
        </>
}
      </Routes>
    </React.Suspense>
  );
}

export default App;
