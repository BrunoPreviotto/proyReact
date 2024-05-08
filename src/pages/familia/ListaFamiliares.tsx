

import { BarraNavegacion } from "../../components/barraNav/BarraNavegacion";
import React, { useState, useEffect} from 'react';

import {Lista} from '../list/Lista';

import { FetchData } from "../../utilidades/FetchData";
import {ControladorFamiliar} from '../../controller/ControladorFamiliar';




export const ListaFamiliares = () => {

  const spin = Array.from({ length: 5 }, (_, index) => <div className="spinner-grow text-info m-1"></div>);
  const [familiares, setFamiliares] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  
  useEffect(() => {
    const fetchDataInstance = new FetchData();
    const controladorFamiliar = new ControladorFamiliar(fetchDataInstance);
    
    const obtenerFamiliares = async () => {
      try {
        const data = await controladorFamiliar.buscarList();
        setFamiliares(controladorFamiliar.inicializarArreglo(data));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    obtenerFamiliares();
    
  }, []);
  
  

 /*const handleReloadData = () => {
    //fetchData();
  };*/

 
  
  
if(error){
    return <div >
      <BarraNavegacion></BarraNavegacion>
      
      <div className="mt-5 text-center">
        <h1>
          Error: {error}
        </h1>
      </div>
      
      
    </div>;
  }
  
  if(loading){
    
    return <div>
     <BarraNavegacion></BarraNavegacion>

     <div className="mt-5 text-center">
      {spin}
     </div>
    
     
    </div>;
  }
 
 
  //<Lista datos={familiares}></Lista>

  return <div >
    
    <BarraNavegacion></BarraNavegacion>
    
   
    
               
  </div>;
}

