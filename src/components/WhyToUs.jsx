import React from "react";
import CompanySec from "./CompanySec";
import Reaction from "./Reaction";
import WhyChoose from "./WhyChoose";

function WhyToUs() {
  return (
    <div>
      <div className="flex justify-center -mb-12">
        <section className=" text-black text-center font-bold text-[30px]">
          <span className="bg-linear-to-r from-changeStart to-changeEnd bg-clip-text text-transparent inline-block h-20 mr-2">
            64.0k
          </span>
          businesses and individuals have signed with
          <span className="bg-linear-to-r from-changeStart to-changeEnd bg-clip-text text-transparent inline-block h-20 ml-2">
            DocuTech
          </span>
          <CompanySec />
        </section>
      </div>
      <Reaction/>
      <WhyChoose/>
    </div>
  );
}

export default WhyToUs;
