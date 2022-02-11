import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import getProducts from "../../helpers/getProducts";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) =>
        setListProducts(
          idCategoria ? data.filter((el) => el.category === idCategoria) : data
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [idCategoria]);

  console.log(idCategoria);

  return (
    <>
      {loading ? (
        <h2>Cargando ...</h2>
      ) : (
        <ItemList listProducts={listProducts} />
      )}
    </>
  );
};

export default ItemListContainer;
