import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { idProducto } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => setProduct(data.find((item) => item.id === idProducto)))
      .catch((err) => console.log(err));
  }, []);

  console.log(product);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
