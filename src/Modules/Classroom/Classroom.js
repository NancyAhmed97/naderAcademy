import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Common/Header/Header'
import offerImg from "../../Resources/images/classRoomImg.png"
import img from "../../Resources/images/Group 11.png"
import "./Classroom.css"
import Footer from '../Common/Footer/Footer'
export default function Classroom() {
  return (
    <div >
      <Header />
      <div className='text-center mt-5'>
        <button className='fs-6 px-5 py-2 booking_notes m-auto'>احجز مذكره الأن </button>

      </div>
      <Container>
        <div className='classrom_container'>
          <div className='classroom'>
            <div className='classRoom_container'>
              <Row >
                <Col md={4}>
                  <img src={offerImg} alt="" className='offer_img' />
                </Col>
                <Col md={8}>
                  <p className='text-white'>الشهر  الاول<span className='exam_subject'>فلسفة</span></p>
                  <div className='d-flex justify-content-center'>
                    <img src={img} alt="img" style={{ width: "125px" }} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className='classRoom_container'>
              <Row >
                <Col md={4}>
                  <img src={offerImg} alt="" className='offer_img' />
                </Col>
                <Col md={8}>
                  <p className='text-white'>الشهر  الاول<span className='exam_subject'>فلسفة</span></p>
                  <div className='d-flex justify-content-center'>
                    <img src={img} alt="img" style={{ width: "125px" }} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className='classRoom_container'>
              <Row >
                <Col md={4}>
                  <img src={offerImg} alt="" className='offer_img' />
                </Col>
                <Col md={8}>
                  <p className='text-white'>الشهر  الاول<span className='exam_subject'>فلسفة</span></p>
                  <div className='d-flex justify-content-center'>
                    <img src={img} alt="img" style={{ width: "125px" }} />
                  </div>
                </Col>
              </Row>
            </div>
            <div className='classRoom_container'>
              <Row >
                <Col md={4}>
                  <img src={offerImg} alt="" className='offer_img' />
                </Col>
                <Col md={8}>
                  <p className='text-white'>الشهر  الاول<span className='exam_subject'>فلسفة</span></p>
                  <div className='d-flex justify-content-center'>
                    <img src={img} alt="img" style={{ width: "125px" }} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

      </Container>
      <Footer />
    </div>
  )
}
