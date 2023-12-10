import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
const Signup = () => {

   const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  // const[showPassword,setShowPassword]=useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const navigatefunc = ()=>
  {
    navigate("/");
  }

  return (
    <div className="signup">
      <div className="absloute w-5/12 h-5/12 bg-slate-700 mx-auto flex flex-col justify-center items-center">
        <h1>HealthLink</h1>
        <form>
          <label>
            <p>
              Name<sup>*</sup>{" "}
            </p>
            <input
             className="btn-input"
              required
              type="text"
              value={formData.name}
              onChange={changeHandler}
              placeholder="First name and Last name"
              name="name"
            />
          </label>
          <label>
            <p>
              Mobile Number<sup>*</sup>{" "}
            </p>
            <input
             className="btn-input"
              required
              type="text"
              value={formData.number}
              onChange={changeHandler}
              placeholder="+91 000 000 0000"
              name="number"
            />
          </label>
          <label>
            <p>
              Email Id<sup>*</sup>{" "}
            </p>
            <input
             className="btn-input"
              required
              type="eamil"
              value={formData.email}
              onChange={changeHandler}
              placeholder="mahi@gmail.com"
              name="email"
            />
          </label>
          <button onClick={navigatefunc}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
