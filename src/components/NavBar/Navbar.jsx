import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <CartWidget cantidad={2}/>
    </nav>
  );
};

export default Navbar;