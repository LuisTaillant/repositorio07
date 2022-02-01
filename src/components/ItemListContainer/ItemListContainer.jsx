import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";

function onAdd(cant) {
  console.log(cant);
}

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  // const [loading, setloading] = useState([true]);

  const { idCategoria } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) =>
        setListProducts(
          idCategoria ? data.filter((el) => el.category === idCategoria) : data
        )
      )
      .catch((err) => console.log(err));
    // .finally(() => setloading(false));
  }, [idCategoria]);

  return (
    <>
      {/* <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
      <ItemList listProducts={listProducts} />
    </>
  );
};

export default ItemListContainer;
