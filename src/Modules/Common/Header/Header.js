import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import landingPageImg from "../../../Resources/images/image.png";
import bgone from "../../../Resources/images/Group 1.png";
import bgtwo from "../../../Resources/images/Group 2.png";
import createAccount from "../../../Resources/images/Layer 7 copy.png";
import Layer from "../../../Resources/images/Layer 8.png";
import { darknessStatefu } from "../../../Redux/darkness";
import darkIcon from "../../../Resources/images/Group 37.png";
import lightIcon from "../../../Resources/images/lightIcon.png";
import loginImg from "../../../Resources/images/9004738_lock_security_padlock_secure_icon.png";

import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const dispatch = useDispatch();
  var { darkness } = useSelector((state) => state);
  const [loged, setLoged] = useState(false);
  console.log(darkness.darkness);
  const toggleDarkness = () => {
    dispatch(darknessStatefu(true));
  };
  const toggleLightess = () => {
    dispatch(darknessStatefu(false));
  };
  return (
    <div className="header_container">
      <Container>
        <Row>
          <Col md={6}>
            <img src={bgone} alt="" className="bg_image_one" />

            <div
              className="position-absolute landingPageImg"
              style={{ top: "25%" }}
            >
              <img src={landingPageImg} alt="" className="landingPage_img" />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex">
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

            <div className="text-center">
              <img src={Layer} alt="Layer" className="Layer" />
            </div>
            <p className="text-white fw-bold text-center fs-1">أ/ نادر جورج</p>
            <p className="text-mutes fw-bold text-center fs-5">
              أول منصة
              <span style={{ color: "red", margin: "0 5px" }}>متخصصة </span>لشرح
              المواد الفلسفية
            </p>
            <p
              className="fw-bold text-center fs-3"
              style={{ color: "#0C2FA0" }}
            >
              للثانوية العامة
            </p>
          </Col>
        </Row>
      </Container>
      <img
        src={bgtwo}
        alt="bgone"
        style={{
          width: "550px",
          position: "relative",
          bottom: "80px",
        }}
        className="bg_two"
      />
    </div>
  );
}

export default Header;
