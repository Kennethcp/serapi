import React from 'react';
import backgroundImage from '../assets/background-manage-cows.svg';
import Sidebar from '../components/Sidebar';
import costProfit from '../assets/costProfit.svg';

const InvestmentReport = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col p-8 space-y-6 ml-80 mt-16">
          {/* Total Investment Section */}
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md py-2 px-4 w-96">
            <h2 className="text-lg font-semibold py-2">Total Investment</h2>
            <p className="text-3xl font-bold ">Rp 90.000.000,00</p>
            <p className=" text-right text-light-gray font-bold underline cursor-pointer">Detail Report</p>
          </div>

          {/* Current Revenue Section */}
          <div className="bg-white bg-opacity-50 rounded-lg shadow-md p-2 px-4">
            <h2 className="text-lg font-semibold py-2">Current Revenue</h2>
            <p className="text-3xl font-bold px-12">Rp 5.000.000,00</p>
            <p className="text-right ml-4 text-light-gray font-bold font-jakarta underline cursor-pointer">Detail Report</p>
          </div>
          <img src={costProfit} alt="Profit vs Cost Graph" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default InvestmentReport;
