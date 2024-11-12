import React from 'react';
import backgroundImage from '../assets/background-dashboard.png';
import Sidebar from './Sidebar';
import growth from '../assets/growth.svg';

const DashboardPage = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        {/* Main Content Wrapper */}
        <div className="flex-1 ml-80 p-8 space-y-6">
          
          {/* Return Card - Full Width */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Return</h2>
            <p className="text-4xl font-bold">Rp 1,000,000</p>
          </div>

          {/* Second Row: Revenues, Growth, and Top Year/Top Month Columns */}
          <div className="flex space-x-6">
            
            {/* Revenues Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 h-96">
              <h2 className="text-lg font-semibold">Revenues</h2>
              <p className="text-3xl font-bold text-green-600">15%</p>
              <p className="text-gray-600">Increase compared to last week</p>
              <a href="/revenue-report" className="text-blue-500 mt-2 inline-block">
                Revenues report →
              </a>
            </div>

            {/* Growth Chart Card */}
            <img src={growth} className='w-3/6'></img>

            {/* Column with Top Year and Top Month Cards */}
            <div className="flex flex-col space-y-6 flex-1">
              
              {/* Top Year Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg h-44">
                <h2 className="text-lg font-semibold">Top Year</h2>
                <p className="text-xl font-bold">2023</p>
                <p className="text-gray-600">96M income so far</p>
              </div>

              {/* Top Month Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg h-44">
                <h2 className="text-lg font-semibold">Top Month</h2>
                <p className="text-xl font-bold">November</p>
                <p className="text-gray-600">2024</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
