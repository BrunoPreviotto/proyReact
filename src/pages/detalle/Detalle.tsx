
import { BarraNavegacion } from "../../components/barraNav/BarraNavegacion";
import "./DetalleAlumno.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Objeto } from "../../interfaces/Objeto";
import React from "react";




export const Detalle = () => {
    
    const location = useLocation();
    const  {data} = location.state;
    
   return <div className="">
        <BarraNavegacion></BarraNavegacion>

        <div className="container mt-5 mb-5">

            {<div className="card ">
                <h1 className="card-header">Detalles de: {data.Nombre + " " + data.Apellido}</h1>
                <div className="card-body">
                    
                
                    <div className="clearfix">
                            <div className="card card-cab col-4 float-start me-2" >
                            
                                <div className="cont-img text-center">
                                    <img className="card-img-topimg-fluid  m-0" src="/imagenes/nena.png" alt="Card image" />
                                </div>
                                    
                                <div className="card-body cuerpo-card">
                                    
                                    <ul  className="sin-decoracion">
                                    {Object.entries(data).map(([clave, valor]: [string, any]) => (

                                        <div>
                                        {clave !== 'Nombre' && clave !== 'Apellido' && 
                                            <li>
                                                <span className="badge badge-pequeño mt-1"> {clave}</span>
                                                <b className="ms-1">{valor}</b>
                                            </li>
                                        }
                                        </div>

                                        
                                    ))}

                                        
                                        
                                    </ul>
                                    
                                </div>
                                
                                
                                
                            </div>

                            <div className="col">
                                    <div className="card text-bg-danger mb-3 card-desc" >
                                    <div className="card-header"><h4>Descripción</h4></div>
                                    <div className="card-body">
                                        
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem lacus, rhoncus ut neque a, bibendum cursus ipsum. 
                                        Proin auctor blandit rhoncus. Vestibulum eget magna facilisis, malesuada odio in, ornare enim. Nullam fermentum nibh sed dui venenatis, 
                                        euismod convallis metus dapibus. Etiam non libero et felis rhoncus consectetur. Nullam eu risus et odio iaculis ullamcorper. Curabitur est odio, 
                                        vehicula a hendrerit a, pharetra nec magna. In lacus nisi, bibendum id velit non, pellentesque gravida felis.</p>
                                    </div>
                                    </div>
                            </div>


                    </div>
                </div>
            </div>}

            

        </div>

    </div>;
}