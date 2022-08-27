import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import landingPageImg from '../../Resources/images/image.png'
import bgone from '../../Resources/images/Group 1.png'
import bgtwo from '../../Resources/images/Group 2.png'
import createAccount from '../../Resources/images/Layer 7 copy.png'
import Layer from '../../Resources/images/Layer 8.png'
import { darknessStatefu } from "../../Redux/darkness";
import darkIcon from "../../Resources/images/Group 37.png";
import lightIcon from "../../Resources/images/lightIcon.png";
import loginImg from "../../Resources/images/9004738_lock_security_padlock_secure_icon.png";
import menu from "../../Resources/images/Group 34.png";
import log from "../../Resources/images/728935_exit_left_logout_arrow_move_icon.png";
import money from "../../Resources/images/money_transfer.png";
import code from "../../Resources/images/299107_money_icon.png";
import exam from "../../Resources/images/examsIcon.png";
import Profile from "../../Resources/images/Profile.png";
import TecherIcon from "../../Resources/images/TecherIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import { login } from "../../Redux/Authorization";
export default function Home() {
  const dispatch = useDispatch();
  var { darkness } = useSelector((state) => state);
  const [loged, setLoged] = useState(false)
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const toggleDarkness = () => {
    dispatch(darknessStatefu(true));
  };
  const toggleLightess = () => {
    dispatch(darknessStatefu(false));
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate('/header')

  }
  return (
    <div className="header_container">

      <Container>

        <Row>

          <Col md={6}>
            <img src={bgone} alt="" className="bg_image_one" />

            <div className="position-absolute landingPageImg" style={{ top: "25%" }}>
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


              </div>
              <img src={menu} alt="" style={{
                width: "48px",
                height: "25px",
                marginTop: "10px",
                cursor: "pointer"
              }}

                onClick={() => setShowNav(!showNav)}
              />
            </div>


            <div className="text-center">
              <img src={Layer} alt="Layer" className="Layer" />

            </div>
            <p className="text-white fw-bold text-center fs-1">أ/ نادر جورج</p>
            <p className="text-mutes fw-bold text-center fs-5">

              أول منصة<span style={{ color: "red", margin: "0 5px" }}>متخصصة </span>لشرح المواد الفلسفية
            </p>
            <p className="fw-bold text-center fs-3" style={{ color: "#0C2FA0" }}>للثانوية العامة</p>
          </Col>
        </Row>
      </Container>
      <img src={bgtwo} alt="bgone" style={{
        width: "550px",
        position: "relative",
        bottom: "80px",
      }} className="bg_two" />
      {showNav &&
        <div className="nav">
          <Container>
            <Row>
              <Col md={2}>
                <div className="nav_link" onClick={logout}>
                  <p className="mb-0 ">

                    تسجيل الخروج
                  </p>
                  <img src={log} alt="logout" style={{ width: "24px" }} />

                </div>
              </Col>
              <Col md={2}>
                <Link to="/moneyTransfer">
                  <div className="nav_link">
                    <p className="mb-0 ">
                      تحويل اموال                </p>
                    <img src={money} alt="money" style={{ width: "24px" }} />

                  </div>

                </Link>
              </Col>
              <Col md={2}>
                <Link to="/code">
                  <div className="nav_link">
                    <p className="mb-0 ">
                      شحن الاكواد
                    </p>
                    <img src={code} alt="code" style={{ width: "24px" }} />

                  </div>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/exams">

                  <div className="nav_link">
                    <p className="mb-0 ">
                      امتحانات عامه                </p>
                    <img src={exam} alt="exam" style={{ width: "24px" }} />

                  </div>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/teachers">
                  <div className="nav_link">
                    <p className="mb-0 ">
                      المدرسين                </p>
                    <img src={TecherIcon} alt="TecherIcon" style={{ width: "24px" }} />

                  </div>
                </Link>
              </Col>
              <Col md={2}>
                <Link to="/profile">
                  <div className="nav_link">
                    <p className="mb-0 ">
                      الصفحه الشخصيه                </p>
                    <img src={Profile} alt="Profile" style={{ width: "24px" }} />

                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      }
    </div>
  )
}
