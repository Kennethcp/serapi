import React from "react";
import backgroundImage from "../assets/background-image.svg";
import gambar1 from "../assets/gallery/gambar1.svg";
import gambar2 from "../assets/gallery/gambar2.svg";
import gambar3 from "../assets/gallery/gambar3.svg";
import gambar4 from "../assets/gallery/gambar4.svg";
import gambar5 from "../assets/gallery/gambar5.svg";
import gambar6 from "../assets/gallery/gambar6.svg";

const Gallery = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Makes the background sit behind other elements
        }}
      ></div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8 items-center mt-16">
        <img
          src={gambar1}
          alt="Cow Feeding"
          className="w-96 h-auto rounded-md shadow-lg"
        />
        <img
          src={gambar2}
          alt="Barn Interior"
          className="w-96 h-auto rounded-md shadow-lg"
        />
        <img
          src={gambar3}
          alt="Cow in Stable"
          className="w-96 h-auto rounded-md shadow-lg"
        />
        <img
          src={gambar4}
          alt="Milking Process"
          className="w-96 h-auto rounded-md shadow-lg"
        />
        <img
          src={gambar5}
          alt="Milking Machine"
          className="w-80 h-auto rounded-md shadow-lg"
        />
        <img
          src={gambar6}
          alt="Additional Image"
          className="w-96 h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Gallery;
