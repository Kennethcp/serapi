import React from 'react';
import backgroundImage from '../assets/background-sapi.png';
import { useNavigate } from 'react-router-dom';

function HomeNoSapiPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center bg-white bg-opacity-70 p-6 rounded-md shadow-lg max-w-md">
        <p className="text-lg font-semibold text-gray-800 mb-4">
          Anda belum memiliki sapi yang diinvestasikan!
        </p>
        <button
          className="bg-deepblue text-white font-semibold py-2 px-4 rounded-lg hover:bg-deepblue transition duration-300"
          onClick={() => navigate('/register-cow')}
        >
          Investasi Sapi?
        </button>
      </div>
      <div className="absolute top-12 right-8 flex items-center space-x-2 bg-white bg-opacity-90 p-2 rounded-md shadow">
        <img src="/path/to/user-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-gray-800">User</p>
          <p className="text-sm text-gray-600">Investor</p>
        </div>
      </div>
    </div>
  );
}

export default HomeNoSapiPage;
