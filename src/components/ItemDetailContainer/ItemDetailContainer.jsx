import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => setProduct(data.find((item) => item.id === idProducto)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(product);

  return (
    <>{loading ? <h2>Cargando ...</h2> : <ItemDetail product={product} />}</>
  );
};

export default ItemDetailContainer;
