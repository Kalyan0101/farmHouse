import React from "react";
import BackgroundVideo from "./Background/BackgroundVideo";
import { useScreenSize } from "../hooks/useScreenSize";

function Header() {
  const screenSize = useScreenSize();

  // Dynamic styles based on screen size
  const headerFontSize =
    screenSize === "xs" || screenSize === "sm" ? "text-lg" : "text-3xl";
  const navFontSize =
    screenSize === "xs" || screenSize === "sm" ? "text-sm" : "text-xl";
  const buttonPadding =
    screenSize === "xs" || screenSize === "sm" ? "px-4 py-2" : "px-11 py-4";

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <BackgroundVideo />

      {/* Header Content */}
      <div className="relative w-full flex flex-wrap justify-around items-center text-white mt-5">
        {/* Logo */}
        <div className={`${headerFontSize}`}>
          <h1>AADILA FARMHOUSE</h1>
        </div>

        {/* Navigation Links */}
        <div className={`flex gap-4 md:gap-10 list-none ${navFontSize}`}>
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

        {/* Book Button */}
        <div className={`text-lg font-bold bg-[#AD8B3A] uppercase ${buttonPadding}`}>
          <button className="hover:bg-white hover:text-[#AD8B3A] transition duration-300">
            Book A Stay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
