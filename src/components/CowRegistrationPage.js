// src/components/CowRegistrationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-sapi.png';

function CowRegistrationPage({ onRegisterCows }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterCows(); // Mark cows as registered
    navigate('/terms-conditions'); // Redirect to terms page immediately
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-bone-white bg-opacity-75 p-8 rounded shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <select className="w-full px-4 py-2 border rounded text-light-gray font-medium font-jakarta border-gray-tc">
              <option>No of Cow Investment</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded text-light-gray border-gray-tc font-medium font-jakarta" placeholder="Cow Type" />
          </div>
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded text-light-gray border-gray-tc font-medium font-jakarta mb-20" placeholder="Cow Age" />
          </div>
          <button
            type="submit"
            className="bg-deepblue text-white px-4 py-3 rounded font-jakarta font-bold w-full text-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CowRegistrationPage;
