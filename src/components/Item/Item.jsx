import { Link } from 'react-router';
import { useAppContext } from '../../context/context.jsx';
import './Item.css';

function Item({ id, precio, nombre, imagenUrl}) {

    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card">
            <div className="card-image-container">
                <img src={imagenUrl} className="card-image" width="150" height="150" alt="product img" />
            </div>
            <div className="card-content">
                <h3 className="card-nombre">{nombre}</h3>
                <div>
                    <p className="card-precio">$ {precio}</p>
                </div>
                <Link to={`/detalle/${id}`}>
                    <button className="card-button">Ver detalle</button>
                </Link>
                <button className="card-button" onClick={() => agregarAlCarrito({ id, precio, nombre, cantidad: 1 })}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Item;