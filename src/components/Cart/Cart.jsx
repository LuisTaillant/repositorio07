import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext();

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          {cartList.map((produ) => (
            <div>
              <li>
                {produ.name} precio: {produ.price} cantidad: {produ.cantidad}
              </li>
              <button onClick={() => borrarItem(produ.item.id)}>x</button>
            </div>
          ))}
          {`la suma es ${sumaTotal()}`}
        </>
      ) : (
        <label>no hay producto vaya ya a comprar</label>
      )}
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
