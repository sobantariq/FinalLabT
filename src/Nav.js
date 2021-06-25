import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from './assets/logo.png'
import "./Nav.css";

function Nav({ isCurrentPackage }) {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="navContents">
        <img
          onClick={() =>
            isCurrentPackage
              ? history.push("/")
              : history.push("/profile", alert("⚠️Register "))
          }
          className="navLogo"
          src={logo}
          alt="Logo"
        />
        <button className="navButton">Sign Out</button>
      </div>
    </div>
  );
}

export default Nav;
