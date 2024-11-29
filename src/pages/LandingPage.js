import React from "react";
import backgroundImage from "../assets/background-image.svg";
import icon1 from "../assets/home_icon/icon_1.svg";
import icon2 from "../assets/home_icon/icon_2.svg";
import icon3 from "../assets/home_icon/icon_3.svg";
import icon4 from "../assets/home_icon/icon_4.svg";
import icon5 from "../assets/home_icon/icon_5.svg";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Add Navbar at the top */}
      <Navbar/>
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-8 mt-24 w-11/12 max-w-full">
          <p className="text-center text-black text-lg font-jakarta">
            <strong>Serapi.co</strong> is a cow investment platform for the Indonesian people.{" "}
            <strong>Serapi.co</strong> will overcome the problem of cow's milk, the majority of
            which is still imported from abroad. The Minister of Cooperatives Budi Arie Setiadi,
            stated that <strong>80% of the supply</strong> of raw materials to meet domestic milk
            consumption comes from imports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Row 1 - Cards 1, 2, 3 */}
            <div className="items-center flex flex-col">
              <div className="bg-deepblue text-white rounded-lg w-72 h-[214px] shadow-lg flex justify-center items-center">
                <img src={icon1} alt="Icon 1" />
              </div>
              <p className="text-center mt-4">
                Using <strong>modern technology</strong> to guarantee quality and direct
                integration with the Serapi.co website
              </p>
            </div>
            <div className="items-center flex flex-col">
              <div className="bg-deepblue text-white rounded-lg w-72 h-[214px] shadow-lg flex justify-center items-center">
                <img src={icon2} alt="Icon 2" />
              </div>
              <p className="text-center mt-4">
                <strong>Regular monitoring</strong> of cow conditions and integrated directly into
                the Serapi.co website
              </p>
            </div>
            <div className="items-center flex flex-col">
              <div className="bg-deepblue text-white rounded-lg w-72 h-[214px] shadow-lg flex justify-center items-center">
                <img src={icon3} alt="Icon 3" />
              </div>
              <p className="text-center mt-4">
                <strong>30% return</strong> on milk sales and <strong>100%</strong> from sales of
                calves, with an average yield of <strong>166.67%</strong> per five years
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 justify-center">
            {/* Row 2 - Cards 4, 5 */}
            <div className="items-center flex flex-col">
              <div className="bg-deepblue text-white rounded-lg w-72 h-[214px] shadow-lg flex justify-center items-center">
                <img src={icon4} alt="Icon 4" />
              </div>
              <p className="text-center mt-4">
                The initial capital is <strong>IDR 30 million</strong> per cow
              </p>
            </div>
            <div className="items-center flex flex-col">
              <div className="bg-deepblue text-white rounded-lg w-72 h-[214px] shadow-lg flex justify-center items-center">
                <img src={icon5} alt="Icon 5" />
              </div>
              <p className="text-center mt-4">
                Using <strong>JASINDO insurance</strong> to minimize risks that could occur to cow
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
