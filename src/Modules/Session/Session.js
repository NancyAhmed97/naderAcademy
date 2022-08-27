import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import pdfImage from '../../Resources/images/1807137_document_extension_file_pdf_icon.png'
import examsIcon from '../../Resources/images/examsIcon.png'
import LinkIcon from '../../Resources/images/3841816_chain_hyperlink_interface_link_multimedia_icon.png'
import commentIcon from '../../Resources/images/com whl.png'
import "./Session.css"
import { Link } from 'react-router-dom'
export default function Session() {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '../../Resources/القضايا المعاصرة - سنة 1 اجتماع Sheet حل.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <NavbarContainer />
            <Container>
                <div className='d-flex justify-content-center'>

                    <div className='session_container text-white'>
                        {/* <video src="" width="600" height="300" controls="controls" autoplay="true" /> */}
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FX_7ooEvu0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className='mt-5 d-flex'>
                            <div className='text-white mx-2 d-flex flex-column  align-items-center' onClick={onButtonClick} style={{ cursor: "pointer" }}>
                                <img src={pdfImage} alt="" className='pdf_img' />
                                <p>PDF</p>

                            </div>
                            <Link to="/exams" className='text-white mx-2 d-flex flex-column  align-items-center'>
                                <img src={examsIcon} alt="" className='pdf_img' />
                                <p>Exam</p>
                            </Link>
                            <a href="" className='text-white mx-2 d-flex flex-column  align-items-center'>
                                <img src={LinkIcon} alt="" className='pdf_img' />
                                <p>Link</p>
                            </a>
                            <Link to="/comment" className='text-white mx-2 d-flex flex-column  align-items-center'>
                                <img src={commentIcon} alt="" className='pdf_img' />
                                <p>comment</p>
                            </Link>
                            <Link to="/homework" className='text-white mx-2 d-flex flex-column  align-items-center'>
                                <img src={commentIcon} alt="" className='pdf_img' />
                                <p>HomeWork</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
