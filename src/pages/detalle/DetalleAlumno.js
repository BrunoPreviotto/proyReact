import { useEffect, useState } from "react";
import { useFetch } from "../../useFetch";
import { BarraNavegacion } from "../../components/barraNav/BarraNavegacion";
import "./DetalleAlumno.css";
import { Link, useParams } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";




export const DetalleAlumno = () => {
    
    const { id } = useParams();
    //CONSULTA LA API Y TRAE UN SOLO PRODUCTO
    

    const {data: alumno, loading, error, fetchData} = useFetch(`http://localhost:9898/alumno/${id}`);
    const spin = Array.from({ length: 5 }, (_, index) => <div class="spinner-grow text-info m-1"></div>);
    

    
    //const {dalumnos, e, l}  = useFetch("http://localhost:9898/alumnos");
    //const [alumno, setAlumno] = useState('');

    
  console.log(alumno);

    if(loading){
        return <div>
            {spin}
        </div>
    }

    if(error){
        return <div>
            {error.message}
        </div>
    }
         

    return <div class="">
        <BarraNavegacion></BarraNavegacion>

        <div class="container mt-5 mb-5">

            <div class="card ">
                <h1 class="card-header">Detalles del alumno</h1>
                <div class="card-body">
                <h5 class="card-title">{alumno.nombre.nombre != null && 
                            <h4 class="card-title badge badge-grande text-bg-secondary">{alumno.nombre.nombre + " " + alumno.nombre.apellido} 
                             </h4> }
                </h5>


                <div class="clearfix">


                        <div class="card card-cab col-4 float-start me-2" >
                                    

                                    <div class="cont-img text-center">
                                    <img class="card-img-topimg-fluid  m-0" src="/imagenes/nena.png" alt="Card image" />
                                    </div>
                                
                                    <div class="card-body cuerpo-card">
                                        
                                        <ul class="sin-decoracion">
                                            
                                            <li>
                                                <span class="badge badge-pequeño mt-1"> Edad</span>
                                                <b class="ms-1">{alumno.edad}</b>
                                            </li>
                                            <li>
                                                <span class="badge badge-pequeño mt-1"> Curso</span>
                                                <b class="ms-1">curso.</b>
                                                
                                            </li>
                                            <li>
                                                <div>

                                                <span class="badge badge-pequeño mt-1"> Familia </span>
                                               {alumno.familiares.length > 0 ?
                                                <b class="ms-1">{alumno.familiares}</b> : 
                                                <button  class="color-boton boton-agregar  border-1 btn rounded rounded-5 ms-1" data-bs-toggle="modal" data-bs-target="#modalForm">
                                                        <b className="m-0 p-0">+</b>
                                                </button>}

                                                </div>
                                               
                                            </li>
                                            <li>
                                            <span class="badge badge-pequeño mt-1"> Grupo familiar </span>
                                                <b class="ms-1"> Familia Familia.</b>
                                                
                                            </li>
                                           
                                            <li>
                                            <span class="badge badge-pequeño mt-1"> Responsables </span>
                                                <b class="ms-1">Responsable.</b>
                                                .
                                            </li>
                                        </ul>
                                        
                                    </div>
                            
                            
                            
                            </div>

                            <div class="col">
                                    <div class="card text-bg-danger mb-3 card-desc" >
                                    <div class="card-header"><h4>Descripción del alumno</h4></div>
                                    <div class="card-body">
                                        
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem lacus, rhoncus ut neque a, bibendum cursus ipsum. 
                                        Proin auctor blandit rhoncus. Vestibulum eget magna facilisis, malesuada odio in, ornare enim. Nullam fermentum nibh sed dui venenatis, 
                                        euismod convallis metus dapibus. Etiam non libero et felis rhoncus consectetur. Nullam eu risus et odio iaculis ullamcorper. Curabitur est odio, 
                                        vehicula a hendrerit a, pharetra nec magna. In lacus nisi, bibendum id velit non, pellentesque gravida felis.</p>
                                    </div>
                                    </div>
                            </div>


                </div>



                
                
                </div>
            </div>

            

        </div>

    </div>;
}