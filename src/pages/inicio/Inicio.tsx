


import { useEffect } from 'react';
import './Inicio.css';

import { TiArrowForward } from "react-icons/ti";
import { FetchData } from '../../utilidades/FetchData';
import { ControladorAlumno } from '../../controller/ControladorAlumno';

import React from 'react';






export const Inicio = () => {
    
    



        useEffect(() => {
          const fetchDataInstance = new FetchData();
          const controlador = new ControladorAlumno(fetchDataInstance);
          
          const obtener = async () => {
              try {
                const data = await controlador.buscarList();
                const d = controlador.inicializarArreglo(data);
                
                
                //setLoading(false);
              } catch (error) {
                //setError(error);
                //setLoading(false);
                
              }
            };
            obtener();
      }, []);

      

    return <div className=" container-fluid p-3">
       

       <div id="section1" className="mt-5 section container-fluid">
            <h1><b>Alumnos</b></h1>

            
            
            

            
            <TiArrowForward size={100} ></TiArrowForward>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>

        <div id="section2" className="section container-fluid">
            <h1>Cursos</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>

        <div id="section3" className="section container-fluid">
            <h1>Colaboradores</h1>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
            <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
        </div>






        
    </div>;
}