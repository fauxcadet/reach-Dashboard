import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-blue-100 w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Jur</h1>
      <ul className="space-y-4 text-gray-700">
        <li>Dashboard</li>
        <li>My Cases</li>
        <li>Activities</li>
        <li>Calendar</li>
        <li>Files</li>
        <li>Open a Dispute</li>
      </ul>
      <div className="mt-10">
        <div className="bg-blue-200 rounded-lg p-4 text-center">
          <p>Get Justice on every Claims</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
