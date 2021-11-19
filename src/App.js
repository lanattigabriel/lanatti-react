import './App.css';
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido" />
    </div>
  );
}

export default App;
