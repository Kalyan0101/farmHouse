import React from "react";

function Header() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
    
      >
        <source src="/videos/Aadila_bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header Content */}
      <div className="relative w-full flex justify-around items-center text-white text-xl mt-5">
        <div className="text-3xl">
          <h1>AADILA FARMHOUSE</h1>
        </div>
        <div className="flex gap-10 list-none">
          <li>
            <a className="hover:text-[#AD8B3A] transition duration-300">
              ABOUT US
            </a>
          </li>
          <li>
            <a className="hover:text-[#AD8B3A] transition duration-300">
              DINING
            </a>
          </li>
          <li>
            <a className="hover:text-[#AD8B3A] transition duration-300">
              LOCATION
            </a>
          </li>
          <li>
            <a className="hover:text-[#AD8B3A] transition duration-300">
              CONTACT US
            </a>
          </li>
        </div>
        <div className="text-lg px-11 py-4 text-white font-bold bg-[#AD8B3A] uppercase">
          <button className="hover:bg-white hover:text-[#AD8B3A] transition duration-300">
            Book A Stay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
