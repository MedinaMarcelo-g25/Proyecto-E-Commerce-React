import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Nuestra Tienda Online!" />
    </div>
  );
};

export default App
