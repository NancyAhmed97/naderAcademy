import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Common/Footer/Footer'
import NavbarContainer from '../Common/Navbar/Navbar'
import ProfileImg from "../../Resources/images/Profile.png"
import budgeteImg from "../../Resources/images/299107_money_icon.png"
import personIcon from "../../Resources/images/personIcon.png"
import email_icon from "../../Resources/images/email_icon.png"
import call_icon from "../../Resources/images/call_icon.png"
import location from "../../Resources/images/718953_location_maps_navigation_pin_place_icon.png"
import stage from "../../Resources/images/2038399_book_object_school_student_study_icon.png"
import axios from "axios";
import "./Profile.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { profilStatefu } from '../../Redux/Profile'
export default function Profile() {
    var auth = useSelector((state) => state.auth.authorization);
    const [profile, setProfile] = useState({})
    const dispatch = useDispatch();

    const [changeState, setChangeState] = useState(false)
    useEffect(() => {
        // axios({
        //     method: "get",
        //     url: `hhttps://pld-mh-h-ld-kh-kn.space/api/v1/Student/Profile/${auth.user.id}`,
        //     headers: { Authorization: `Bearer ${auth.token}` },
        //   }).then((res) => {
        //     setProfile(res.data)
        //     console.log(res.data)
        //   });
        axios.get(`https://pld-mh-h-ld-kh-kn.space/api/v1/Student/Profile/${auth.user.id}`,
            { headers: { Authorization: `Bearer ${auth.token}` } },
        ).then(response => {
            if (response.data.isSuccess) {
                
                setProfile(response.data.result)
                dispatch(profilStatefu(response.data.result));

            }
        })
    }, [])
    console.log(profile);

    return (
        <div>
            <NavbarContainer />
            <Container>
                <div className='d-flex justify-content-center'>

                    <div className='profile_container text-white'>
                        <p className='title'>صفحتك الشخصيه</p>
                        <img src={ProfileImg} alt="ProfileImg" className='ProfileImg_img m-auto' />
                        <ul className='p-0 Profile_links_container mt-5'>
                            <li className='d-flex'>
                                {changeState?
                                
                            <input value={profile.name} className="form-control w-100"/>
                            :
                            <p>{profile.name}</p>

                            }

                                <img src={personIcon} alt="personIcon" className='budgeteImg' />

                            </li>
                            <li className='d-flex'>
                            {changeState?
                                
                                <input value={profile.email} className="form-control w-100"/>
                                :
                                <p>{profile.email}</p>
                            }

                                <img src={email_icon} alt="email_icon" className='budgeteImg' />

                            </li>
                            <li className='d-flex'>
                            {changeState?
                                
                                <input value={profile.phoneNumber} className="form-control w-100"/>
                                :
                                <p>{profile.phoneNumber}</p>
                            }
                                <img src={call_icon} alt="call_icon" className='budgeteImg' />

                            </li>
                            <li className='d-flex'>
                            {changeState?
                                
                                <input value={profile.address} className="form-control w-100"/>
                                :
                                <p>{profile.address}</p>
                            }
                                <img src={location} alt="location" className='budgeteImg' />
                            </li>
                            <li className='d-flex'>
                            {changeState?
                                
                                <input value={profile.stage} className="form-control w-100"/>
                                :
                                <p>{profile.stage}</p>
                            }
                                <img src={stage} alt="stage" className='budgeteImg' />

                            </li>
                            <li className='d-flex'>
                            {changeState?
                                
                                <input value={profile.budjet} className="form-control w-100"/>
                                :
                                <p>{profile.budjet}</p>
                            }
                                <img src={budgeteImg} alt="budgeteImg" className='budgeteImg' />
                            </li>
                        </ul>
                        <div className='text-center' onClick={() => setChangeState(!changeState)}>
                            <button className='send_data_btn'>تغير البيانات الشخصيه</button>
                        </div>
                        <Link to="/changePassword" className='text-white mt-3'>
                            <div className='text-center'>
                                <button className='send_data_btn'>تغير كلمة المرور</button>
                            </div>
                        </Link>
                        <Link to="/buyingdetails" className='text-white mt-3'>
                            <div className='text-center'>
                                <button className='send_data_btn'>تفاصيل الشراء</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

