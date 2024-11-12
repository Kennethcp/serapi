// src/components/WithdrawalOfFundsPage.js
import React from 'react';
import Sidebar from './Sidebar';
import backgroundImage from '../assets/background-dashboard.png';
import profitGrowth from '../assets/profit_growth.svg';

const WithdrawalOfFundsPage = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="grid grid-cols-2 gap-8 ml-80 p-8 h-40">
          <div className="p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Current Profit</h2>
            <p className="text-3xl font-bold">Rp 720.000,00</p>
          </div>
          <div className="p-6 bg-white bg-opacity-70 rounded-lg shadow-lg">
            <form className="space-y-2">
              <input type="text" placeholder="Redemption Form" className="w-full p-2 border rounded-lg" />
              <input type="text" placeholder='Nominal' className='w-full p-2 border rounded-lg'/>
              <h2 className='text-right'>All</h2>
              <select className="w-full p-2 border rounded-lg">
                <option>Redemption Platform</option>
                <option>Platform 1</option>
                <option>Platform 2</option>
              </select>
            </form>
          </div>
            <div className="flex justify-center">
              <img src={profitGrowth} alt="Profit Growth" className='w-96' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalOfFundsPage;
