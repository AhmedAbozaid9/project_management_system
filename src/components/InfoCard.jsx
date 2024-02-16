import React from "react";

const InfoCard = ({ title, number }) => {
  return (
    <div>
      <p>{title}</p>
      <span>{number}</span>
      <p>Projects</p>
    </div>
  );
};

export default InfoCard;
