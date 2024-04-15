import logo from './logo.svg';
import './App.css';
import {Card} from './components/Card';
import { useFetch } from './useFetch';
import React, { useState, useEffect } from 'react';

function App() {

  //LLAMADA AL HOOK CREADO PARA COSULTAR LA API
  const datos = useFetch("https://fakestoreapi.com/products");

  

  return (
    /* TARJETAS QUE CONTIENEN TODOS LOS PRODUCTOS */ 
    <div className="App">
      <Card datos={datos}></Card>
    </div>
  );
}

export default App;
