import React from 'react';
import backgroundImage from '../assets/background-dashboard.svg';
import Sidebar from '../components/Sidebar';
import growth from '../assets/growth.svg';
import greenArrow from '../assets/dashboard_icon/arrow.svg'

const DashboardPage = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        {/* Main Content Wrapper */}
        <div className="flex-1 ml-80 p-8 space-y-6 mt-16">
          
          {/* Return Card - Full Width */}
          <div className="bg-white px-6 rounded-xl">
            <h2 className="text-2xl font-semibold font-sans py-6">Return</h2>
            <p className="text-[50px] font-medium font-sans pb-9">Rp 1,000,000</p>
          </div>

          {/* Second Row: Revenues, Growth, and Top Year/Top Month Columns */}
          <div className="flex space-x-6">
            
           {/* Revenues Card */}
            <div className="bg-white p-6 rounded-xl flex-1 h-96 flex flex-col">
              <h2 className="text-2xl font-semibold font-sans">Revenues</h2>
              <div className='flex items-center'>
                <p className="text-[80px] font-medium py-4 font-sans">15%</p>
                <img src={greenArrow} className='h-12'></img>
              </div>
              
              <p className="py-4">Increase compared to last week</p>
              
              {/* Spacer to push report link to bottom */}
              <div className="mt-auto flex justify-start">
                <p className="font-sans text-dark-orange cursor-pointer">
                  Revenues report →
                </p>
              </div>
            </div>  

            {/* Growth Chart Card */}
            <img src={growth} className='w-3/6 h-96'></img>

            {/* Column with Top Year and Top Month Cards */}
            <div className="flex flex-col space-y-6 flex-1">
              
              {/* Top Year Card */}
              <div className="bg-white p-6 rounded-xl h-44 flex flex-col justify-between">
                <h2 className="text-lg font-semibold font-sans text-mid-gray">Top Year</h2>
                <div className='mt-auto'>
                  <p className="text-xl font-medium text-dark-orange font-sans">2023</p>
                  <p className="text-gray-600">96M income so far</p>
                </div>
              </div>

              {/* Top Month Card */}
              <div className="bg-white p-6 rounded-xl h-44 flex flex-col justify-between">
                <h2 className="text-lg font-semibold font-sans text-mid-gray">Top Month</h2>
                <div className='mt-auto'>
                  <p className="text-xl font-semibold text-dark-orange font-sans">November</p>
                  <p className="text-orange font-medium font-sans">2024</p>
                </div>  
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
