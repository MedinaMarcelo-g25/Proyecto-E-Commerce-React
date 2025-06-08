import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router';

function App() {
  return (
    <BrowserRouter className='container'>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Nuestra Tienda Online!" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/detalle/:id" element={<ItemDetail />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
