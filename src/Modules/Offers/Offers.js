import React from 'react'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import offerIcon from "../../Resources/images/offerIcon.png"
import offerImg from "../../Resources/images/nader.png"
import "./Offers.css"
import { useSelector } from 'react-redux';
function Offers() {
        const { teacher } = useSelector((state) => state);
        console.log(teacher.teacher.offers.length);

    return (
        <div>
            <NavbarContainer />
            <Container>

                <div className='d-flex justify-content-center'>

                    <div className='offers_container text-white'>
                        <p className='title'>العروض</p>
                        <img src={offerIcon} alt="offerIcon" className='offerIcon_img m-auto' />
                        {teacher.teacher.offers.length>0?
                        <>
                         <div className='offer_container'>
                            <Row >
                                <Col md={4}>
                                    <img src={offerImg} alt="" className='offer_img' />
                                </Col>
                                <Col md={8}>
                                    <p>أ/نادر جورج</p>
                                    <p>أستاذ المواد الفلسفيه</p>

                                </Col>
                            </Row>
                        </div>
                        <div className='offer_container'>
                            <Row >
                                <Col md={4}>
                                    <img src={offerImg} alt="" className='offer_img' />
                                </Col>
                                <Col md={8}>
                                    <p>أ/نادر جورج</p>
                                    <p>أستاذ المواد الفلسفيه</p>

                                </Col>
                            </Row>
                        </div>
                        </>
                    :
                    <div className='text-white d-flex justify-content-center align-items-center fw-bold fs-3 mt-5 pt-5'>
                        <p>لا توجد عروض </p>
                    </div>
                    }
                       
                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Offers