import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemRef = doc(db, "items", idProducto);
    getDoc(itemRef)
      .then((resp) => setProduct({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));

    // getProducts()
    //   .then((data) => setProduct(data.find((item) => item.id === idProducto)))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));
  }, []);

  return (
    <>{loading ? <h2>Cargando ...</h2> : <ItemDetail product={product} />}</>
  );
};

export default ItemDetailContainer;
