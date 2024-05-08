import { HTMLInputTypeAttribute } from "react";
import { Objeto } from "../interfaces/Objeto";

class Alumno implements Objeto{
  #id : number | undefined;
  #nombre : string | undefined;
  #apellido : string | undefined;
  #edad : number | undefined;
  

  constructor(id : number, nombre : string, apellido : string, edad : number){
    this.#id = id;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#edad = edad;
  }

  

  setAllProperties(prop : string, val : string) : Alumno | undefined{
    
    switch (prop.toLocaleLowerCase()) {
      case 'edad':
        this.#edad = Number(val);
        break;
      case 'nombre':
        this.#nombre =  val;
        break;
      case 'apellido':
        this.#apellido =  val;
        break;
      default:
        break;
    }
    
    
    return this;
    
    
  }
  getAll(val : string) : string | undefined{
    switch (val.toLocaleLowerCase()) {
      case 'edad':
        return String(this.#edad);
        break;
      case 'nombre':
        return this.#nombre;
        break;
      case 'apellido':
        return this.#apellido;
        break;
      default:
        return undefined;
        break;
    }
  }

  obtenerObjeto() : {}{
    return {
      ID : this.#id,
      Edad: this.#edad,
      Nombre: this.#nombre,
      Apellido: this.#apellido
    }
  }

  obtenerClaves() : string[]{
    return ['Nombre', 'Apellido', 'Edad'];
  };

  getMap(){
    const mapa = new Map();
    mapa.set('ID', this.#id);
    mapa.set('Nombre', this.#nombre);
    mapa.set('Apellido', this.#apellido);
    mapa.set('Edad', this.#edad);
    return mapa;
  }

  obtenerTipoElemento(dato : string) : string{
    switch(dato){
      case 'Nombre':
        return 'text';
        break;
      case 'Edad':
          return 'number';
          break;
      default:
        return ''; 
         
    }
  }

  obtenerTipoDato(dato : any) : string{
    switch(dato){
      case 'Nombre':
        return 'text';
        break;
      case 'Edad':
          return 'number';
          break;
      default:
        return ''; 
         
    }
    
  }
}

export {Alumno};


/*import { useFetch } from "../../useFetch";
import { BarraNavegacion } from "../principales/BarraNavegacion";
import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import {ListaAlumnos} from './ListaAlumnos';


export const FetchDataContext = createContext();

export const Alumno = () => {
 
  const {data: alumnosFetch, loading, error, fetchData} = useFetch("http://localhost:9898/alumnos");
  const spin = Array.from({ length: 5 }, (_, index) => <div class="spinner-grow text-info m-1"></div>);
  
  //const {dalumnos, e, l}  = useFetch("http://localhost:9898/alumnos");
  const [alumnos, setAlumnos] = useState('');

  

  useEffect(() => {
    if (alumnosFetch) {
      setAlumnos(alumnosFetch); // Suponiendo que "data" es un objeto JSON con una propiedad "someProperty"
    }
  }, [alumnosFetch]);
  
  
  const handleReloadData = () => {
    fetchData();
  };

   
   
  
if(error){
    return <div class="">
      <BarraNavegacion></BarraNavegacion>
      
      <div class="mt-5 text-center">
        <h1>
          Error: {error.message}
        </h1>
      </div>
      
      
    </div>;
  }
  
  if(loading){
    
    return <div class="">
     <BarraNavegacion></BarraNavegacion>

     <div class="mt-5 text-center">
      {spin}
     </div>
    
     
    </div>;
  }

  return <div class="">
    
    <BarraNavegacion></BarraNavegacion>
    <FetchDataContext.Provider value={handleReloadData}>
        <ListaAlumnos alumnos={alumnos}></ListaAlumnos>
    </FetchDataContext.Provider>
    
   
  </div>;
}

*/