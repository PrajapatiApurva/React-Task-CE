import React from 'react';
import { useState, useEffect } from "react";
import tick from '../assets/images/tick.png';
import { Upload, Wand2 } from "lucide-react";

function Hero() {
  const texts = [
    "Create",
    "Sign",
    "Convert",
  ];

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <section
        className="text-black text-center font-bold text-6xl px-16"
      >
        AI-Powered Unified Platform; <br/>
        <section
          className='bg-linear-to-r from-changeStart to-changeEnd bg-clip-text text-transparent inline-block h-20'
        >{texts[currentIndex] }</section> Effortlessly
      </section>

      <section
        className="text-Dark text-center text-[19px] px-16 my-8"
      >
        Fast, Smart & Secure –Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
        <br />
        <div className="flex justify-center gap-5 mt-4">
          <section className="flex items-center gap-3 text-[16px]">
            <img src={tick} alt="" className='h-6' />
            ESIGN Compliant
          </section>
          <section className="flex items-center gap-3 text-[16px]">
            <img src={tick} alt="" className='h-6' />
            UETA Approved
          </section>
          <section className="flex items-center gap-3 text-[16px]">
            <img src={tick} alt="" className='h-6' />
            eIDAS Certified
          </section>
        </div>
      </section>
      
      {/* Upload Section */}
      <div className="flex items-center gap-4 p-4 ">
        {/* File Upload Box */}
        <label className="flex items-center justify-between h-[63px] w-[484px] border rounded-[30px] pl-4 pr-2 py-2 cursor-pointer shadow-sm">
          <span>Drop your file here</span>
          <input type="file" className="hidden" onChange={handleFileChange} />
          <button className="flex items-center gap-2 bg-Start text-white px-4 rounded-[65px] h-[47px] w-[149px] hover:bg-blue-900">
            <Upload size={18} /> Upload File
          </button>
        </label>
        <span>OR</span>
        {/* Generate with AI Button */}
        <button className="flex items-center gap-2 bg-Start text-white px-4 rounded-3xl h-[47px] w-[181px] hover:bg-blue-900">
          <Wand2 size={18} /> Generate with AI
        </button>
      </div>

      {/* Video Section */}
      <div id='videoSection' className="flex items-center justify-center gap-4 h-[681px] w-[704px] border border-Dark rounded-[20px] p-4 m-4">
      
      </div>

    </div>
  )
}

export default Hero