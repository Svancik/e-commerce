import React from "react";
import { Card } from "../card/Card";
import "./featuredProducts.scss";
import useFetch from "./../../hooks/useFetch";

export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
          ipsam nisi voluptatibus distinctio suscipit porro possimus sit libero,
          esse nobis velit asperiores magni. Porro nemo modi repellat temporibus
          nisi amet odit delectus et expedita perferendis. Quasi nihil, dolor,
          cumque cupiditate labore quae ullam, voluptatum corrupti velit harum
          iste sequi vitae.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};
