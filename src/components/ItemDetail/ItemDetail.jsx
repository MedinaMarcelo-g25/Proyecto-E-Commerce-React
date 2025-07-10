import { Link, useParams } from 'react-router';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import getProductos from '../../servicios/mockServicios';
import Loader from '../Loader/Loader';
import Contador from '../Contador/Contador';
import { useAppContext } from '../../context/context.jsx';

function ItemDetail() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    const { agregarAlCarrito } = useAppContext();

    const [cantidad, setCantidad] = useState(1);

    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        };
    };

    function sumarCantidad() {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        };
    };

    function agregarCantidadAlCarrito() {
        agregarAlCarrito({ id: producto.id, precio: producto.precio, nombre: producto.nombre, cantidad });
        setCantidad(1);
    };

    useEffect(() => {
        getProductos()
            .then(result => {
                const product = result.find(elem => elem.id === id);
                setProducto(product);
                setLoading(false);

            }).catch((error) => { alert(error) });
    }, [id])

    return (
        loading ? <Loader /> :
            <div className="card">
                <div className="card-image-container">
                    <img src={producto.imagenUrl} className="card-image" width="150" height="150" alt="product img" />
                </div>
                <div className="card-content">
                    <h3 className="card-title">{producto.nombre}</h3>
                    <p className="card-description">{producto.text}</p>
                    <p className="card-description">Quedan {producto.stock} unidades en stock!</p>
                    <div>
                        <p className="card-price">$ {producto.precio}</p>
                    </div>
                    <Link to={`/`}>
                        <button className="card-button">Volver al inicio</button>
                    </Link>
                    <Contador cantidad={cantidad} sumarCantidad={sumarCantidad} restarCantidad={restarCantidad} />
                    <button className="card-button" onClick={agregarCantidadAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
    );
};

export default ItemDetail;


