import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import Navbar from "../Common/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Authorization";

function Login() {
  var { darkness } = useSelector((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(password);
  console.log(email);
  const submbit = (e) => {
    e.preventDefault();
    axios
      .post("https://pld-mh-h-ld-kh-kn.space/api/v1/identity/Login", {
        Email: email,
        Password: password,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          dispatch(login(res.data));

          navigate("/");
        }
      })
      .catch((err) => {
        setError(err.response.data.errors[0]);
      });
  };
  return (
    <div className="login_container">
      <Navbar />

      <Container>
        {error && (
          <div class="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}
        <p
          className={darkness.darkness ? "text-muted mt-3" : "text-white mt-3"}
        >
          تسجيل <span style={{ color: "#F27E0A" }}>الدخول </span>
        </p>
        <p
          className={darkness.darkness ? "text-muted mb-5" : "text-white mb-5"}
        >
          اكتب رقم الهاتف وكلمه السر المسجل بها من قبل{" "}
        </p>
        <form>
          <Container>
            <Row className="justify-contant-end">
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    <input
                      placeholder="كلمه السر"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="password"
                      onChange={(text) => {
                        setPassword(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      placeholder="البريد الالكتروني"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="Email"
                      onChange={(text) => {
                        setEmail(text.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className="d-flex justify-content-end mt-4 pt-4">
            <a
              style={{ color: "#3138FE" }}
              href="/registeration"
              className="mx-3 mb-4"
            >
              !انشئ حسابك الأن{" "}
            </a>

            <p className={darkness.darkness ? "text-muted" : "text-white"}>
              لا يوجد لديك حساب؟
            </p>
          </div>
          <button onClick={submbit} className="redirect_btn text-white">
            !تسجيل الدخول{" "}
          </button>
        </form>
      </Container>
    </div>
  );
}

export default Login;
