import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [contador, setContador] = useState(0);
  const { agregarAlCarrito } = useCartContext();

  function onAdd(cant) {
    agregarAlCarrito({ item: product, cantidad: cant });
    setContador(cant);
  }

  return (
    <>
      <div key={product.id} className="col">
        <div className="card w-100 mt-5">
          <div className="card-header">{`${product.name} - ${product.category}`}</div>
          <div className="card-body">
            <img src={product.imagUrl} alt="" className="w-50" />
            <h4>Stock: {product.stock}</h4>
            <h4>Price: ${product.price}</h4>
          </div>
          <div className="card-footer"> Excelente producto en stock</div>
        </div>
      </div>
      <div className="col">
        {contador === 0 ? (
          <ItemCount onAdd={onAdd} initial={1} stock={6} />
        ) : (
          <>
            <Link to="/cart">
              <button>Terminar compra</button>
            </Link>
            <Link to="/">
              <button>Seguir comprando</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ItemDetail;
