import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";

function onAdd(cant) {
  console.log(cant);
}

const ItemListContainer = (props) => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setListProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>{props.greetings}</h1>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList listProducts={listProducts} />
    </>
  );
};

export default ItemListContainer;
