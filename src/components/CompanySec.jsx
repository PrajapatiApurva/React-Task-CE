import {useState} from "react";
import com_1 from "../assets/images/company/com_1.png";
import com_2 from "../assets/images/company/com_2.png";
import com_3 from "../assets/images/company/com_3.png";
import com_4 from "../assets/images/company/com_4.png";
import com_5 from "../assets/images/company/com_5.png";
import com_6 from "../assets/images/company/com_6.png";

function CompanySec() {
  const companies = [com_1, com_2, com_3, com_4, com_5, com_6];
  return (
    <div className="flex justify-around align-middle h-[155px] w-[100%] gap-4 mt-4">
      {companies.map((company, index) => (
        <img
          key={index}
          src={company}
          alt=""
          className={`h-[28px] w-[180px] object-contain`}
        />
      ))}
    </div>
  );
}

export default CompanySec;
