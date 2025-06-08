import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/assets/logo.png" alt="Logo" className="navbar-logo" />
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/Celulares">Celulares</Link></li>
        <li><Link to="/categoria/Perfumería">Perfumería</Link></li>
        <li><Link to="/categoria/Electrónica">Electrónica</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <CartWidget cantidad={2}/>
    </nav>
  );
};

export default Navbar;