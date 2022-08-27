import React, { useEffect, useState } from 'react'
import "./Code.css"
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import Img from "../../Resources/images/299107_money_icon.png"
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";

export default function Code() {
    const { auth } = useSelector((state) => state);
    console.log(auth.authorization.user.id);
    const [code,setCode] = useState('')
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
const submit=(e)=>{
    e.preventDefault()
    axios
    .post("https://pld-mh-h-ld-kh-kn.space/api/v1/Student/ChargeCode", {
        StudentId: auth.authorization.user.id,
        code:code
    }, { headers: { Authorization: `Bearer ${auth.authorization.token}` } },

    )
    .then((res) => {
        console.log("res", res);

        if (res) {

            setResponse(res.data.message);
            handleShow()

            setCode("")
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
                <div className='d-flex justify-content-center'>

                    <div className='Mony_Transfer_container text-white'>
                        <p className='title'>اشحن كودك</p>
                        <img src={Img} alt="ChangePasswordImg" className='examIcon_img m-auto' />

                        <div className='form_container'>
                            <Row >


                                <form className='d-flex flex-column align-items-center justify-contect-center'onSubmit={submit}>


                                    <input className='w-50 code_input'value={code}  style={{ background: "#EFCC00", border: "none" }} onChange={(e) => {
                                        setCode(e.target.value);
                                    }} />
                                    <div className='mt-4  w-50 text-center charge_btn'>
                                        <button type='submit'>اشحن  الان</button>
                                    </div>
                                </form>
                            </Row>
                        </div>

                    </div>

                </div>
            </Container>
            <Footer />
            <Modal show={show} onHide={handleClose}centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='text-center py-5 fw-bold'style={{color:'red'}}>{response}</Modal.Body>
   
      </Modal>
        </div>)
}
