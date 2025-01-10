import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-700 mt-2">{email}</p>
      <p className="text-gray-500 mt-4">
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
