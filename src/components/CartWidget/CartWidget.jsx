import img from "./carrito/carrito.png";
import { BsCart } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="w-25">
      {/* <img src={img} alt="carrito" className="w-25" /> */}
      <BsCart />
    </div>
  );
};

export default CartWidget;
