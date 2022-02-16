import { useCartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  documentId,
  writeBatch,
  getDocs,
} from "firebase/firestore";

const Cart = () => {
  const { cartList, vaciarCarrito, sumaTotal, borrarItem } = useCartContext();

  const realizarCompra = async (e) => {
    e.preventDefault();

    // Nuevo objeto de orders
    let orden = {};
    //orden.date = Timestamp.fromDate(new Date())

    orden.buyer = { name: "Luis", email: "LT@gmail.com", phone: "1234567890" };
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
    await addDoc(ordersCollection, orden).then((resp) => console.log(resp));

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

  console.log(cartList);

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
        <label>no hay producto, vaya ya a comprar</label>
      )}
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <br />
      <button onClick={realizarCompra}>Crear Orden</button>
    </div>
  );
};

export default Cart;
