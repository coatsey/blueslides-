import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Blueslides <i className="fas fa-crosshairs"></i>utdoors
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="/hunting"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hunting
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/fishing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Fishing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/guns"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Guns
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ammo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Ammo
              </Link>
            </li>

            {/* <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
