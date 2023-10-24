import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Filters } from "./Components/Filters/Filters";
import { Home } from "./Components/ProductList/Home/Home";
import { Cart } from "./Components/ShoppingCart/Cart/Cart";



function App() {
  return (
    <div>
      <h1>Front-End-Project</h1>
      <Filters />
      <Home />
      <Cart />

    </div>
  );
}

export default App;
