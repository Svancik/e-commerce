import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../card/Card";
import "./featuredProducts.scss";

export const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Tento header s tokenem musíme poslat v rámci autorizace, jinak nám nedovolí poslat data (token jsme získali te Strapi)
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(data);

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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
