import './CartWidget.css';
import { useAppContext } from '../../context/context.jsx';
import { Link } from 'react-router-dom';

function CartWidget() {

    const { carrito } = useAppContext();

    return (
        <Link to="/carrito">
            <span className="cart-icon">🛒 ({carrito.reduce((acc,value) => acc += value.cantidad, 0)})</span>
        </Link>
    );
};

export default CartWidget;