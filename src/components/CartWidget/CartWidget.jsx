import { IoCart } from "react-icons/io5";
import './CartWidget.css';

function CartWidget({cantidad}) {
  return (
    <div className="cart-widget">
      <IoCart className="cart-icon" />
      <div>{cantidad}</div>
    </div>
  );
}

export default CartWidget;