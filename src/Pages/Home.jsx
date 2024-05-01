import React from "react";
import Nav from "../Sections/Nav";
import Hero from "../Sections/Hero";
import ProductSection from "../Sections/ProductSection";
import CategorySection from "../Sections/CategorySection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductSection />
      <CategorySection />
    </div>
  );
};

export default Home;
