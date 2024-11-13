// src/components/WithdrawalOfFundsPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import backgroundImage from '../assets/background-dashboard-3.svg';
import profitGrowth from '../assets/profit_growth.svg';
import upload from '../assets/upload.svg';

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
        <div className="grid grid-cols-2 gap-8 ml-80 p-8 mt-16">
          {/* Left Column */}
          <div className="flex flex-col space-y-8  w-max">
            <div className="py-6 bg-white bg-opacity-50 rounded-2xl pl-8">
              <h2 className="text-xl font-semibold mb-4">Current Profit</h2>
              <p className="text-3xl font-bold ">Rp 720.000,00</p>
            </div>
            <div className="flex">
              <img src={profitGrowth} alt="Profit Growth" />
            </div>
          </div>
          
          {/* Right Column */}
            <form className="space-y-4 ">
              <div className='flex bg-gray rounded-xl'>
                <input
                  type="text"
                  placeholder="Redemption Form"
                  className="w-full p-2  placeholder:text-black pl-4 bg-gray rounded-xl font-bold outline-none"
                />
                <img src={upload}></img>
              </div>
              
              <input
                type="text"
                placeholder="Nominal"
                className="w-full p-2 bg-gray rounded-xl pl-4 outline-none"
              />
              <h2 className="text-right cursor-pointer text-xl">All</h2>
              <select className="w-full p-2 pl-2 outline-none hover:bg-gray hover:opacity-70 rounded-2xl py-4 bg-gray">
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
