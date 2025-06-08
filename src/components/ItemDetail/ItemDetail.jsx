import { Link, useParams } from 'react-router';
import './ItemDetail.css';
import { useEffect, useState } from 'react';
import getProductos from '../../servicios/mockServicios';
import Loader from '../Loader/Loader';
import Contador from '../Contador/Contador';

function ItemDetail() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

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
                    <Contador />
                    <button className="card-button">Agregar al carrito</button>
                </div>
            </div>
    );
};

export default ItemDetail;


