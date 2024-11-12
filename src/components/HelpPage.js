import React from "react";
import Sidebar from "./Sidebar";
import backgroundImage from "../assets/background-dashboard.png";

const Help = () => {
  return (
    <div>
      <Sidebar />
      <div
        // className="flex-1 p-8 bg-cover bg-center"
        className="flex min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="p-8 bg-white bg-opacity-50 text-gray-800 rounded-lg shadow-lg ml-80 mr-20 h-max mt-14">
          <h1 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg">
                Q: What is independent farming?
              </h2>
              <p className="text-gray-600">
                A: Independent farming is a self-managed agricultural system
                that focuses on utilizing local resources and sustainability.
                Our goal is to produce high-quality farm products while
                supporting the local economy.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                Q: What types of animals are raised on this farm?
              </h2>
              <p className="text-gray-600">
                A: Currently, we are focusing on increasing our dairy cow
                population to meet the demand for milk.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                Q: How can I invest in independent farming?
              </h2>
              <p className="text-gray-600">
                A: We offer several investment options, including becoming a
                partner in our farming projects and contributing to the
                development of our facilities. If you’re interested to add your
                investment, please contact us through the form on our website.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                Q: Do you provide training for farming?
              </h2>
              <p className="text-gray-600">
                A: Yes, we offer training and workshops on animal husbandry
                techniques, feed management, and sustainable farming practices.
                Please check our events calendar on the website for the latest
                schedule.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                Q: What are the benefits of independent farming for the
                community?
              </h2>
              <p className="text-gray-600">
                A: Independent farming helps improve the availability of local
                food, creates job opportunities, and supports the local economy.
                We are also committed to animal welfare and environmental
                stewardship.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                Q: How can I contact you if I have further questions?
              </h2>
              <p className="text-gray-600">
                A: You can reach us through the contact page on our website or
                send an email to{" "}
                <a
                  href="mailto:piaraandsweetsundae@gmail.com"
                  className="text-blue-600"
                >
                  piaraandsweetsundae@gmail.com
                </a>
                . Our team is ready to assist you with any inquiries you may
                have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
