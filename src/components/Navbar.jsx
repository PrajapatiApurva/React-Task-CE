import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/images/logo.png";
import github from "../assets/images/github.png";

function Navbar() {
  return (
    <nav className="flex justify-around items-center font-['Poppins'] text-navText py-4 px-12">
      <AnchorLink href="#">
        <img src={logo} alt="logo" className=" h-8" />
      </AnchorLink>

      <div className="flex space-x-5">
        <AnchorLink href="#hero">Features</AnchorLink>
        <AnchorLink href="#why-us">Why Choose Us</AnchorLink>
        <AnchorLink href="#pricing">Pricing</AnchorLink>
        <AnchorLink href="#faqs">FAQs</AnchorLink>
      </div>
      <div className="flex space-x-5 items-center">
        <img src={github} alt="github" className="w-8 h-8" />
        <button className="bg-Start text-white px-5 py-2 rounded-lg font-bold">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
