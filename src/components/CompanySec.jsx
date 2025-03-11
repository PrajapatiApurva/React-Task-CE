import com_1 from "../assets/images/company/com_1.png";
import com_2 from "../assets/images/company/com_2.png";
import com_3 from "../assets/images/company/com_3.png";
import com_4 from "../assets/images/company/com_4.png";
import com_5 from "../assets/images/company/com_5.png";
import com_6 from "../assets/images/company/com_6.png";

function CompanySec() {
  const companies = [com_1, com_2, com_3, com_4, com_5, com_6];
  return (
    <div className="flex flex-wrap justify-center md:justify-around items-center h-auto md:h-[155px] w-full px-4 mb-12">
      {companies.map((company, index) => (
        <img
          key={index}
          src={company}
          alt=""
          className="h-[28px] w-[120px] md:w-[150px] lg:w-[180px] object-contain"
        />
      ))}
    </div>
  );
}

export default CompanySec;
