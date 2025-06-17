import React from "react";
import Navbar from "./components/Navbar.jsx";
import Mainroutes from "./Routes/Mainroutes.jsx";

const App = () => {
  return (
    <div className="bg-[#f4e7cf] xl:px-15 min-h-[100vh]">
      {/* <Navbar /> */}
      <Mainroutes />
    </div>
  );
};

export default App;
