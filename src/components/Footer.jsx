import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MessageSquare,
} from "lucide-react";
import logo from "../assets/images/logo_white.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Footer() {
  return (
    <footer className="bg-Start rounded-t-[30px] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Description */}

        <div className="flex flex-col items-start space-x-3">
          <img src={logo} alt="logo" className="h-8" />
          <p className="text-sm opacity-80">Powered by Classy Endeavors</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-end space-y-1 mt-4 md:mt-0">
          {/* Social Media Icons */}
          <div className="flex space-x-4 my-4 md:mt-0">
            <Facebook className="hover:text-gray-300 cursor-pointer" />
            <Instagram className="hover:text-gray-300 cursor-pointer" />
            <Linkedin className="hover:text-gray-300 cursor-pointer" />
            <Twitter className="hover:text-gray-300 cursor-pointer" />
            <Mail className="hover:text-gray-300 cursor-pointer" />
            <MessageSquare className="hover:text-gray-300 cursor-pointer" />
          </div>

          <hr className="w-[50%]" />

          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <AnchorLink href="#hero" className="hover:underline">
              Features
            </AnchorLink>
            <AnchorLink href="#why-us" className="hover:underline">
              Why Choose Us
            </AnchorLink>
            <AnchorLink href="#pricing" className="hover:underline">
              Pricing
            </AnchorLink>
            <AnchorLink href="#faqs" className="hover:underline">
              FAQs
            </AnchorLink>
            <a href="#" className="hover:underline">
              Legal terms
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
