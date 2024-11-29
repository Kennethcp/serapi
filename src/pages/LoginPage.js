import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-image.svg';
import hide from '../assets/hide-password.svg';
import show from '../assets/show-password.svg';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find((u) => u.email === email && u.password === password);
  
    if (user) {
      onLogin(email);  // Pass email to onLogin
      navigate('/no-cows');
    } else {
      alert('Invalid credentials');
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const pdfUrl = "https://drive.google.com/file/d/1FFGqGx5bvbWFQ6qQCs10R5CBxqL5YQHs/view?usp=sharing"; // Ganti dengan URL file PDF Anda

  const openPdf = () => {
    window.open(pdfUrl, '_blank'); // Membuka link di tab baru
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="font-extrabold mb-4 text-center text-deepblue text-7xl py-4">LOGIN</h2>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2 text-light-gray"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <img src={hide} alt="Hide password" />
              ) : (
                <img src={show} alt="Show password" className='py-1' />
              )}
            </button>
          </div>
          <div className="text-right">
            <div className="text-light-gray text-sm font-medium font-jakarta hover:cursor-pointer">Forgot Password?</div>
          </div>
          <button type="submit" className="w-full bg-deepblue text-white py-2 rounded-md">Login</button>
        </form>
        <p className="mt-4 text-center text-black">
          or <Link to="/create-account" className="text-light-gray">Create Account</Link>
        </p>
      </div>
      <button
        onClick={openPdf}
        className="px-10 py-5 bg-deepblue text-white font-bold rounded-lg mt-8 font-jakarta text-3xl"
      >
        Guidebook Website 
      </button>
    </div>
  );
}

export default LoginPage;
