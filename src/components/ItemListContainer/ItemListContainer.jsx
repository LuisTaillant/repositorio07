import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function onAdd(cant) {
  console.log(cant);
}

const ItemListContainer = (props) => {
  return (
    <div>
      {props.greetings}
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
