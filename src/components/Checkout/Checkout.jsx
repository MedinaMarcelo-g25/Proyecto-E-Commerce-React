import { useAppContext } from '../../context/context.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const { carrito, limpiarCarrito } = useAppContext();
  const [finalizado, setFinalizado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleFinalizarCompra = (e) => {
    e.preventDefault();
    setFinalizado(true); 
    limpiarCarrito();     
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  if (finalizado) {
    return <h2>¡Compra finalizada con éxito! Gracias por tu compra.</h2>;
  }

  if (!carrito || carrito.length === 0) {
    return <h2>No hay productos en el carrito.</h2>;
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar compra</h2>
      <ul className="checkout-list">
        {carrito.map((item, idx) => (
          <li key={idx}>
            {item.nombre} x {item.cantidad} = ${item.precio * item.cantidad}
          </li>
        ))}
      </ul>
      <form className="checkout-form" onSubmit={handleFinalizarCompra}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button
          className="checkout-btn"
          type="submit"
          disabled={!nombre || !email}
        >
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;