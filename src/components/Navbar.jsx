import React from "react";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
//import Button1 from "./Button1";
import Button2 from "./Button2";
import Button1 from "./Button1";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="w-11/12 mx-auto flex justify-between gap items-center p-2">
      <div className="flex gap-11">
      <div>
      <Link to="/" className="font-extrabold text-2xl mb-5 ">
          {/* <img src={logo} alt="Logo" width={160} height={32} loading="lazy" /> */}
          Logo
        </Link>
      </div>

        <nav className="mt-1">
          <ul className="flex gap-5">
            <li>
              <Link to="/insurance">Insurance Plans</Link>
            </li>
            <li>
              <Link to="/claims">Claims</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/more">More</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex ml-5 mr-3 gap-3 mt-1">
        {!isLoggedIn && (
          <Link to="/login">
            {<Button1 btn1="Login"/>}
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            {<Button2 btn2="Sign Up"/>}
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
