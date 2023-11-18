import './App.css';
import React from 'react';
import Dashboard from './mainComponents/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StudentMenu from './mainComponents/StudentMenu';
// import Home from './Home';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      {/* <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/student' element={<StudentMenu />} />
      </Routes> */}
      {/* <Home /> */}
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
