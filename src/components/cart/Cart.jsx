import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./cart.scss";

export const Cart = () => {
  const data = [
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNaN: true,
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex sint animi minima! Fuga, ratione explicabo suscipit sint dolore nobis ut beatae, laudantium error voluptate dolor. Aperiam, eum ab numquam cum assumenda inventore eos corporis laboriosam nisi amet quo maxime eius dolorum blanditiis iusto recusandae animi praesentium a enim vel minima, soluta veritatis ut. Officiis ad non recusandae quidem, optio fugiat soluta similique quis molestias et? Necessitatibus quod veritatis, excepturi dicta doloribus omnis ratione facere fugiat fuga, aut modi? Excepturi consectetur ipsa pariatur! Quam, eveniet sint culpa accusamus reiciendis porro doloribus odio adipisci rem fugiat, impedit magni qui similique. Labore!",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, dolorem officia omnis maxime maiores tenetur. Eaque doloremque deleniti rem facilis?",
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>{" "}
            {/* Pomocí substring omezíme počet znaků. */}
            <div className="price">1 x ${item.price} </div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};
