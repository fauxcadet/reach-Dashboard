import React from "react";

const TopProgress = () => {
  const steps = ["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"];

  return (
    <div className="flex justify-around items-center w-full p-4 bg-gray-50">
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className={`w-8 h-8 rounded-full ${index < 3 ? "bg-blue-500" : "bg-gray-300"}`}></div>
          <p className="text-xs mt-2">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default TopProgress;
