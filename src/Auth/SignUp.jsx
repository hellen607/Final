// import axios from "axios";
import { useState, useEffect } from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Pages/loading/Loading";

import logo from "../assets/IMG-20231031-WA0001.jpg";
const SignUp = () => {
  // const [form, setForm] = useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   password: "",
  //   password2: "",
  // });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [first_name, setfirst_name] = useState("");

  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("sad");

    // const formData = {
    //   email: form.email,
    //   first_name: form.first_name,
    //   last_name: form.last_name,
    //   password: form.password,
    //   password2: form.password2,
    // };

    try {
      const response = await axios.post(
        "https://c534-31-9-181-84.ngrok-free.app/api/v1/auth/register/",
        // formData,
        {
          email,
          first_name,
          last_name,
          password,
          password2,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      // const data = await response.json();
      if (response.status === 201) {
        setIsLoading(false);
        navigate("/verify");
      } else {
        setError(response.error);
      }
    } catch (err) {
      console.error(err);
      setError("Error signing up");
    }
  };
  // useEffect(() => {
  //   // if (password != confirmPassword) {
  //   //   setError("passwards not match");
  //   // }
  // }, [error]);

  // useEffect(() => {
  //   if (isSubmitted) {
  //     setUsername("");
  //     setEmail("");
  //     setPassword("");
  //     // setConfirmPassword("");
  //     setError("");
  //     setIsSubmitted(false);
  //   }
  // }, [isSubmitted]);

  //change States
  // function handleOnChange(e) {
  //   setForm({ [e.target.name]: e.target.value });
  // }
  return (
    <div className="page">
      {isLoading && <Loading />}
      <img src={logo} className="img" />
      <h1 className="form-title">Create a New Account</h1>
      <div className="form-wrapper">
        {error && <p style={{ color: "red", fontSize: "24px" }}>{error}</p>}

        <form onSubmit={handleSubmit} className="formSign">
          <input
            value={first_name}
            onChange={(e) => setfirst_name(e.target.value)}
            type="text"
            placeholder="Enter your First Name..."
          />
          <input
            value={last_name}
            onChange={(e) => setlast_name(e.target.value)}
            type="text"
            placeholder="Enter your last Name..."
          />
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Enter your Email..."
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="Set a Strong password..."
          />
          <input
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
            type="password"
            placeholder="enter your password again..."
          />

          <button className="btn btn-success ">Register</button>
        </form>

        <div className="form-footer">
          Already have an account?{" "}
          <NavLink to={"/login"} replace={true}>
            login
          </NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignUp;
