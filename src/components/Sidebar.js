// src/components/Sidebar.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dashboard from "../assets/dashboard_icon/dashboard.svg";
import help from "../assets/dashboard_icon/help.svg";
// import investmentreport from "../assets/dashboard_icon/investment-report.svg";
import logout from "../assets/dashboard_icon/logout.svg";
import managecows from "../assets/dashboard_icon/manage-cows.svg";
import settings from "../assets/dashboard_icon/settings.svg";
import withdrawalfunds from "../assets/dashboard_icon/withdrawal of funds.svg";
import avatar from "../assets/Avatar.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: dashboard },
    { name: "Manage Cows", path: "/manage-cows", icon: managecows },
    // { name: "Investment Report", path: "/investment-report", icon: investmentreport },
    { name: "Help", path: "/help", icon: help },
    { name: "Withdrawal of Funds", path: "/withdrawal-of-funds", icon: withdrawalfunds },
  ];

  const handleItemClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className=" top-20 left-10 w-64 h-[80vh] bg-white shadow-lg z-10 flex flex-col justify-between p-4 rounded-lg mt-4 fixed">
      <div>
        {menuItems.map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item)}
            className={`group flex items-center gap-4 p-2 my-2 rounded-lg cursor-pointer ${
              location.pathname === item.path
                ? "bg-deepblue text-white"
                : "text-black"
            } hover:bg-deepblue hover:text-white`}
          >
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className={`w-6 h-6 ${
                location.pathname === item.path
                  ? "invert brightness-0 contrast-100"
                  : ""
              } group-hover:invert group-hover:brightness-0 group-hover:contrast-100`}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <div>
        <Link to='/userpage' className="flex items-center gap-4 my-4">
          <img
            src={avatar}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <div className="text-gray-700 font-semibold">User</div>
              <div className="text-sm text-gray-500 bg-sky-blue px-2 py-1 rounded-full inline-block">
                Investor
              </div>
          </div>
        </Link>

        <div
          className={`group flex items-center gap-4 p-2 my-2 rounded-3xl cursor-pointer ${
            location.pathname === "/settings"
              ? "bg-deepblue text-white"
              : "text-black"
          } hover:bg-deepblue hover:text-white`}
          onClick={() => navigate("/settings")}
        >
          <img
            src={settings}
            alt="Settings icon"
            className={`w-6 h-6 ${
              location.pathname === "/settings"
                ? "invert brightness-0 contrast-100"
                : ""
            } group-hover:invert group-hover:brightness-0 group-hover:contrast-100`}
          />
          <span>Settings</span>
        </div>

        <div
          className={`group flex items-center gap-4 p-2 my-2 rounded-3xl cursor-pointer ${
            location.pathname === "/login"
              ? "bg-red text-white"
              : "text-black"
          } hover:bg-red hover:text-white`}
          onClick={() => navigate("/login")}
        >
          <img
            src={logout}
            alt="Logout icon"
            className="w-6 h-6 group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
          />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
