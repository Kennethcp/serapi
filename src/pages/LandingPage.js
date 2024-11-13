// LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/img_1NDRiMQ.jpg';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <Navbar transparent />
      <div
        className="h-max min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <button
          onClick={goToLogin}
          className="px-6 py-3 text-white bg-deepblue font-extrabold font-jakarta text-5xl rounded-lg"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
