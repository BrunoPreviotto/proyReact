import logo from './logo.svg';
import './App.css';
import {Card} from './components/card/Card';

import { BarraNavegacion } from './components/barraNav/BarraNavegacion';



import { useFetch } from './useFetch';
import React, { useState, useEffect } from 'react';

import { Inicio } from './pages/inicio/Inicio';

function App() {

  //LLAMADA AL HOOK CREADO PARA COSULTAR LA API
  const datos = useFetch("https://fakestoreapi.com/products");

  
 return (
    /* TARJETAS QUE CONTIENEN TODOS LOS PRODUCTOS */ 
    <div className="App">
      <BarraNavegacion></BarraNavegacion>
      <Inicio></Inicio>
    </div>

    
  );
}

export {App};
