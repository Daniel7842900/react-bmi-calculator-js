import React from "react";

const Card = ({ children, className }) => {
  const cardClassName = `max-w-sm rounded-lg overflow-hidden shadow-lg bg-orange-200 w-80 h-96 ${className}`;
  return <div className={cardClassName}>{children}</div>;
};

export default Card;
