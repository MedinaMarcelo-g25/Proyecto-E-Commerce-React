import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound-container">
    <h1 className="notfound-title">404</h1>
    <p className="notfound-text">Página no encontrada</p>
    <Link className="notfound-link" to="/">Volver al inicio</Link>
  </div>
);

export default NotFound;