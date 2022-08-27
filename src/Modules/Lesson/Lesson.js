import React, { useEffect, useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import nader1 from "../../Resources/images/nader1.png"
import "./Lesson.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
function Lesson() {
    const { auth } = useSelector((state) => state);
    const coursePath = window.location.href.lastIndexOf(":");
    const courseId = window.location.href.slice(coursePath + 1);
    const [lessonDet, setLessonDet] = useState([])
    const [coursePrice, setCoursePrice] = useState([])
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { teacher } = useSelector((state) => state);

    const q = teacher.teacher.courses.find((r) => r.courseId == courseId)
    console.log(auth.authorization.user.budjet);
    console.log(q)
    useEffect(() => {
        setCoursePrice(q.price)
        axios
            .post("https://pld-mh-h-ld-kh-kn.space/api/v1/Lesson/Lessons", {
                CourseId: courseId,
                StudentId: auth.authorization.user.id
            }, { headers: { Authorization: `Bearer ${auth.authorization.token}` } },

            )
            .then((res) => {
                if (res.data.isSuccess) {
                    console.log(res.data.result);
                    setLessonDet(res.data.result);
                }
            })
            .catch((err) => {
            });
    }, [])
    const submitCourse = () => {
        axios
            .post("https://pld-mh-h-ld-kh-kn.space/api/v1/Course/Buy", {
                CourseId: courseId,
                StudentId: auth.authorization.user.id
            }, { headers: { Authorization: `Bearer ${auth.authorization.token}` } },

            )
            .then((res) => {
                console.log("res", res);

                if (res.data.isSuccess) {
                    setResponse(res.data.message);
                    handleShow()
    
                    // setTeacherDet(res.data.result);
                    // dispatch(teacherStatefu(res.data.result));

                }
            })
            .catch((err) => {
                setResponse(err.response.data.message);
                handleShow()

            });
    }
    return (
        <div>
            <NavbarContainer />
            <Container>

                <Row>
                    <Col md={6} className='lesson_name_container'>
                        <p className='text-white'>سعر الكورس {coursePrice} جنيه</p>
                        <button className='buying_course mb-3' onClick={submitCourse}>اشتري الكورس</button>
                   {lessonDet.map((item)=>{
                    return(
                        <Link to={`/lessonDetails/:${item.lessonId}`} className="desc_lession_container fs-6">
                        <div className='d-flex flex-column justify-center'>
                            <p>{item.lessonName} </p>

                        </div>
                    </Link>
                    )
                   })}
             <Link to={`/exams`} className="desc_lession_container fs-6">
                        <div className='d-flex flex-column justify-center'>
                            <p className='fw-bold'>الامتحانات</p>

                        </div>
                    </Link>
                    </Col>
                    <Col className='img_container' md={6}>
                        <img src={nader1} alt="" className='nader1' />
                    </Col>
                </Row>
                <ul>
                <li>عدد الدروس:2درس</li>
                <li>   عدد الامتحانات:2امتحان</li>
                <li>    مدرس  :نادر جورج</li>
            </ul>
            </Container>
         
            <Footer />
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='text-center py-5 fw-bold' style={{ color: 'red' }}>{response}</Modal.Body>

            </Modal>
        </div>
    )
}

export default Lesson