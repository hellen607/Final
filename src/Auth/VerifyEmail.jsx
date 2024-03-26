import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../Pages/loading/Loading";
import logo from "../assets/IMG-20231031-WA0001.jpg";

function VerifyEmail() {
  //   const [form, setForm] = useState({
  //     email: "",
  //     password: "",
  //   });
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  //   const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    // console.log("sad");

    // const formData = {
    //   email,
    //   otp,
    // };

    try {
      const response = await axios.post(
        "https://c534-31-9-181-84.ngrok-free.app/api/v1/auth/verify-email/",
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      const data = await response.json();
      if (data.success) {
        setIsLoading(false);
        navigate("/login");
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Error log in");
    }
  };

  //change States
  //   function handleOnChange(e) {
  //     setForm({ [e.target.name]: e.target.value });
  //   <h1 className="form-title">Login to Your Account</h1>
  //   }
  return (
    <div className="page">
      {isLoading && <Loading />}
      <img src={logo} className="img mb-5" />
      <div className="form-wrapper-login">
        {error && <p style={{ color: "red", fontSize: "24px" }}>{error}</p>}

        <form onSubmit={handleVerify} className="formSign">
          <h4 className=" text-center fs-3"> Enter Your Code Here...</h4>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your Email..."
          />
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="XXXXXX"
          />
          <button className="btn btn-success ">Verify</button>
        </form>

        <div className="form-footer">
          you dont have an Account?
          <NavLink to={"/sign-up"} replace={true}>
            Register Now
          </NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default VerifyEmail;
