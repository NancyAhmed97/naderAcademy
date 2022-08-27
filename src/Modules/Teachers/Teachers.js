import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import TecherIcon from "../../Resources/images/TecherIcon.png"
import teacherImg from "../../Resources/images/nader.png"
import "./Teachers.css"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { teachersStatefu } from '../../Redux/Teachers';

function Teachers() {
    var auth = useSelector((state) => state.auth.authorization);
    const [teachers, setTeachers] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://pld-mh-h-ld-kh-kn.space/api/v1/Teacher/Teachers`,
        { headers: { Authorization: `Bearer ${auth.token}` } },
    ).then(response => {
        if (response.status==200) {
            setTeachers(response.data);
            dispatch(teachersStatefu(response.data));

                    }
    })
    }, [])
    
    return (
        <div>
            <NavbarContainer />
            <Container>

                <div className='d-flex justify-content-center'>

                    <div className='teachers_container text-white'>
                        <p className='title'>المدرسين</p>
                        <img src={TecherIcon} alt="TecherIcon" className='TecherIcon_img m-auto' />
                        {teachers.map((item,index)=>{
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
                        })}
                       
                    
                    </div>

                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Teachers