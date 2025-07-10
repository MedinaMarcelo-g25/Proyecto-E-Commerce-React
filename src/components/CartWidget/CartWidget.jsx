import { IoCart } from "react-icons/io5";
import './CartWidget.css';
import { useAppContext } from '../../context/context.jsx';

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <p onClick={() => console.log("ESTE ES TU CARRITO", carrito)}>🛒 ({carrito.reduce((acc,value) => acc += value.cantidad, 0)})</p>
    );
};

export default CartWidget;