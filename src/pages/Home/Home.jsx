import React from "react";
import { Categories } from "../../components/categories/Categories";
import { FeaturedProducts } from "../../components/featuredProducts/FeaturedProducts";
import Slider from "../../components/slider/Slider";
import "./home.scss";
export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
    </div>
  );
};
