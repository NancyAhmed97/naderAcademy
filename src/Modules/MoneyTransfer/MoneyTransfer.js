import React, { useState } from 'react'
import "./MoneyTransfer.css"
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import { Col, Container, Row } from "react-bootstrap";
import offerImg from "../../Resources/images/nader.png"
import axios from 'axios';
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

function MoneyTransfer() {
    const [email, setEmail] = useState('')
    const [money, setMoney] = useState('')
    const { auth } = useSelector((state) => state);
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit=(e)=>{
        e.preventDefault()
        axios
        .post("https://pld-mh-h-ld-kh-kn.space/api/v1/Student/TransferMoney", {
            StudentId: auth.authorization.user.id,
            StudentEmail:email,
            doubleBudjet:money
        }, { headers: { Authorization: `Bearer ${auth.authorization.token}` } },
    
        )
        .then((res) => {
            console.log("res", res);
    
            if (res) {
    
                console.log(res.data);
                console.log(res);
                console.log(res.data.message);
                setResponse(res.data.message);
                handleShow()
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
                        <p className='title'>تحويل اموال</p>
                        <div className='form_container'>
                            <Row >
                                <Col md={6}>
                                </Col>
                                <Col md={6}>

                                    <form onSubmit={submit}>

                                        <p className='mb-1'>البريد الالكتروني للطالب</p>
                                        <input className='w-100'value={email} onChange={(e)=>setEmail(e.target.value)} />
                                        <p className='mt-4 mb-1'>المبلغ المحول</p>
                                        <input className='w-100' value={money}onChange={(e)=>setMoney(e.target.value)}/>
                                        <div className='mt-4  w-100 text-center trandfare_btn'>
                                            <button type='submit'>تحويل المبلغ</button>
                                        </div>
                                    </form>
                                </Col>
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
        </div>
    )
}

export default MoneyTransfer