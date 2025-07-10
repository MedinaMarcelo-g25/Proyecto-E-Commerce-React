import { Link } from 'react-router';
import './NotFound.css';

const NotFound = () => (
  <div className='notfound-container'>
    <h2>Página no encontrada</h2>
    <p>La página que buscas no existe.</p>
    <Link to="/"><button>Volvé al inicio</button></Link>
  </div>
);

export default NotFound;