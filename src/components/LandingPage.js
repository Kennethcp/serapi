import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-landing.png';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="h-max min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <button
          onClick={goToLogin}
          className="px-6 py-3 text-white bg-deepblue font-extrabold font-jakarta text-5xl rounded-lg"
        >
          LOGIN
        </button>
    </div>
  );
};

export default LandingPage;
