// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-image.png';
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
      onLogin();
      navigate('/no-cows');
    } else {
      alert('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
                // SVG for "Hide" (Eye-off icon)
                <img src={hide}></img>
              ) : (
                <img src={show} className='py-1'></img>
              )}
            </button>
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-light-gray text-sm font-medium font-jakarta">Forgot Password?</Link>
          </div>
          <button type="submit" className="w-full bg-deepblue text-white py-2 rounded-md">Login</button>
        </form>
        <p className="mt-4 text-center text-black">
          or <Link to="/create-account" className="text-light-gray">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
