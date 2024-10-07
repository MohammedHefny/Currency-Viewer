import React from "react";
import CurrencyViewer from "./pages/currencyViewer/CurrencyViewer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CurrencyViewer />
    </div>
  );
};

export default App;
