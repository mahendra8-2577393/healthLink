import React from "react";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-around">
      <div className="flex gap-10">
      <div>
      <Link to="/" className="font-extrabold text-2xl mb-5">
          {/* <img src={logo} alt="Logo" width={160} height={32} loading="lazy" /> */}
          Logo
        </Link>
      </div>

        <nav className="mt-1">
          <ul className="flex gap-3">
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
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>Sign Up</button>
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
