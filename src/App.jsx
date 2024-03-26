// import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Auth/SignUp";
import HomePage from "./components/homePage/HomePage";
import Details from "./Pages/Details/Details";
import Rent from "./Pages/Rent/Rent";
import Login from "./Auth/Login";
import "./App.css";
import UserProfile from "./features/user/UserProfile";
import VerifyEmail from "./Auth/VerifyEmail";
import Dashboard from "./Pages/dashboard/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />

        {/* Auth */}
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/verify"} element={<VerifyEmail />} />

        <Route path={"/details"} element={<Details />} />
        <Route path={"/rent"} element={<Rent />} />
        <Route path={"/profile"} element={<UserProfile />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
