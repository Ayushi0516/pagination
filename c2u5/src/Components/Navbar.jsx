import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

const Navbar = () => {
  const auth=useSelector(store=>store.AuthReducer.isAuth);
  return (
    <div data-testid="navbar" style={{display:"flex" ,justifyContent:"space-between"}}>
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "flex" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-testid="navbar-login-button" style={{backgroundColor:"black" ,color:"white"}}><Link to="/login">Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
