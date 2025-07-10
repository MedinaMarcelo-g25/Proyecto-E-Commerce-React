import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { toast } from "react-toastify";

// 1.
const AppContext = createContext();

// 5.
export const useAppContext = () => useContext(AppContext);

// 2.
export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = useCallback((producto) => {
        setCarrito(prevCarrito => {
            if (prevCarrito.some(el => el.id === producto.id)) {
                return prevCarrito.map(element =>
                    element.id === producto.id
                        ? { ...element, cantidad: element.cantidad + producto.cantidad }
                        : element
                );
            } else {
                return [...prevCarrito, producto];
            }
        });
        toast('Se agregó un producto correctamente al carrito', { autoClose: 500 });
    }, []);

    const limpiarCarrito = useCallback(() => {
        setCarrito([]);
    }, []);

    const value = useMemo(() => ({
        carrito,
        agregarAlCarrito,
        limpiarCarrito
    }), [carrito, agregarAlCarrito, limpiarCarrito]);

    // 3.
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};