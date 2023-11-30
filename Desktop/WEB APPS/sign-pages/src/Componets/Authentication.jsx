import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import SignUpPage from './SignUpPage';
import DoctorSignUp from './DoctorSignUp';
import DoctorLogIn from './DoctorLogIn';
import LogInPage from './LogInPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.png'; // Update the path to your logo

function Authentication() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <header className="bg-gray-800 text-white py-4">
          <nav className="flex items-center justify-between  container mx-auto">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="mr-4 max-h-12 max-w-12 " />
              {/* Adjust the max-height and max-width values as needed */}
              <ul className="flex space-x-4">
                <li>
                  <Link to='/' className="hover:text-blue-300">Patient Login</Link>
                </li>
                <li>
                  <Link to='/signup' className="hover:text-blue-300">Patient signup</Link>
                </li>
                <li>
                  <Link to='/doctorlogin' className="hover:text-blue-300">Doctor Login</Link>
                </li>
                <li>
                  <Link to='/doctorsignup' className="hover:text-blue-300">Doctor Signup</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div>
          <Routes>
            <Route path='/' element={<LogInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/doctorlogin' element={<DoctorLogIn />} />
            <Route path='/doctorsignup' element={<DoctorSignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default Authentication;
