import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import AdminDashBoard from '../pages/AdminDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';

const Header = () => {
  return (
    <React.Fragment>
      <div className="main-wrapper">
      <NavBar /> 
      <SideBar />
        <Routes>
            <Route index path='/' element={<AdminDashBoard />} />
            <Route path='/student' element={<StudentDashboard />} />
            <Route path='/teacher' element={<TeacherDashboard />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};
export default Header;