import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import darklogo from "../../../Resources/images/logo.jpeg";
import lightLogo from "../../../Resources/images/lightLogo.png";
import darkIcon from "../../../Resources/images/Group 37.png";
import lightIcon from "../../../Resources/images/lightIcon.png";
import loginIcon from "../../../Resources/images/Group 9.png";
import RegisterationIcon from "../../../Resources/images/9004738_lock_security_padlock_secure_icon.png";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { darknessStatefu } from "../../../Redux/darkness";
import createAccount from "../../../Resources/images/Layer 7 copy.png";
import loginImg from "../../../Resources/images/9004738_lock_security_padlock_secure_icon.png";

import { Link } from "react-router-dom";
function NavbarContainer() {
  const dispatch = useDispatch();
  var { darkness } = useSelector((state) => state);
  const [loged, setLoged] = useState(true)
  const toggleDarkness = () => {
    dispatch(darknessStatefu(true));
  };
  const toggleLightess = () => {
    dispatch(darknessStatefu(false));
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/home" className="d-flex">
          <img
            src={darkness.darkness ? lightLogo : darklogo}
            alt=""
            style={{ width: "50px" }}
          />
        </Navbar.Brand>
        <div className=" pt-2 mx-2">
          {darkness.darkness ? (
            <img
              src={lightIcon}
              alt=""
              className="darkIcon"
              onClick={toggleLightess}
            />
          ) : (
            <img
              src={darkIcon}
              alt=""
              className="darkIcon"
              onClick={toggleDarkness}
            />
          )}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className="justify-content-end">
          <div className="d-flex">
          <div className={loged&&"d-none"}>
          <a href="/login" className="d-flex">
              <div
                style={
                  darkness.darkness
                    ? { color: "#707070", fontSize: 18 }
                    : { color: "#fff", fontSize: 18 }
                }
                className="mt-2"
              >
                تسجيل <span style={{ color: "#EFCC00" }}>الدخول</span>
              </div>

            <div className="login_in_img_container mx-2">
              <img src={RegisterationIcon} alt="" />
            </div>
            </a>
          </div>




            <div className=" ms-5">
              <a href="/registeration" className="d-flex">
                <div
                  style={
                    darkness.darkness
                      ? { color: "#707070", fontSize: 18 }
                      : { color: "#fff", fontSize: 18 }
                  }
                  className={loged?"mt-2 d-none":"mt-2"}
                >
                  
                  انشاء <span style={{ color: "#383CAA" }}>حساب</span>
                </div>
                <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
            
                <div
                  style={
                    darkness.darkness
                      ? { color: "#707070", fontSize: 18 }
                      : { color: "#fff", fontSize: 18 }
                  }
                  className={loged ? "mt-2 d-none d-flex" : "mt-2 d-flex"}
                >
                  <Link to="/login" className="d-flex text-white">
                    <p className={darkness.darkness?"mb-0 mt-3 mx-2 login_box d-flex text-muted":"mb-0 mt-3 mx-2 login_box d-flex"}>
                      {" "}
                      <span style={{ color: "#EFCC00" }}>الدخول</span> تسجيل
                    </p>
                    <img src={loginImg} alt="loginImg" className="loginImg" />
                  </Link>
                </div>
              </div>
              <div
                style={
                  darkness.darkness
                    ? { color: "#707070", fontSize: 18 }
                    : { color: "#fff", fontSize: 18 }
                }
                className={loged ? "mt-2 d-none d-flex" : "mt-2 d-flex"}
              >
                <Link to="/registeration" className="d-flex text-white">
                  <p className={darkness.darkness?"mb-0 mt-3 mx-2 create_box text-muted":"mb-0 mt-3 mx-2 create_box"}>
                    {" "}
                    انشاء <span style={{ color: "#383CAA" }}>حساب</span>
                  </p>
                  <img
                    src={createAccount}
                    alt="createAccount"
                    className="createAccount"
                  />
                </Link>
              </div>
            </div>
              </a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Container>
    //   <nav className="navbar navbar-expand-lg pt-4">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">
    //         <img src={logo} alt="" style={{ width: "50px" }} />
    //       </a>
    //       <div
    //         className="darkness_container d-flex justify-content-around pt-2"
    //         onClick={toggleDarkness}
    //       >
    //         <img src={darkIcon1} alt="" className="darkIcon" />
    //         <img src={darkIcon2} alt="" className="darkIcon" />
    //       </div>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div
    //         className="collapse navbar-collapse d-flex justify-content-end"
    //         id="navbarSupportedContent"
    //       >
    //         <form className="d-flex" role="search">
    //           <div className="d-flex">
    //             <div className="d-flex">
    //               <div style={{ color: "#fff", fontSize: 18 }} className="mt-2">
    //                 تسجيل <span style={{ color: "#EFCC00" }}>الدخول</span>
    //               </div>
    //               <div className="login_in_img_container mx-2">
    //                 <img src={RegisterationIcon} alt="" />
    //               </div>
    //             </div>
    //             <div className="d-flex mx-5">
    //               <div style={{ color: "#fff", fontSize: 18 }} className="mt-2">
    //                 انشاء <span style={{ color: "#383CAA" }}>حساب</span>
    //               </div>
    //               <div className="login_in_img_container mx-2">
    //                 <img src={loginIcon} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    // </Container>
  );
}

export default NavbarContainer;
