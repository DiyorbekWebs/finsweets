import React from "react";
import { Link } from "react-router-dom";
import "./btn.css";
const Button = ({ className, child1 }) => {
  return (
    <>
      <button className={className + " btn"}>{child1}</button>
    </>
  );
};

export default Button;
