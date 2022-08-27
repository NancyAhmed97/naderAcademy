import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import offerIcon from "../../Resources/images/3890943_bag_cash_currency_dollar_money_icon.png"
import offerImg from "../../Resources/images/nader.png"
import "./BuyingDetails.css"
import { useSelector } from 'react-redux';
export default function BuyingDetails() {
    const [activeState, setActiveState] = useState("lesson")
    const [lessonDet, setLessonDet] = useState([])
    const [paymentCodes, setPaymentCodes] = useState([])
    const [courses, setCourses] = useState([])
    const [quizzes, setQuizzes] = useState([])
    const [exams, setExams] = useState([])
    var { profile } = useSelector((state) => state);

    useEffect(() => {
        console.log(profile.profil);
        setLessonDet(profile.profil.lessons);
        setPaymentCodes(profile.profil.paymentCodes);
        setCourses(profile.profil.courses);
        setQuizzes(profile.profil.quizzes);
        setExams(profile.profil.exams);

    }, [profile])
    return (
        <div>
            <NavbarContainer />
            <Container>

                <div className='d-flex justify-content-center'>

                    <div className='offers_container text-white'>
                        <p className='title'>تفاصيل الشراء </p>
                        <img src={offerIcon} alt="offerIcon" className='offerIcon_img m-auto' />
                        <div className='d-flex justify-content-center mt-5' >

                            <div className={activeState == "courses" ? ' active' : "box_container"} onClick={() => setActiveState('courses')}>
                                الكورسات
                            </div>
                            <div className={activeState == "code" ? 'active' : "box_container"} onClick={() => setActiveState('code')}>
                                اكواد الشحن
                            </div>
                            <div className={activeState == "lesson" ? ' active' : "box_container"} onClick={() => setActiveState('lesson')}>
                                الدروس
                            </div>

                        </div>
                        <div className='d-flex justify-content-center mt-4' >

                            <div className={activeState == "exams" ? ' active' : "box_container"} onClick={() => setActiveState('exams')}>
                                امتحانات
                            </div>
                            <div className={activeState == "quizes" ? 'active' : "box_container"} onClick={() => setActiveState('quizes')}>
                                امتحانات الدروس
                            </div>
                        </div>
                        {activeState == "lesson" &&
                            <>
                                <div className='d-flex justify-content-center mt-5'>
                                    <div className="classify_box">
                                        الكورس الخاص  بالدرس                               </div>
                                    <div className="classify_box">
                                        سعر الدرس
                                    </div>
                                    <div className="classify_box">
                                        اسم الدرس
                                    </div>
                                    <div className="classify_box">
                                        تاريخ الشراء
                                    </div>
                                </div>
                                {lessonDet.map((item, index) => {
                                    return (

                                        <div className='d-flex justify-content-center mt-5' style={{ border: "1px solid #fff", padding: "10px", borderRadius: "25px", background: "#fff", boxShadow: "3px 3px 8px #000000" }}>
                                            <div className="data_box">
                                                {item.courseName}
                                            </div>
                                            <div className="data_box">
                                                {item.price}
                                            </div>
                                            <div className="data_box">
                                                {item.lessonName}
                                            </div>
                                            <div className="data_box">
                                                {item.lessonCreatedDate.slice(0, 10)}
                                            </div>
                                        </div>
                                    )
                                })}

                            </>
                        }
                        {activeState == "code" &&
                            <>
                                <div className='d-flex justify-content-center mt-5'>
                                    <div className="classify_box">
                                        الكود
                                    </div>
                                    <div className="classify_box">
                                        قيمة الشحن
                                    </div>

                                    <div className="classify_box">
                                        تاريخ الشحن
                                    </div>
                                </div>
                                {paymentCodes.map((item, index) => {
                                    return (
                                        <div className='d-flex justify-content-center mt-5' style={{ border: "1px solid #fff", padding: "10px", borderRadius: "25px", background: "#fff", boxShadow: "3px 3px 8px #000000" }}>
                                            <div className="data_box">
                                                {item.code.code}
                                            </div>
                                            <div className="data_box">
                                                {item.code.price}
                                            </div>

                                            <div className="data_box">
                                                تاريخ الشحن
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </>

                        }
                        {activeState == "courses" &&
                            <>
                                <div className='d-flex justify-content-center mt-5'>
                                    <div className="classify_box">
                                        سعر الكورس
                                    </div>
                                    <div className="classify_box">
                                        اسم الكورس                                </div>

                                    <div className="classify_box">
                                        تاريخ الشراء
                                    </div>
                                </div>
                                {courses.map((item, index) => {
                                    console.log(item);
                                    return (
                                        <div className='d-flex justify-content-center mt-5' style={{ border: "1px solid #fff", padding: "10px", borderRadius: "25px", background: "#fff", boxShadow: "3px 3px 8px #000000" }}>
                                            <div className="data_box">
                                                {item.price}
                                            </div>
                                            <div className="data_box">
                                                {item.courseName}                              </div>

                                            <div className="data_box">
                                                {item.courseCreatedDate.slice(0, 10)}
                                            </div>
                                        </div>
                                    )
                                })}


                            </>
                        }
                        {activeState == "quizes" &&
                            <>

                                <div className='d-flex justify-content-center mt-5'>
                                    <div className="classify_box">
                                        درجتك                                </div>
                                    <div className="classify_box">
                                        اسم الامتحان                                </div>

                                    <div className="classify_box">
                                        تاريخ أداء الامتحان                                </div>
                                </div>
                                {quizzes.map((item, index) => {
                                    console.log(item);
                                    return (
                                        <div className='d-flex justify-content-center mt-5' style={{ border: "1px solid #fff", padding: "10px", borderRadius: "25px", background: "#fff", boxShadow: "3px 3px 8px #000000" }}>
                                        <div className="data_box">
                                          {item.degree}                               </div>
                                        <div className="data_box">
{item.examName}
                                                                           </div>
    
                                        <div className="data_box">
{item.enteryDate.slice(0,10)}
                                                              </div>
                                    </div>

                                )

                                })}
                            </>
                        }
                        {activeState == "exams" &&
                        <>
                            <div className='d-flex justify-content-center mt-5'>
                                <div className="classify_box">
                                    درجتك                                </div>
                                <div className="classify_box">
                                    اسم الامتحان                                </div>

                                <div className="classify_box">
                                    تاريخ أداء الامتحان                                </div>
                            </div>
                            {exams.map((item,index)=>{
                                console.log(item);
                                return(
                                    <div className='d-flex justify-content-center mt-5' style={{ border: "1px solid #fff", padding: "10px", borderRadius: "25px", background: "#fff", boxShadow: "3px 3px 8px #000000" }}>
                                    <div  className="data_box">
                                        {item.degree}                                </div>
                                    <div  className="data_box">
                                       {item.examName}                             </div>
    
                                    <div  className="data_box">
                            {item.enteryDate.slice(0,10)}                                </div>
                                </div>
                                )
                            })}
                        </>
                        }
                    </div>

                </div>
            </Container>
            <Footer />
        </div>)
}
