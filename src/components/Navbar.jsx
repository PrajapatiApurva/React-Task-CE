import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/images/logo.png";
import github from "../assets/images/github.png";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  // Taking this as flag for open and close of mobile menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-around items-center font-['Poppins'] text-navText py-4 px-12 md:px-12 w-full relative">
      <div className="flex items-center justify-between w-full md:w-auto">
        <AnchorLink href="#">
          <img src={logo} alt="logo" className=" h-8" />
        </AnchorLink>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX/> : <FiMenu/>}
        </button>
      </div>

      <div 
        className= {`${
          isOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col bg-white shadow-md md:shadow-none md:flex md:flex-row md:static md:w-auto md:bg-transparent space-y-4 md:space-y-0 md:space-x-5 mt-4 md:mt-0 p-6 md:mt-0 p-6 md:p-0`}
      >
        <AnchorLink href="#hero">Features</AnchorLink>
        <AnchorLink href="#why-us">Why Choose Us</AnchorLink>
        <AnchorLink href="#pricing">Pricing</AnchorLink>
        <AnchorLink href="#faqs">FAQs</AnchorLink>
      </div>
      <div className="hidden md:flex space-5 items-center">
        <img src={github} alt="github" className="w-8 h-8" />
        <button className="bg-Start text-white px-5 py-2 rounded-lg font-bold">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
