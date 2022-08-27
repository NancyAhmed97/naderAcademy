import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import TecherIcon from "../../Resources/images/TecherIcon.png"
import teacherImg from "../../Resources/images/nader.png"
import "./Teacher.css"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { teacherStatefu } from '../../Redux/Teacher';

function Teacher() {
    const teachertPath = window.location.href.lastIndexOf(":");
    const teachertId = window.location.href.slice(teachertPath + 1);
    const [teacherDet, setTeacherDet] = useState({})
    const { teachers } = useSelector((state) => state);
    const { auth } = useSelector((state) => state);
    const [activeState, setActiveState] = useState("offers")
    const dispatch = useDispatch();

    useEffect(() => {
        const x = teachers.teachers.find((x) => x.id == teachertId)
        axios
            .post("https://pld-mh-h-ld-kh-kn.space/api/v1/Teacher/Profile", {
                TeacherId: teachertId,
                StudentId:auth.authorization.user.id
            }, { headers: { Authorization: `Bearer ${auth.authorization.token}` } },

            )
            .then((res) => {
                console.log("res", res);

                if (res.data.isSuccess) {
                    setTeacherDet(res.data.result);
                    dispatch(teacherStatefu(res.data.result));

                }
            })
            .catch((err) => {
            });
    }, [])

    console.log(teacherDet);
    return (
        <div>
            <NavbarContainer />
            <Container>

                <div className='d-flex justify-content-center'>

                    <div className='teachers_container text-white'>
                        <p className='title'>أ/{teacherDet.name}</p>
                        <img src={TecherIcon} alt="TecherIcon" className='TecherIcon_img m-auto' />
                        <ul className='m-0'>
                            <li>                        <p >أ/{teacherDet.name}</p>
                            </li>
                            <li className='my-2'>{teacherDet.jobTitle}  </li>
                            <li className='my-2'>{teacherDet.phoneNumber} :  رقم التلفون  </li>

                            <li className='my-2'>{teacherDet.email} :  البريد الالكتروني  </li>
                        </ul>
                        <div className='d-flex justify-content-center mt-5' >
                        <Link to="/stages" className='text-white'>

                            <div className={activeState == "courses" ? ' active' : "box_container"} onClick={() => setActiveState('courses')}>
                                الكورسات
                            </div>
                            </Link>
                            <Link to="/exams" className='text-white'>

                            <div className={activeState == "exams" ? 'active' : "box_container"} onClick={() => setActiveState('exams')}>
                                الامتحانات
                            </div>
                            </Link>
                            <Link to="/offers" className='text-white'>

                            <div className={activeState == "offers" ? ' active text-white' : "box_container text-white"} onClick={() => setActiveState('offers')}>
                                    العروض

                            </div>
                            </Link>

                        </div>
                        {/* {teachers.map((item,index)=>{
                    return(
                        <Link to={`/teacher/:${item.id}`}className="text-white">

                        <div className='teacher_container'>
                    <Row >
                            <Col md={4}>
                                <img src={item.profileImage} alt="" className='teacher_img' />
                            </Col>
                            <Col md={8}>
                                <p>أ/{item.fullName}</p>
                                <p>أستاذ المواد الفلسفيه</p>

                            </Col>
                        </Row>
                    </div>
                    </Link>

                    )
                })} */}


                    </div>

                </div>
            </Container>
            <Footer />
        </div>)
}

export default Teacher