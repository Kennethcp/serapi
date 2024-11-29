import React from 'react';
import backgroundImage from "../assets/background-image.svg";
import whatsapp from "../assets/icon_whatsapp.svg";
import instagram from "../assets/icon_instagram.svg";

const ContactUs = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-28 p-4 mt-32 mx-auto">
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-96 bg-white shadow-md rounded-lg">
          <iframe
            title="Location Map"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.3310427589913!2d110.38025580767108!3d-7.74163139111216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDQnMzAuMSJTIDExMMKwMjInNDguOSJF!5e0!3m2!1sen!2sid!4v1633788597741"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-abu rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-abu rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border border-abu rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-abu rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
        </div>
      </div>

      {/* Submit and Social Media Buttons */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-32 gap-6">
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center bg-ijo shadow-lg text-white px-6 py-2 w-64 h-12 rounded-lg hover:bg-green-600"
          >
            <span className="mr-2">
              <img className ="w-12 -ml-1" src={whatsapp} alt="WhatsApp Icon" />
            </span>
            Chat On WhatsApp
          </a>
          <a
            href="#"
            className="flex items-center bg-purple shadow-lg text-white px-6 py-2 w-64 h-12 rounded-lg hover:bg-purple-600"
          >
            <span className="mr-2">
              <img className ="w-8" src={instagram} alt="Instagram Icon" />
            </span>
            Follow On Instagram
          </a>
        </div>
        <button className="bg-deepblue text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
