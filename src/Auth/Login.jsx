import { useState, useEffect } from "react";
import "./signup.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Pages/loading/Loading";

import logo from "../assets/IMG-20231031-WA0001.jpg";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("sad");

    const formData = {
      email: form.email,
      password: form.password,
    };

    try {
      const response = await axios.post(
        "https://c534-31-9-181-84.ngrok-free.app/api/v1/auth/login/",
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        setIsLoading(false);
        navigate("/");
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Error signing up");
    }
  };

  //change States
  function handleOnChange(e) {
    setForm({ [e.target.name]: e.target.value });
  }
  return (
    <div className="page">
      {isLoading && <Loading />}
      <img src={logo} className="img" />
      <h1 className="form-title">Login to Your Account</h1>
      <div className="form-wrapper-login">
        {error && <p style={{ color: "red", fontSize: "24px" }}>{error}</p>}

        <form onSubmit={handleSubmit} className="formSign">
          <input
            value={form.email}
            onChange={handleOnChange}
            type="email"
            placeholder="Enter your Email..."
          />
          <input
            value={form.password}
            onChange={handleOnChange}
            type="password"
            placeholder="Set a Strong password..."
          />

          <button className="btn btn-success ">Login</button>
        </form>

        <div className="form-footer">
          you don't have an Account?
          <NavLink to={"/sign-up"} replace={true}>
            Register Now
          </NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
