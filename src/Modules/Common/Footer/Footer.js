import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import youtube from "../../../Resources/images/footer1.png"
import facebook from "../../../Resources/images/Group 3.png"
import telegram from "../../../Resources/images/telegram.png"
import "./Footer.css"
function Footer() {
  return (
    <div className='footer_container pt-4'>
        <Container>
            <Row>
                <Col md={6}>
<p>ارقام سكرتاريه الماده العلميه</p>
<ul className='p-0'>
    <li><a href={`tel://send?phone=01023984756`}>01023984756</a></li>
    <li><a href={`tel://send?phone=01023948756`}>01023948756</a></li>
    <li><a href={`tel://send?phone=01276354763`}>01276354763</a></li>
</ul>
<div className='social_media'>
<ul className='p-0'>
<li className='d-inline-block'>
        <a href="">
            <img src={facebook}alt="facebook"/>
        </a>
    </li>

    <li className='d-inline-block'>
        <a href="">
            <img src={youtube}alt="youtube"/>
        </a>
    </li>

    <li className='d-inline-block'>
        <a href="">
            <img src={telegram}alt="telegram"/>
        </a>
    </li>
</ul>
</div>

                </Col>
                <Col md={6}>
                <p>ارقام الدعم الفني</p>
<ul className='p-0'>
      <li><a href={`tel://send?phone=01023984756`}>01023984756</a></li>
      <li><a href={`tel://send?phone=01023948756`}>01023948756</a></li>
      <li><a href={`tel://send?phone=01276354763`}>01276354763</a></li>
</ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer