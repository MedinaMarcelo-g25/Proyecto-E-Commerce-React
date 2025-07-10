import './ItemListContainer.css';
import Item from '../Item/Item.jsx'
import { useState, useEffect, useCallback } from 'react';
import Loader from '../Loader/Loader.jsx';
import { useNavigate, useParams } from 'react-router';
import { db } from '../../firebaseConfig.js';
import { collection, getDocs } from 'firebase/firestore';
import { useAppContext } from '../../context/context.jsx';

function ItemListContainer() {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoria } = useParams();

    const productosCollection = collection(db, 'productos');
    const ordenesCollection = collection(db, 'ordenes');

    const { carrito, limpiarCarrito } = useAppContext();

    const navigate = useNavigate();


    const filterProducts = useCallback((arrayProducts, category) => {
        if (category) {
            setProducts(arrayProducts.filter(elem => elem.category === categoria));
        } else {
            setProducts(arrayProducts);
        };
    }, [categoria]);

    useEffect(() => {
        if (allProducts.length === 0) {
            setLoading(true);
            getDocs(productosCollection)
                .then(snapshot => {
                    const arrayDeProductos = snapshot.docs.map(el => el.data());
                    setAllProducts(arrayDeProductos);
                    filterProducts(arrayDeProductos, categoria);
                    setLoading(false);
                })
                .catch(err => console.error(err));
        } else {
            filterProducts(allProducts, categoria);
        };
    }, [categoria, allProducts, filterProducts]);

    return (
        <div className='item-list-container'>
            {
                loading ? <Loader />
                    :
                    products.length > 0 ?
                        products.map(elem =>
                            <Item
                                key={elem.id}
                                {...elem}
                            />)
                        :
                        <p>No se han encontrado productos</p>
            }
        </div>
    );
};


export default ItemListContainer;