import { createContext, useState, useContext } from "react";

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

//crear un componente

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function agregarAlCarrito(item) {
    setCartList([...cartList, item]);
  }

  function vaciarCarrito() {
    setCartList([]);
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
