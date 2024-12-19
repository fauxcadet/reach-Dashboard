import React from "react";
import Sidebar from "./components/Sidebar";
import TopProgress from "./components/TopProgress";
import ClaimForm from "./components/ClaimForm";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopProgress />
        <div className="p-6">
          <ClaimForm />
        </div>
      </div>
    </div>
  );
}

export default App;

