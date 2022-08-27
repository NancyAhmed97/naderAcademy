import React from 'react'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import examIcon from "../../Resources/images/examsIcon.png"
import "./Exams.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Exams() {
    const { teacher } = useSelector((state) => state);


    return (
        <div>
            <NavbarContainer />
            <Container>

                <div className='d-flex justify-content-center'>

                    <div className='exams_container text-white'>
                        <p className='title'>الامتحانات</p>
                        <img src={examIcon} alt="examIcon" className='examIcon_img m-auto' />
                        <div className='exam_container'>
                            <Row >
                                <Col md={4}>
                                    <Link to="/exam" className='exam_btn'>
                                        <div>صفحه الامتحان</div>

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
                                    <Link to="/exam" className='exam_btn'>
                                        <div>صفحه الامتحان</div>

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
                                    <Link to="/exam" className='exam_btn'>
                                        <div>صفحه الامتحان</div>

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
        </div>
    )
}

export default Exams