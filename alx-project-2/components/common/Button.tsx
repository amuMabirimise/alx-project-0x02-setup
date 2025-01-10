import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  let sizeClass;
  let shapeClass;

  // Defining the classes for size
  switch (size) {
    case "small":
      sizeClass = "py-2 px-4 text-sm";
      break;
    case "medium":
      sizeClass = "py-3 px-6 text-base";
      break;
    case "large":
      sizeClass = "py-4 px-8 text-lg";
      break;
    default:
      sizeClass = "py-3 px-6 text-base";
      break;
  }

  // Defining the classes for shape
  switch (shape) {
    case "rounded-sm":
      shapeClass = "rounded-sm";
      break;
    case "rounded-md":
      shapeClass = "rounded-md";
      break;
    case "rounded-full":
      shapeClass = "rounded-full";
      break;
    default:
      shapeClass = "rounded-md";
      break;
  }

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClass} ${shapeClass} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
    >
      {children}
    </button>
  );
};

export default Button;
