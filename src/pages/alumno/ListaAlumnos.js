import { Navigate, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./ListaAlumnos.css";

import React, { useEffect, useRef, useState } from 'react';
import { FormularioCargarAlumno } from '../form/FormularioCargarAlumno';
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";





export const ListaAlumnos = ({alumnos}) => {
    
    
    
    
    
    const navigate = useNavigate();

   
    return <div class="container">
               <div class="clearfix"> 
                    
                    

                    <button  class="color-boton boton-agregar border-1 btn rounded-5 mt-5 float-end p-0" data-bs-toggle="modal" data-bs-target="#modalForm">
                        <IoMdAdd size={30}></IoMdAdd>
                    </button>

                    <input class="form-control w-25 mt-5 mb-0 float-lg-start" type="text" />

                    <button  class="btn color-boton rounded-1 mt-5 mx-2">
                       Buscar
                    </button>
        
               </div>
                
                <table class="text-center mt-1 table border border-1 border-secondary  table-hover">
                   
                    <thead class="">
                        <tr class="">
                            <th scope="col">
                                ID
                            </th>
                            <th scope="col">
                                Nombre
                            </th>
                            <th scope="col">
                                Apellido
                            </th>
                            <th scope="col">
                                Edad
                            </th>
                            <th scope="col">
                                Gestionar
                            </th>
                        </tr>
                    </thead>
                    <tbody class="">
                        { alumnos.length > 0 && alumnos.map(alumno => (
                            <tr key={alumno.id}  class="table-bordered border-secondary" onClick= {() => {navigate(`/detalleAlumno/${alumno.id}`)}}>
                                <td>
                                    {alumno.id}
                                </td>
                                <td>
                                    {alumno.nombre.nombre}
                                </td>
                                <td>
                                    {alumno.nombre.apellido}
                                </td>
                                <td>
                                    {alumno.edad}
                                </td>
                                <td>
                                    <button class="btn btn-danger btn-sm mx-1"> <FaTrash></FaTrash> Eliminar</button>
                                    <button class="btn btn-primary btn-sm mx-1">Actualizar</button>
                                </td>
                            </tr>
                           
                            
                        ))}
                    </tbody>
                </table>
                <FormularioCargarAlumno></FormularioCargarAlumno>

                        
               
        </div>;

}



