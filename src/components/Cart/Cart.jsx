import { useCartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const Cart = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext();

  const realizarCompra = async (e) => {
    e.preventDefault();

    // Nuevo objeto de orders
    let orden = {};

    orden.buyer = dataForm; //{ name: "Luis", email: "LT@gmail.com", phone: "1234567890" };
    orden.total = sumaTotal();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const nombre = cartItem.item.name;
      const precio = cartItem.item.price * cartItem.cantidad;
      const cantidad = cartItem.cantidad;

      return {
        id,
        nombre,
        precio,
        cantidad,
      };
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, orden).then((resp) => setId(resp.id));

    // actualizar stock, no es obligatoria, solo el que quiera.

    //   const queryCollection = collection(db, 'items')

    //   const queryActulizarStock = query(
    //       queryCollection,
    //       where( documentId() , 'in', cartList.map(it => it.item.id) )
    //   )

    //   const batch = writeBatch(db)

    //   await getDocs(queryActulizarStock)
    //   .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    //           stock: res.data().stock - cartList.find(item => item.item.id === res.id).cantidad
    //       })
    //   ))
    //   .catch(err => console.log(err))
    //   .finally(() =>console.log('stock actualizado'))
    // batch.commit()
  };

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {id !== "" && `El id de la orden es : ${id} `}
      <br />
      {cartList.length !== 0 ? (
        <>
          {cartList.map((produ) => (
            <div>
              <div className="card-body">
                <img src={produ.item.imagUrl} alt="" className="w-25" />
                <h4>Precio: {produ.item.price}</h4>
                <h4>Cantidad: {produ.cantidad}</h4>
              </div>
              <button onClick={() => borrarItem(produ.item.id)}>x</button>
            </div>
          ))}
          <br />
          <h4>{`la suma es ${sumaTotal()}`}</h4>
          <br />

          <form onSubmit={realizarCompra}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
              value={dataForm.name}
            />
            <br />
            <input
              type="number"
              name="phone"
              placeholder="tel"
              onChange={handleChange}
              value={dataForm.phone}
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={dataForm.email}
            />

            <br />
            <button>Generar Orden</button>
          </form>
        </>
      ) : (
        <label>no hay producto, vaya ya a comprar</label>
      )}
      <br />
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <br />
    </div>
  );
};

export default Cart;
