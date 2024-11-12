import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-image.png';
import success from '../assets/success.svg';

function SuccessPage({ onCompleteRegistration }) {
  const navigate = useNavigate();

  const handleOkClick = () => {
    onCompleteRegistration();  // Mark registration as complete
    navigate('/dashboard');    // Redirect to the dashboard
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">Success!</h2>
        <div className="flex flex-col items-center">
          <img src={success} />
          <p className="text-center text-black mb-4 text-2xl font-medium">
            We will immediately contact you for further information using the data you have registered.
            Please check regularly so you don't miss important information. Thank you for your interest!
          </p>
          <button
            onClick={handleOkClick}
            className="bg-deepblue text-white px-16 py-2 w-60 rounded-xl text-2xl font-jakarta font-bold"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
