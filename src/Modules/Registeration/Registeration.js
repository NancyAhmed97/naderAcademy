import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Registeration.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "../Common/Navbar/Navbar";
import {useNavigate} from 'react-router-dom';

export default function Registeration() {
  var { darkness } = useSelector((state) => state);
  const [stages, setStages] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoeNumber, setPhoeNumber] = useState("");
  const [parentNumber, setParentNumber] = useState("");
  const [email, setEmail] = useState("");
  const [parentJop, setParentJop] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");
  const [stageId, setStageId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
    .get("https://pld-mh-h-ld-kh-kn.space/api/v1/Stage/Stages")
    .then((res) => {
      if (res.data.isSuccess) {
        console.log(res.data.result);
        setStages(res.data.result);
      }
    })
    .catch((err) => {
      console.log(err.response.data.errors[0]);
    });
  }, []);
const submit=(e)=>{
  e.preventDefault();
    axios({
    method: "post",
    url: "https://pld-mh-h-ld-kh-kn.space/api/v1/identity/RegisterStudent",
    data:{
      FullName:firstName+" "+secondName,
      ParentJob:parentJop,
      ParentPhone:parentNumber,
      City:city,
      Address:address,
      StageId:stageId,
      Email:email,
      PhoneNumber:phoeNumber,
      Password:password
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.isSuccess) {
        navigate('/login')

      }
    })
    .catch((err) => {
      setError(err.response.data.errors[0]);
    });
}

  return (
    <div className="registeration_container">
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
          !أنشئ <span style={{ color: "#383CAA" }}>حسابك</span> الآن
        </p>
        <p className={darkness.darkness ? "text-muted" : "text-white"}>
          .تأكد من ملأ بيانتك بدقه حتي تتمكن من الإشتراك في المنصه
        </p>
        <form>
          <Container >
            <Row className="justify-contant-end">
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    <input
                      placeholder="الاسم الثاني "
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="text"
                      value={secondName}
                      onChange={(text) => {
                        setSecondName(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <input
                      placeholder="الاسم الأول"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="text"
                      value={firstName}
                      onChange={(text) => {
                        setFirstName(text.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-contant-end">
              <Col md={6}>
                <Row>
                  <Col md={4}>
                    <input
                      placeholder="رقم ولي الأمر"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="number"
                      value={parentNumber}
                      onChange={(text) => {
                        setParentNumber(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <input
                      placeholder="البريد الالكتروني"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="email"
                      value={email}
                      onChange={(text) => {
                        setEmail(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <input
                      placeholder="رقم الهاتف"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="number"
                      value={phoeNumber}
                      onChange={(text) => {
                        setPhoeNumber(text.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-contant-end">
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    <input
                      placeholder="وظيفة ولي الأمر"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="text"
                      value={parentJop}
                      onChange={(text) => {
                        setParentJop(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <select
                      name="stages"
                      className="w-100 input_container text-white"
                      onChange={(e) => {
                        setStageId(e.target.value);
                      }}
                    >
                      <option
                        value="الصف الدراسي"
                        className={
                          darkness.darkness
                            ? "input_container w-100 text-muted"
                            : "input_container w-100 text-white"
                        }
                      >
                        الصف الدراسي
                      </option>
                      {stages.map((stage, index) => {
                        console.log(stage)
                        return (
                          <option key={index} value={stage.id}className="text-muted">
                            {" "}
                            {stage.stageName}
                          </option>
                        );
                      })}
                    </select>{" "}
                    {/* <Dropdown className="w-100">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className={
                          darkness.darkness
                            ? "input_container w-100 text-muted"
                            : "input_container w-100 text-white"
                        }
                      >
                        الصف الدراسي{" "}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {stages.map((stage, index) => {
                          console.log(stage.stageName);
                          return (
                            <Dropdown.Item
                              key={index}
                              id={stage.id}
                              value={stage.stageName}
                              onClick={(e) => {
                                console.log("id",e.target.value);
                              }}
                            >
                              {stage.stageName}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>{" "} */}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-contant-end">
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    {" "}
                    <input
                      placeholder="العنوان"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="text"
                      value={address}
                      onChange={(text) => {
                        setAddress(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    {" "}
                    <input
                      placeholder="محافظه"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="text"
                      value={city}
                      onChange={(text) => {
                        setCity(text.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-contant-end">
              <Col md={6}>
                <Row>
                  <Col md={6}>
                    <input
                      placeholder="إعادة كلمه السر"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="password"
                      value={password}
                      onChange={(text) => {
                        setPassword(text.target.value);
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    {" "}
                    <input
                      placeholder="كلمه السر"
                      className={
                        darkness.darkness
                          ? "text-muted w-100 input_container"
                          : "text-white w-100 input_container"
                      }
                      type="password"
                      value={checkPassword}
                      onChange={(text) => {
                        setCheckPassword(text.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className="d-flex justify-content-end mt-4">
            <a style={{ color: "#F27E0A" }} href="/login" className="mx-3 mb-4">
              !ادخل علي حسابك الأن
            </a>

            <p className={darkness.darkness ? "text-muted" : "text-white"}>
              لديك حساب بالفعل؟{" "}
            </p>
          </div>
          <button className="redirect_btn text-white" onClick={submit}>!أنشئ حسابك</button>
        </form>
      </Container>
    </div>  )
}
