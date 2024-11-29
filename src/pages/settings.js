// Settings.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import backgroundImage from "../assets/background-settings.svg";

const Settings = () => {
  // State for toggles
  const [notifications, setNotifications] = useState({
    withdrawalEmail: false,
    withdrawalMessage: true,
    investmentEmail: true,
    investmentMessage: false,
  });

  // Function to handle toggles
  const handleToggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 ml-60 font-bold"> {/* Ubah gap menjadi lebih kecil */}
          {/* Security Section */}
          <div className="bg-white shadow-lg rounded-2xl bg-opacity-80 p-6 font-bold">
            <h2 className="text-lg font-bold mb-4 text-mid-gray">Security</h2>
            <div className="space-y-3">
                <h3 className="text-sm mb-2 text-mid-gray">Login & Recovery</h3>
              <div className="flex justify-between">
                <span>Change Password</span>
                <span className="text-blue-500 cursor-pointer"> &gt; </span>
              </div>
              <div className="flex justify-between">
                <span>Two-Factor Authentication</span>
                <span className="text-blue-500 cursor-pointer"> &gt; </span>
              </div>
              <div className="flex justify-between">
                <span>Saved Login</span>
                <span className="text-blue-500 cursor-pointer"> &gt; </span>
              </div>
              <h3 className="text-sm mb-2 text-mid-gray pt-4">Security Checks</h3>
              <div className="flex justify-between">
                <span>Where You’re Logged In</span>
                <span className="text-blue-500 cursor-pointer"> &gt; </span>
              </div>
              <div className="flex justify-between">
                <span>Login Alerts</span>
                <span className="text-blue-500 cursor-pointer"> &gt; </span>
              </div>
              <div className="flex justify-between">
                <span>Security Checkup</span>
                <span className="text-blue-500 cursor-pointer"> &gt; </span>
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white shadow-lg rounded-2xl bg-opacity-80 p-6 font-bold">
            <h2 className="text-lg mb-4 text-mid-gray">Notifications</h2>
            <div className="space-y-6">
              {/* Withdrawal of Funds */}
              <div>
                <h3 className="text-sm mb-2 text-mid-gray">Withdrawal of Funds</h3>
                <div className="flex justify-between items-center">
                  <span>Email Notifications</span>
                  <button
                    onClick={() => handleToggle("withdrawalEmail")}
                    className={`w-12 h-6 rounded-full ${
                      notifications.withdrawalEmail ? "bg-green" : "bg-mid-gray"
                    } relative`}
                  >
                    <div
                      className={`w-5 h-5 bg-gray rounded-full shadow-md transform ${
                        notifications.withdrawalEmail ? "translate-x-6" : "translate-x-0"
                      } transition`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>Message Notifications</span>
                  <button
                    onClick={() => handleToggle("withdrawalMessage")}
                    className={`w-12 h-6 rounded-full ${
                      notifications.withdrawalMessage ? "bg-green" : "bg-mid-gray"
                    } relative`}
                  >
                    <div
                      className={`w-5 h-5 bg-gray rounded-full shadow-md transform ${
                        notifications.withdrawalMessage ? "translate-x-6" : "translate-x-0"
                      } transition`}
                    />
                  </button>
                </div>
              </div>

              {/* Investment Conditions */}
              <div>
                <h3 className="text-sm text-mid-gray mb-2">Investment Conditions</h3>
                <div className="flex justify-between items-center">
                  <span>Email Notifications</span>
                  <button
                    onClick={() => handleToggle("investmentEmail")}
                    className={`w-12 h-6 rounded-full ${
                      notifications.investmentEmail ? "bg-green" : "bg-mid-gray"
                    } relative`}
                  >
                    <div
                      className={`w-5 h-5 bg-gray rounded-full shadow-md transform ${
                        notifications.investmentEmail ? "translate-x-6" : "translate-x-0"
                      } transition`}
                    />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span>Message Notifications</span>
                  <button
                    onClick={() => handleToggle("investmentMessage")}
                    className={`w-12 h-6 rounded-full ${
                      notifications.investmentMessage ? "bg-green" : "bg-mid-gray"
                    } relative`}
                  >
                    <div
                      className={`w-5 h-5 bg-gray rounded-full shadow-md transform ${
                        notifications.investmentMessage ? "translate-x-6" : "translate-x-0"
                      } transition`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
