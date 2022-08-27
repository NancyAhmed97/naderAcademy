import React from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import BuyingDetails from './Modules/BuyingDetails/BuyingDetails';
import ChangePassword from './Modules/ChangePassword/ChangePassword';
import Classroom from './Modules/Classroom/Classroom';
import Code from './Modules/Code/Code';
import Header from './Modules/Common/Header/Header';
import Exam from './Modules/Exam/Exam';
import Exams from './Modules/Exams/Exams';
import Home from './Modules/Home/Home';
// import Registeration from './Modules/Registeration/Registeration';
import HomeWork from './Modules/HomeWork/HomeWork';
import Lesson from './Modules/Lesson/Lesson';
import Login from './Modules/Login/Login';
import MoneyTransfer from './Modules/MoneyTransfer/MoneyTransfer';
import MyCourses from './Modules/MyCourses/MyCourses';
import Offers from './Modules/Offers/Offers';
import Profile from './Modules/Profile/Profile';
import Registeration from './Modules/Registeration/Registeration';
import Session from './Modules/Session/Session';
import Stages from './Modules/Stages/Stages';
import Teachers from './Modules/Teachers/Teachers';
import Teacher from './Modules/Teacher/Teacher';

export default function RoutesContainer() {
  var { token } = useSelector((state) => state.auth.authorization);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={token?<Home/>:<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/classroom/:id" element={<Classroom />} />
      <Route path="/teacher/:id" element={<Teacher />} />
      <Route path="/stages" element={<Stages />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/moneyTransfer" element={<MoneyTransfer/>} />
      <Route path="/teachers" element={<Teachers/>} />
      <Route path="/exams" element={<Exams/>} />
      <Route path="/exam" element={<Exam/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/changepassword" element={<ChangePassword/>} />
      <Route path="/lesson/:id" element={<Lesson/>} />
      <Route path="/session" element={<Session/>} />
      <Route path="/homework" element={<HomeWork/>} />
      <Route path="/code" element={<Code/>} />
      <Route path="/courses" element={<MyCourses/>} />
      <Route path="/registeration" element={<Registeration/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/buyingdetails" element={<BuyingDetails/>} />
      <Route path="/header" element={<Header />} />

    </Routes>
  </BrowserRouter>  )
}
