// src/components/CowRegistrationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-sapi.png';
import avatar from '../assets/Avatar.svg';

function CowRegistrationPage({ onRegisterCows }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterCows(); // Mark cows as registered
    navigate('/terms-conditions'); // Redirect to terms page immediately
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-bone-white bg-opacity-75 p-8 rounded-xl shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <select className="w-full px-4 py-2 border rounded-xl text-light-gray font-medium font-jakarta border-gray-tc">
              <option>No of Cow Investment</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-xl text-light-gray border-gray-tc font-medium font-jakarta" placeholder="Cow Type" />
          </div>
          <div className="mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-xl text-light-gray border-gray-tc font-medium font-jakarta mb-20" placeholder="Cow Age" />
          </div>
          <button
            type="submit"
            className="bg-deepblue text-white px-4 py-3 rounded-xl font-jakarta font-bold w-full text-xl"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="absolute top-32 right-8 flex w-44 items-center space-x-2 bg-white bg-opacity-90 p-2 rounded-md shadow">
        <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-xl" />
        <div>
          <p className="font-semibold text-gray-800">User</p>
          <p className="text-sm bg-sky-blue  rounded-full px-1">Investor</p>
        </div>
      </div>
    </div>
    
  );
}

export default CowRegistrationPage;
