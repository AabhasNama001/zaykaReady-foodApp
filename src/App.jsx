import React from "react";
import Navbar from "./components/Navbar.jsx";
import Mainroutes from "./Routes/Mainroutes.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="bg-[#f4e7cf]  min-h-[100vh]">
      <div className="xl:px-15 ">
        <Navbar />
        <Mainroutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
