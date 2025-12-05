import React from "react";
import Hero from "../components/Hero.jsx";
import Category from "../components/Category.jsx";
import BestSeller from "../components/BestSeller.jsx";
import NewsLetter from "../components/NewsLetter.jsx";

const Home = () => {
  return (
    <div className="m-10">
      <Hero />
      <Category />
      <BestSeller />
      <NewsLetter />
    </div>
  );
};

export default Home;
