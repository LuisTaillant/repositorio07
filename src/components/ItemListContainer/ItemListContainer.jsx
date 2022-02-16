import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setloading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "items");

    const queryF = !idCategoria
      ? queryCollection
      : query(queryCollection, where("category", "==", idCategoria));

    getDocs(queryF)
      .then((resp) =>
        setListProducts(
          resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
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
