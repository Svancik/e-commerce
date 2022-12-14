import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./product.scss";
import { FavoriteBorderOutlinedIcon } from "@mui/icons-material/FavoriteBorderOutlined";
import useFetch from "./../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const Product = () => {
  const [slectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0);

  const productId = useParams().id;

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              {data?.attributes?.img2?.data && (
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              )}
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[slectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={
                  quantity === 0
                    ? () => setQuantity(0)
                    : () => setQuantity((prev) => prev - 1)
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CARD
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
