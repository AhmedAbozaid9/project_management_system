import React from "react";

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
    </div>
  );
};

export default InfoCard;
