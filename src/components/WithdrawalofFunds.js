// src/components/WithdrawalOfFundsPage.js
import React from 'react';
import Sidebar from './Sidebar';
import backgroundImage from '../assets/background-dashboard.png';
import profitGrowth from '../assets/profit_growth.svg';

const WithdrawalOfFundsPage = () => {
  return (
    <div>
      <Sidebar />
      <div
        className="flex min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="grid grid-cols-2 gap-8 ml-80 p-8">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div className="p-6 bg-white bg-opacity-50 rounded-2xl">
              <h2 className="text-xl font-semibold mb-4">Current Profit</h2>
              <p className="text-3xl font-bold px-6">Rp 720.000,00</p>
            </div>
            <div className="flex">
              <img src={profitGrowth} alt="Profit Growth" className="w-96" />
            </div>
          </div>
          
          {/* Right Column */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Redemption Form"
                className="w-full p-2 rounded-2xl text-black bg-gray font-bold"
              />
              <input
                type="text"
                placeholder="Nominal"
                className="w-full p-2 bg-gray rounded-2xl"
              />
              <h2 className="text-right cursor-pointer">All</h2>
              <select className="w-full p-2  rounded-2xl py-4 bg-gray">
                <option>Redemption Platform</option>
                <option>Platform 1</option>
                <option>Platform 2</option>
              </select>
            </form>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalOfFundsPage;
