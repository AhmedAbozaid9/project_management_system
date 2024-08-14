import React from "react";
import Image from "next/image";

const InfoCard = ({ title, color, icon, name, summary }) => {
  console.log(summary);
  return (
    <div className="flex flex-col flex-1 bg-main-dark-bg p-5 rounded-lg w-full">
      <p className="text-secondary-text text-sm pb-3">{title}</p>
      <div className="flex justify-between items-center ">
        <p style={{ color }} className="text-lg sm:text-xl font-semibold">
          {summary && summary[name]} Projects
        </p>
        {icon}
      </div>
        <Image src={'https://res.cloudinary.com/ddq1krznj/image/upload/f_auto,q_auto/shoes?_a=BAMABkRg0.png'} alt={'test'} width={300} height={300} />
    </div>
  );
};

export default InfoCard;
