import React from "react";

const Button = ({ title, isPrimary }) => {
  const styles = isPrimary ? "" : "";
  return (
    <button className="px-6 py-2 bg-primary-purple rounded-md">{title}</button>
  );
};

Button.defaultProps = {
  isPrimary: true,
};

export default Button;
