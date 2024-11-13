// src/components/ManageCowsPage.js
import React from "react";
import Sidebar from "../components/Sidebar";
import backgroundImage from "../assets/background-manage-cows.svg";
import consumption from "../assets/manage_cows/Consumption.svg";
import cowCycle from "../assets/manage_cows/Cow Cycle.svg";
import healthCondition from "../assets/manage_cows/Health Condition.svg";
import milkProduction from "../assets/manage_cows/Milk Production.svg";

const ManageCowsPage = () => {
  return (
    <div>
      <Sidebar />
      <div
        className="flex min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-2 gap-3 ml-80 p-10 mt-14 overflow-y-hidden ">
          <div className="flex justify-center">
            <img src={healthCondition} alt="Health Condition" />
          </div>
          <div className="flex justify-center">
            <img src={milkProduction} alt="Milk Production" />
          </div>
          <div className="flex justify-center">
            <img src={consumption} alt="Consumption" />
          </div>
          <div className="flex justify-center">
            <img src={cowCycle} alt="Cow Cycle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCowsPage;
