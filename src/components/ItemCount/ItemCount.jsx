import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [contador, setcontador] = useState(initial);

  const handleAumentar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    }
  };

  const handlerRestar = () => {
    if (contador > initial) {
      setcontador(contador - 1);
    }
  };

  const agregar = () => {
    onAdd(contador);
  };

  return (
    <div className="container w-50">
      <button className="btn btn-outline-primary" onClick={handleAumentar}>
        {" "}
        +{" "}
      </button>
      {contador}
      <button className="btn btn-outline-primary" onClick={handlerRestar}>
        {" "}
        -{" "}
      </button>
      <br />
      <button className="btn btn-outline-primary btn-block" onClick={agregar}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
