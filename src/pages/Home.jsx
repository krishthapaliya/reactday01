import React from "react";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Featured from "../component/Featured";

const Home = () => {
  return (
    <div className="mx-20">
      <Navbar />
      <Hero />
      <Featured />
    </div>
  );
};

export default Home;
