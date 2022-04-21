import React from "react";
import Attribution from "./components/Attribution";
import QRCard from "./components/QRCard";

const App = () => {
  return (
    <div className="w-screen h-screen bg-lightGray relative flex items-center justify-center p-4">
      <QRCard />
      <Attribution />
    </div>
  );
};

export default App;
