import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import "./Navbar.css";

// NavLink adds "active" to className when path matches.

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const links = [<BrandLink key="/" to="/" />];

  if (isLoggedIn) {
    links.push(
      <NavLink style={{fontFamily : "Arvo, serif"}}key="profile" className="nav-item" to="/profile">
        Notes
      </NavLink>
    );
    // links.push(
    //   <span key="lougout" className="nav-item" onClick={logout}>
    //     Logout
    //   </span>
      

    //);
    links.push(
      <NavLink  style={{fontFamily : "Arvo, serif"}} key="factbook" className="nav-item" to="/factbook">
        Factbook
      </NavLink>
    );
    links.push(
      <NavLink style={{fontFamily : "Arvo, serif"}} key="quizpage" className="nav-item" to="/quiz">
        Quiz
      </NavLink>

    );
    links.push(
      <span style={{fontFamily : "Arvo, serif"}}key="lougout" className="nav-item" onClick={logout}>
        Logout
      </span>
    );
    
  } else {
    links.push(
      <NavLink style={{fontFamily : "Arvo, serif"}}key="signup" className="nav-item" to="/signup">
        Sign Up
      </NavLink>
    );
    links.push(
      <NavLink style={{fontFamily : "Arvo, serif"}}key="login" className="nav-item" to="/login">
        Login
      </NavLink>
    );
  }
  return <nav className="Navbar">{links}</nav>;
}

function BrandLink(props) {
  return (
    <NavLink style={{fontFamily : "Arvo, serif"}} className="nav-item brand" exact {...props}>
      OURstory
    </NavLink>
  );
}

export default Navbar;
