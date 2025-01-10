import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="p-4 border rounded shadow-md bg-white">
    <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
    <p className="mt-2 text-gray-700">{content}</p>
  </div>
);

export default Card;
