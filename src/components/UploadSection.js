import React from "react";

const UploadSection = ({ title }) => {
  return (
    <div className="flex flex-col items-center border-dashed border-2 p-4 rounded-md">
      <p className="text-gray-600">{title}</p>
      <button className="text-blue-500 mt-2">Upload File</button>
    </div>
  );
};

export default UploadSection;
