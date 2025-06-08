import './ItemListContainer.css';
import Item from '../Item/Item.jsx'
import getProductos from '../../servicios/mockServicios.js';
import { useState, useEffect, useCallback } from 'react';
import Loader from '../Loader/Loader.jsx';
import { useParams } from 'react-router';

function ItemListContainer() {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoria } = useParams();

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
            getProductos()
                .then(result => {
                    setAllProducts(result);
                    filterProducts(result, categoria);
                    setLoading(false);

                }).catch((err) => { alert(err) });
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