import './App.css';
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
// Font Awesome Cart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <NavBar>
      <FontAwesomeIcon icon={faShoppingCart} className="cart" />
      </NavBar>
      <ItemListContainer greeting="Bienvenido" />
    </div>
  );
}

export default App;
