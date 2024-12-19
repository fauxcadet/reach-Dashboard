import React from "react";

const InputField = ({ label, placeholder }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-semibold text-gray-600">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="border rounded p-2 focus:outline-blue-500"
    />
  </div>
);

export default InputField;
