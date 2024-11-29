// src/components/TermsConditionsPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-sapi.png';
import avatar from '../assets/Avatar.svg';
import { Link } from 'react-router-dom';

function TermsConditionsPage({ onAcceptTerms, onDisagreeTerms }) {
  const navigate = useNavigate();

  const handleAgree = () => {
    onAcceptTerms();
    navigate('/regist-success'); // Redirect to home page or another page after accepting terms
  };

  const handleDisagree = () => {
    onDisagreeTerms();
    navigate('/register-cow'); // Redirect back to cow registration if terms are not accepted
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-bone-white bg-opacity-75 p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <h2 className="text-center text-2xl font-bold  mb-4 font-jakarta">Terms & Conditions</h2>
        <ul className="list-decimal list-inside mb-6 space-y-2 font-medium font-jakarta text-xl">
          <li>Investors must be at least 18 years old and have valid government identification.</li>
          <li>Investors are required to provide accurate and complete information, which will be protected according to the privacy policy.</li>
          <li>Investments have a minimum nominal value according to the number of cows selected.</li>
          <li>Investors understand the applicable investment scheme.</li>
          <li>Investors are required to comply with applicable legal regulations.</li>
          <li>Investors will be contacted further to study and approve the contract.</li>
        </ul>
        <div className="flex justify-center space-x-9">
          <button
            onClick={handleAgree}
            className="bg-deepblue text-white px-4 py-4 w-60 rounded-xl text-xl font-bold hover:bg-deepblue hover:opacity-80 transition duration-300"
          >
            Agree
          </button>
          <button
            onClick={handleDisagree}
            className="bg-gray-tc text-white px-4 py-4 w-60 rounded-xl text-xl font-bold hover:bg-gray-tc hover:opacity-80 transition duration-300"
          >
            Disagree
          </button>
        </div>
      </div>
      <Link className="absolute top-32 right-8 flex w-44 items-center space-x-2 bg-white bg-opacity-90 p-2 rounded-md shadow" to='/userpagenocow'>
        <img src={avatar} alt="User Avatar" className="w-12 h-12 rounded-xl" />
        <div>
          <p className="font-semibold text-gray-800">User</p>
          <p className="text-sm bg-sky-blue  rounded-full px-1">Investor</p>
        </div>
      </Link>
    </div>
  );
}

export default TermsConditionsPage;
