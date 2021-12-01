import './App.css';
import NavBar from './components/NavBar/NavBar/NavBar';
// import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer prodId={2} />
    </div>
  );
}

export default App;
