import { useNavigate, useParams } from 'react-router-dom';
import { IoMdAdd } from "react-icons/io";
import { Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './List.css';
import { BarraNavegacion } from '../../components/barraNav/BarraNavegacion';
import { Formulario } from '../form/Formulario';
import { Objeto } from '../../interfaces/Objeto';

import {PrototypeModule} from '../../prototype/PrototypeModule';
import { PrototypeObjeto } from '../../prototype/PrototypeObjeto';

import { BotonAgregar } from '../../components/botonAgregar/BotonAgregar';
import { CajaBuscar } from '../../components/cajaBuscar/CajaBuscar';







export const Lista = () => {
  const spin = Array.from({ length: 5 }, (_, index) => <div className="spinner-grow text-info m-1"></div>);
  
  const navigate = useNavigate();

  const { objetoParametro } = useParams();
  const [objeto, setObjeto] = useState<Objeto |  undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  
  const [datos, setDatos] = useState <Objeto[] | undefined>(undefined);
  
  
  const [primerObjeto, setPrimerObjeto] = useState <Objeto | undefined>();

  

  const [mostrar, setMostrar] = useState(false);

  
  


  

  
  

  useEffect(() => {
    
    const iniciarObjeto = async () => {
            
            const listObj = new PrototypeModule(objetoParametro).getPrototype();
           
            
            

            listObj?.buscarList()
            .then(
              datosRecibidos => {
                
                
                
                setDatos(listObj.inicializarArreglo(datosRecibidos));
                
                setObjeto(new PrototypeObjeto(objetoParametro).getPrototype());
                
                setLoading(false);
                setError(undefined);
            }).catch ((error) => {
              setDatos([])
              setLoading(true);
              setError(error);
              setObjeto(undefined);
            })
             
    }
    iniciarObjeto();
    

  }, [objetoParametro]);

  useEffect(() => {
    
    if (datos && datos.length > 0) {
        // Obtener el primer objeto del array
        setPrimerObjeto(datos[0]);
    }
  }, [datos]);

  const handleNavigate = (obj : Objeto) => {
    console.log(obj);
    navigate(`/detalle`, {state: {data : obj}});
   
  };
  

  const toggleModal = () => {
    setMostrar(!mostrar);
  };

  if(loading){ 
    return<div>
       <BarraNavegacion></BarraNavegacion>
        <div className='container text-center mt-5' >
          
               <div className='mt-5'>
                  <span className='text-center'>
                    {spin}
                  </span>
               </div>
         
        </div>
        </div>;
  }

  
  
  
  return <div className="">
            <BarraNavegacion></BarraNavegacion>
            <div  className="container ">
                
              <div className='clearfix'>
                <div className='float-end mt-5'>
                  <BotonAgregar  toggleModal={toggleModal}></BotonAgregar>
                </div>
                <div className='float-start  mt-5'>
                  <CajaBuscar></CajaBuscar>
                </div>
              </div>  

              <Table className="text-center mt-1 table border border-1 border-secondary table-hover">
                <thead>
                  <tr>
                      {primerObjeto && Object.keys(primerObjeto.obtenerObjeto()).map((value : any) => (
                            <th scope="col" key={value}>{value}</th>
                            
                      ))}

                    
                  </tr>
                </thead>
                <tbody>
                  
                  {datos && datos.map((item : any) => (
                    <tr key={item.obtenerObjeto().ID} onClick={() => handleNavigate(item.obtenerObjeto())}> 
                      
                      {Object.entries(item.obtenerObjeto()).map(([clave, valor]: [string, any]) => (
                      <td key={valor}>
                          <p>{String(valor)}</p>
                      </td>
                    ))}
                    </tr>
                  ))}


                </tbody>

              </Table>

            </div>

            {mostrar && <Formulario tipo={objetoParametro} mostrar={mostrar} toggleModal={toggleModal} objeto={primerObjeto}></Formulario>}
           
        </div>;
  

}



