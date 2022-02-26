import React from "react";
import Item from "../Item/Item";

const ItemList = ({ listProducts }) => {
  return (
    <>
      {listProducts.map((el) => (
        <Item
          key={el.id}
          name={el.name}
          stock={el.stock}
          price={el.price}
          category={el.category}
          imag={el.imagUrl}
          id={el.id}
        />
      ))}
    </>
  );
};

export default ItemList;
