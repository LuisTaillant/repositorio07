import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

//crear un componente

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function agregarAlCarrito(item) {
    console.log(item);
    // -1 no existe en el cart lis, 0 en adelante si is in cart
    const index = cartList.findIndex((prod) => prod.item.id === item.item.id);

    if (index === -1) {
      // no existe, lo agrego
      setCartList([...cartList, item]);
    } else {
      // si existe
      const cant = cartList[index].cantidad;
      cartList[index].cantidad = item.cantidad + cant;
      const newCartList = [...cartList];
      setCartList(newCartList);
    }
  }
  const sumaTotal = () => {
    return cartList.reduce(
      (acum, prod) => (acum = acum + prod.item.price * prod.cantidad),
      0
    );
  };

  const cantidad = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };

  const borrarItem = (id) => {
    setCartList(cartList.filter((prod) => prod.item.id !== id));
  };

  function vaciarCarrito() {
    setCartList([]);
  }
  console.log(cartList);
  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        sumaTotal,
        cantidad,
        borrarItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
