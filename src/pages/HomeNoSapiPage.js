import React from 'react';
import backgroundImage from '../assets/background-sapi.png';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/Avatar.svg';

function HomeNoSapiPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center bg-white bg-opacity-70 p-6 rounded-2xl shadow-lg max-w-md">
        <p className="text-2xl font-bold mb-4">
          Anda belum memiliki sapi yang diinvestasikan!
        </p>
        <button
          className="bg-deepblue text-white text-xl font-bold py-2 px-4 rounded-xl hover:bg-deepblue hover:opacity-80 transition duration-300"
          onClick={() => navigate('/register-cow')}
        >
          Investasi Sapi?
        </button>
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

export default HomeNoSapiPage;
