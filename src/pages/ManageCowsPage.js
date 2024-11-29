import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import backgroundImage from "../assets/background-manage-cows.svg";

const ManageCowsPage = () => {
  const navigate = useNavigate();

  const cows = [
    { id: "FH1000", milkingId: "110420241000", milkAmount: 23, condition: "Very Good", cycle: "Lactation" },
    { id: "FH1001", milkingId: "110420241001", milkAmount: 22, condition: "Very Good", cycle: "Lactation" },
    { id: "FH002", milkingId: "110420241002", milkAmount: 20, condition: "Good Enough", cycle: "Lactation" },
    { id: "FH003", milkingId: "120420241000", milkAmount: 21, condition: "Good", cycle: "Gestation" },
    { id: "FH004", milkingId: "120420241001", milkAmount: 20, condition: "Good Enough", cycle: "Gestation" },
  ];

  const handleNavigate = () => {
    navigate("/managecowdetailed");
  };

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

        {/* Table */}
        <div className="bg-white rounded-lg shadow-md p-44 bg-opacity-50 mx-auto my-auto mt-24">
          <table className="w-full border-collapse  text-left">
            <thead className="bg-deepblue text-white font-bold">
              <tr>
                <th className="p-2 border-4 border-darkgray border-x-0">Cow ID</th>
                <th className="p-2 border-4 border-darkgray border-x-0">Milking ID</th>
                <th className="p-2 border-4 border-darkgray border-x-0">Amount of Milk (liters)</th>
                <th className="p-2 border-4 border-darkgray border-x-0">Cow Condition</th>
                <th className="p-2 border-4 border-darkgray border-x-0">Cow Cycle</th>
                <th className="p-2 border-4 border-darkgray border-x-0 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {cows.map((cow, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border-4 border-darkgray border-x-0 ">{cow.id}</td>
                  <td className="p-2 border-4 border-darkgray border-x-0 ">{cow.milkingId}</td>
                  <td className="p-2 border-4 border-darkgray border-x-0 text-center ">{cow.milkAmount}</td>
                  <td className="p-2 border-4 border-darkgray border-x-0 ">{cow.condition}</td>
                  <td className="p-2 border-4 border-darkgray border-x-0 ">{cow.cycle}</td>
                  <td className="p-2 border-4 border-darkgray border-x-0  text-center">
                    <button
                      onClick={handleNavigate}
                      className="bg-deepblue text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                    >
                      &gt;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCowsPage;
