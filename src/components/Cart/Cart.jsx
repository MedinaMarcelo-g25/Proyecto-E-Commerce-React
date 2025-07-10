import { useAppContext } from '../../context/context.jsx';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { carrito } = useAppContext();

  if (!carrito || carrito.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Precio total</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item, idx) => (
            <tr key={idx}>
              <td>
                <img src={item.imagenUrl} alt={item.nombre} width={60} height={60} />
              </td>
              <td>{item.nombre}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}</td>
              <td>${item.precio * item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">Total: ${total}</div>
      <Link to="/checkout">
        <button
          style={{
            background: '#6bd85f',
            color: '#222',
            border: 'none',
            borderRadius: 8,
            padding: '0.7rem 2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1.5rem'
          }}
        >
          Finalizar compra
        </button>
      </Link>
    </div>
  );
};

export default Cart;