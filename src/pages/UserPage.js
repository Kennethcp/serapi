import React from "react";
import userImage from "../assets/Avatar.svg"; // Ganti dengan lokasi file User.png
import backgroundImage from "../assets/background-dashboard.svg";
import Sidebar from "../components/Sidebar";

const UserPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* Main Content */}
      <div
        className="flex flex-col flex-1 min-h-screen relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 ml-80 px-12 py-10 space-y-8 mt-24 relative">
          {/* Avatar (Position Absolute) */}
          <div
            className="absolute left-1/2 -top-0 transform -translate-x-1/2 z-10 mt-4"
            style={{
              width: "160px",
              height: "160px",
            }}
          >
            <img
              src={userImage}
              alt="User"
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Card Container */}
          <div className="w-full bg-white rounded-lg shadow-lg p-5 bg-opacity-50">
            {/* User Header */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-mid-gray mt-24">User</h2>
            </div>
            {/* User Details and Investments */}
            <div className="grid grid-cols-2 gap-10 mt-4">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-bold text-mid-gray mb-4">
                  Personal Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">Email:</span>
                    <b>User@gmail.com</b>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">
                      Mobile Phone:
                    </span>
                    <b>081 30 11 2024</b>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">
                      Series and Number of Investor:
                    </span>
                    <b>SRP30112024</b>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">Gender:</span>
                    <b>Male</b>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">
                      Address:
                    </span>
                    <b>Pogung, Yogyakarta</b>
                  </li>
                </ul>
              </div>

              {/* Investment Information */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-mid-gray mb-4 rounded-lg">
                  My Investment
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">
                      No of Cow Investment:
                    </span>
                    <b>5</b>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">
                      Profit of Investment:
                    </span>
                    <div className="relative w-full bg-mid-gray h-4 mt-2 rounded-lg">
                      <div
                        className="bg-deepblue h-4 rounded-lg"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-mid-gray font-bold text-sm">
                      Withdrawal of Funds History:
                    </span>
                    <b>TRX01012025</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
