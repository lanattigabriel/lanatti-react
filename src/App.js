import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer title='Bienvenido' />
        </Route>
        <Route path='/category/:categoryId'>
          <ItemListContainer title='Categoria de productos' />
        </Route>
        <Route path='/detail/:id'>
          <ItemDetailContainer prodId={2} />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
