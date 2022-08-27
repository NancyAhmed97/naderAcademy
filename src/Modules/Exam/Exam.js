import React from 'react'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import "./Exam.css"
function Exam() {
  return (
    <div>
      <NavbarContainer />

      <Container>
        <div className='d-flex justify-content-center'>

          <div className='exams_container text-white'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner mb-5">
                <div class="carousel-item active question_container">
                  <p className='text-center'>1 of 20</p>
                  <p className='question'>ما معني علم النفس؟</p>
                  <ul className='p-0 answer_container ' >
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>

                  </ul>
                </div>
                <div class="carousel-item">
                  <p className='text-center'>2 of 20</p>
                  <p className='question'>ما معني علم النفس؟</p>
                  <ul className='p-0 answer_container ' >
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>

                  </ul>
                </div>
                <div class="carousel-item ">
                  <p className='text-center'>3 of 20</p>
                  <p className='question'>ما معني علم النفس؟</p>
                  <ul className='p-0 answer_container ' >
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>
                    <li>jhkfh</li>

                  </ul>
                </div>
              </div>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="">التالي</span>
              </button>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="">السابق</span>
              </button>

            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Exam