import React, { useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import ProfileImg from "../../Resources/images/Profile.png"
import ChangePasswordImg from "../../Resources/images/9004738_lock_security_padlock_secure_icon.png"
import "./ChangePassword.css"
import Header from '../Common/Header/Header'
import axios from 'axios'
import { useSelector } from 'react-redux'
export default function ChangePassword() {
    const [oldPAssword, setOldPassword] = useState('')
    const [newPAssword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { auth } = useSelector((state) => state);
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit=(e)=>{
        e.preventDefault()
        console.log("fgjhgjfghjfhdjghj");
     axios
        .post(`https://pld-mh-h-ld-kh-kn.space/api/v1/identity/ChangePassword/${auth.authorization.user.id}`, {
            CurrentPassword:oldPAssword,
            NewPassword:newPAssword,
            ConfirmNewPassword:confirmPassword
        }, { headers: { Authorization: `Bearer ${auth.authorization.token}` } },
    
        )
        .then((res) => {
            console.log("res", res);
    
            if (res) {
    
                setResponse(res.data.message);
                handleShow()
    
                setConfirmPassword("")
                setOldPassword("")
                setNewPassword("")
            }
        })
        .catch((err) => {
            setResponse(err.response.data.message);
            handleShow()
        });
    }
    return (
        <div >
            <Header />
            <Container>
                <div className='d-flex justify-content-center mt-5'>

                    <div className='change_password_container text-white'>
                        <p className='title'>تغير كلمه المرور</p>
                        <img src={ChangePasswordImg} alt="ChangePasswordImg" className='examIcon_img m-auto' />

                        <div className='form_container'>
                        <form onSubmit={submit}>

                            <Row >
                                <Col md={6}>
                                </Col>
                                <Col md={6}>


                                        <p className='mb-1'>كلمه المرور القديمه </p>
                                        <input className='w-100'value={oldPAssword}onChange={(e)=>setOldPassword(e.target.value)} />
                                        <p className='mt-4 mb-1'>كلمه المرور الجديده </p>
                                        <input className='w-100' value={newPAssword}onChange={(e)=>setNewPassword(e.target.value)} />
                                        <p className='mt-4 mb-1'>تاكيد كلمه المرور الجديده </p>
                                        <input className='w-100' value={confirmPassword}onChange={(e)=>setConfirmPassword(e.target.value)} />

                                </Col>
                            </Row>
                            <div className='mt-4 text-center ChangePassword_btn m-auto'>
                                <button type='submit'>تغير كلمه المرور </button>
                            </div>
                            </form>

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
