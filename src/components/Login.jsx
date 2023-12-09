import React from "react";
import { useState } from "react";
import Home from "./Home"
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  const [emailOrMobile, setEmailOrMobile] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault()
    setEmailOrMobile(e.target.value);
  };

  const handleNextClick = () => {
    // Logic to handle the next button click
    navigate("/");
  };

  const handleSignUpClick = () => {
    // Logic to handle the sign-up button click
    console.log("Sign Up button clicked");
  };

  return (
    <div className="app">
      <div className="login-container">
        <h1 className="text-4xl">HealthLink</h1>
         <form>
         <input
          required
          type="text"
          placeholder="Email or Mobile number"
          value={emailOrMobile}
          onChange={handleInputChange}
        />
        <button onClick={handleNextClick}>Next</button>
        <div className="separator">or</div>
        <button onClick={handleSignUpClick}>Sign Up</button>
         </form>
        
          <div className="language-selector">
          <button>
            <span role="img" aria-label="flag">
              🇮🇳
            </span>{" "}
            English
          </button>
          <button>Hindi</button>
          <button>Français</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
