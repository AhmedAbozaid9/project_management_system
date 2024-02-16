import React from "react";

const Button = ({ title, isPrimary, action }) => {
  return (
    <button
      onClick={action}
      className={`text-sm font-medium px-6 py-2 rounded-md ${
        isPrimary ? "bg-primary-purple" : "border-2"
      }`}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  isPrimary: true,
};

export default Button;
