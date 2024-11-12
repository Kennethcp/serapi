// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboard from '../assets/dashboard_icon/dashboard.svg';
import help from '../assets/dashboard_icon/help.svg';
import investmentreport from '../assets/dashboard_icon/investment-report.svg';
import logout from '../assets/dashboard_icon/logout.svg';
import managecows from '../assets/dashboard_icon/manage-cows.svg';
import settings from '../assets/dashboard_icon/settings.svg';
import withdrawalfunds from '../assets/dashboard_icon/withdrawal of funds.svg';

const Sidebar = () => {
  const [active, setActive] = React.useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: dashboard },
    { name: "Manage Cows", path: "/manage-cows", icon: managecows },
    { name: "Investment Report", path: "/investment-report", icon: investmentreport },
    { name: "Help", path: "/help", icon: help },
    { name: "Withdrawal of Funds", path: "/withdrawal-of-funds", icon: withdrawalfunds },
  ];

  const handleItemClick = (item) => {
    setActive(item.name);
    navigate(item.path);
  };

  return (
    <div className="absolute top-20 left-10 w-64 h-[80vh] bg-white shadow-lg z-10 flex flex-col justify-between p-4 rounded-lg mt-4">
      <div>
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`group flex items-center gap-4 p-2 my-2 rounded-3xl cursor-pointer ${
              active === item.name ? "bg-deepblue text-white" : "text-black"
            } hover:bg-deepblue hover:text-white`}
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className="w-6 h-6 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-4 my-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <div className="text-gray-700 font-semibold">User</div>
            <div className="text-sm text-gray-500 bg-blue-100 px-2 py-1 rounded-full inline-block">
              Investor
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setActive("Settings");
            navigate("/settings");
          }}
          className={`group flex items-center gap-4 p-2 my-2 rounded-3xl cursor-pointer ${
            active === "Settings" ? "bg-deepblue text-white" : "text-black"
          } hover:bg-deepblue hover:text-white`}
        >
          <img src={settings} alt="Settings icon" className="w-6 h-6 group-hover:invert group-hover:brightness-0 group-hover:contrast-100" />
          <span>Settings</span>
        </div>

        <div
          className="group flex items-center gap-4 p-2 my-2 rounded-3xl cursor-pointer text-red"
          onClick={() => {
            setActive("Log out");
            navigate("/login");
          }}
        >
          <img src={logout} alt="Logout icon" className="w-6 h-6 group-hover:invert group-hover:brightness-0 group-hover:contrast-100" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
