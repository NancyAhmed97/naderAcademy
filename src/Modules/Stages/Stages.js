import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from '../Common/Header/Header'
import offerImg from "../../Resources/images/classRoomImg.png"
import img from "../../Resources/images/Group 11.png"
import Footer from '../Common/Footer/Footer'

import "./Stages.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Stages() {
  const [courses, setCourses] = useState([])
  const  {teacher} = useSelector((state) => state);
useEffect(() => {
  setCourses(teacher.teacher.courses);

}, [])



  return (
    <div >
      <Header />
      <div className='text-center mt-5'>
        <button className='fs-6 px-5 py-2 booking_notes m-auto'>احجز مذكره الأن </button>

      </div>
      <Container>
        <div className='classrom_container'>
         {courses.length>0?
         <div className='classroom'>
         {courses.map((course) => {
           console.log(course);
           return (
             <Link to={`/lesson/:${course.courseId}`} className="w-100">
              <div className='classRoom_container'>
                 <Row >
                   <Col md={4}>
                     <img src={offerImg} alt="" className='offer_img' />
                   </Col>
                   <Col md={8}>
                     <p className='text-white'>{course.courseName}</p>
                     <div className='d-flex justify-content-center'>
                       <img src={img} alt="img" style={{ width: "125px" }} />
                     </div>
                   </Col>
                 </Row>
               </div> 
             </Link>
           )
         })}


       </div>
       :
       <div className='classroom'>
   <div className='text-white d-flex justify-content-center align-items-center fw-bold fs-3 my-5 pt-5'>
                        <p>لا توجد كورسات </p>
                    </div>

     </div> 
        
        }
        </div>

      </Container>
      <Footer />
    </div>)
}
