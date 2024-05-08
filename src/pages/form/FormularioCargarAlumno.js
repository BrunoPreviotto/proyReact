import { useFetch } from "../../useFetch";
import { BarraNavegacion } from "../../components/barraNav/BarraNavegacion";

import axios from 'axios';

import React, { useState, useEffect, useContext } from 'react';
import { Alumno, FetchDataContext } from "../../model/Alumno";



export const FormularioCargarAlumno = () => {
  
  const funcionDelContexto = useContext(FetchDataContext);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  
  const[mensaje, setMensaje] = useState('');
  const[clasesMensaje, setClasesMensaje] = useState('');
 
const tiempoDemoraTexto = () => {
  setTimeout(() => {
    // Después de que la función ha terminado, cierra el modal
    setMensaje('');
    setClasesMensaje('');
  }, 5000);
}

  
const handleSubmit = async (e) => {
    
    e.preventDefault();

   if(nombre != '' && apellido != '' && edad != ''){


    fetch('http://localhost:9898/agregarAlumno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nombre:{nombre: nombre, apellido: apellido}, edad: edad})
    })
    .then(response => {
      if (!response.ok) {
        setMensaje('¡Error al crear el alumno!')
        setClasesMensaje('mt-2 text-danger');
        tiempoDemoraTexto();
        
        throw new Error('Error al enviar datos al servidor');
      }else{
        setNombre('');
        setApellido('');
        setEdad('');
        
        setMensaje('¡Alumno creado con éxito!');
        setClasesMensaje('mt-2 text-success');
        tiempoDemoraTexto();
        funcionDelContexto();
            
            
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
      // Puedes manejar la respuesta del servidor aquí
    })
    .catch(error => {
      console.error('Error al enviar datos al servidor:', error);
    });
    
   }else{
        setMensaje('Completar todos los campos para crear el alumno.');
        setClasesMensaje('mt-2 text-danger');
        tiempoDemoraTexto();
   }
    
    /*e.preventDefault();

    try {
      // Enviar datos al backend usando axios
      const response = await axios.post('http://localhost:9898/agregarAlumno', formData);
      console.log('Respuesta del backend:', response.data);
      // Puedes manejar la respuesta del backend aquí
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }*/
  };
  
  


    return <div class="">
          
          

          <div class="modal" id="modalForm">
          
              <div class="modal-dialog">
                  <div class="modal-content">

                  
                  <div class="modal-header">
                      <h4 class="modal-title">Agregar nuevo alumno</h4>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  
                  <div class="modal-body">
                      <form>
                          <h1>{apellido}</h1>
                          <div class="mb-3 mt-3">
                            <label for="nombre" class="form-label">Nombre:</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre" value={nombre} name="nombre" onChange={(e) => setNombre(e.target.value)}/>
                          </div>

                          <div class="mb-3">
                            <label for="apellido" class="form-label">Apellido:</label>
                            <input type="text" class="form-control" id="apellido" placeholder="Apellido" value={apellido} name="apellido" onChange={(e) => setApellido(e.target.value)}/>
                          </div>

                          <div class="mb-3">
                            <label for="edad" class="form-label">Edad:</label>
                            <input type="number" class="form-control" id="edad" placeholder="Edad" value={edad} name="edad" onChange={(e) => setEdad(e.target.value)}/>
                          </div>

                          <button onClick={handleSubmit} class="btn btn-primary">Agregar alumno</button>
                          <br/>
                          <br/>
                          <b class={clasesMensaje}>
                            {mensaje}
                          </b>
                     </form>
                  </div>
                  
                  <div class="modal-footer">
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                      
                     
                  </div>
                  
                  </div>
              </div>
          </div>
        
     
    </div>;
}