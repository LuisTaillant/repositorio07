import React from "react";

const Item = ({ id, name, stock, category, price, imag }) => {
  return (
    <>
      <h1>{name}</h1>
      <h4>Category: {category}</h4>
      <h4>Stock: {stock}</h4>
      <h4>Price: ${price}</h4>
      <img src={imag} alt={name} />
    </>
  );
};

export default Item;
