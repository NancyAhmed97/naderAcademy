import React from 'react'
import "./MyCourses.css"
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import examIcon from "../../Resources/images/317714_video_youtube_icon.png"
import { Link } from 'react-router-dom';
export default function MyCourses() {
  return (
    <div>
            <NavbarContainer />
            <Container>

                <div className='d-flex justify-content-center'>

                    <div className='exams_container text-white'>
                        <p className='title'>أكورساتي</p>
                        <img src={examIcon} alt="examIcon" className='examIcon_img m-auto' />
                        <div className='exam_container'>
                            <Row >
                                <Col md={4}>
                                    <Link to="/lesson" className='exam_btn'>
                                        <div>صفحة الدرس</div>

                                    </Link>
                                </Col>
                                <Col md={8}>
                                    <p>الامتحان الاول<span className='exam_subject'>فلسفة</span></p>

                                </Col>
                            </Row>
                        </div>
                        <div className='exam_container'>
                            <Row >
                                <Col md={4}>
                                    <Link to="/lesson" className='exam_btn'>
                                        <div>صفحة الدرس</div>

                                    </Link>
                                </Col>
                                <Col md={8}>
                                    <p>الامتحان الاول<span className='exam_subject'>فلسفة</span></p>

                                </Col>
                            </Row>
                        </div>
                        <div className='exam_container'>
                            <Row >
                                <Col md={4}>
                                    <Link to="/lesson" className='exam_btn'>
                                        <div>صفحة الدرس</div>

                                    </Link>
                                </Col>
                                <Col md={8}>
                                    <p>الامتحان الاول<span className='exam_subject'>فلسفة</span></p>

                                </Col>
                            </Row>
                        </div>
                    </div>

                </div>
            </Container>
            <Footer />
        </div>  )
}
