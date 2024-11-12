// src/components/CreateAccountPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background-image.png';

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Retrieve existing users from local storage or set empty array
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user already exists
    if (storedUsers.some((user) => user.email === email)) {
      alert('An account with this email already exists');
      return;
    }

    // Add new user to storedUsers array
    const newUser = { email, phone, password };
    storedUsers.push(newUser);

    // Save updated users list to local storage
    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Redirect to login page after successful account creation
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="w-full max-w-md bg-white bg-opacity-70 rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-tc text-light-gray"
              required
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md border-gray-tc text-light-gray"
              required
              placeholder='Phone'
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-tc rounded-md text-light-gray"
              required
              placeholder='Password'
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-tc rounded-md text-light-gray"
              required
              placeholder='Confirm Password'
            />
          </div>
          <button type="submit" className="w-full bg-deepblue text-white py-2 rounded-md mt-4">Sign Up</button>
        </form>
        <p className="text-center text-light-gray mt-4 font-medium">
          Already have an account? <Link to="/login" className="text-red">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountPage;
