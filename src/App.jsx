import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/context.jsx';
import { ToastContainer } from 'react-toastify';
import NotFound from './components/NotFound/NotFound.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

function App() {
  return (
    <ContextProvider>
      <ToastContainer />
      <BrowserRouter className='container'>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Nuestra Tienda Online!" />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App
