import { useNavigate, useParams } from 'react-router-dom';

import { Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './List.css';
import { BarraNavegacion } from '../../components/barraNav/BarraNavegacion';
import { Formulario } from '../form/Formulario';
import { Objeto } from '../../interfaces/Objeto';

import { PrototypeModule } from '../../prototype/PrototypeModule';
import { PrototypeObjeto } from '../../prototype/PrototypeObjeto';

import { BotonAgregar } from '../../components/botones/BotonAgregar';
import { CajaBuscar } from '../../components/cajaBuscar/CajaBuscar';
import { BotonEliminar } from '../../components/botones/BotonEliminar';
import { BotonVer } from '../../components/botones/BotonVer';
import { BotonActualizar } from '../../components/botones/BotonActualizar';








export const Lista = () => {
  const spin = Array.from({ length: 5 }, (_, index) => <div className="spinner-grow text-info m-1"></div>);

  const navigate = useNavigate();

  //RECIBE EL NOMBRE DEL OBJETO A RENDERIZAR EN LA LISTA
  const { objetoParametro } = useParams();

  const [objeto, setObjeto] = useState<Objeto | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [datos, setDatos] = useState<Objeto[] | undefined>(undefined);

  //UN SOLO OBJETO DE LA LISTA DE OBJETOS
  const [primerObjeto, setPrimerObjeto] = useState<Objeto | undefined>();

  //MOSTRAR EL MODAL DEL FORMULARIO
  const [mostrar, setMostrar] = useState(false);


  const iniciarObjeto = async () => {

    const listObj = new PrototypeModule(objetoParametro).getPrototype();

    listObj?.buscarList()
      .then(
        datosRecibidos => {
          setDatos(listObj.inicializarArreglo(datosRecibidos));
          setObjeto(new PrototypeObjeto(objetoParametro).getPrototype());
          setLoading(false);
          setError(undefined);
        }).catch((error) => {
          setDatos([])
          setLoading(true);
          setError(error);
          setObjeto(undefined);
        })

  }

  useEffect(() => {


    iniciarObjeto();


  }, [objetoParametro]);



  useEffect(() => {

    if (datos && datos.length > 0) {
      // Obtener el primer objeto del array
      setPrimerObjeto(datos[0]);
    }
  }, [datos]);

  //NAVEGA HACIA EL DETALLE DE LA LISTA SELECCIONADA Y LE PASA EL OBJETO SELECCIONADO
  const handleNavigate = (obj: Objeto) => {
    localStorage.setItem('formData', '');
    navigate(`/detalle`, { state: { id: obj.getId(), nombreObjeto: obj.obtenerNombreObjeto() } })

  };


  const toggleModal = () => {
    setMostrar(!mostrar);
  };

  if (loading) {
    return <div>
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

  function estaActivo(obj: any) {
    return obj.activo === true;
  }

  function sacarElemntosComplejos(obj: any) {

    return obj.obtenerTipoElemento() !== 'list';
  }

  function obtenerHeader(obj: any) {

    return obj !== 'activo';
  }



  return <div className="">
    <BarraNavegacion></BarraNavegacion>
    <div className="container ">

      <div className='clearfix mt-5'>
        <div className='float-start'>
          <CajaBuscar></CajaBuscar>
        </div>
        <div className='float-end'>
          <BotonAgregar toggleModal={toggleModal}></BotonAgregar>
        </div>
      </div>





      <Table className="text-center mt-1 table table-hover">

        <thead>
          <tr>
            {primerObjeto && Object.keys(primerObjeto).filter(obtenerHeader).map((value: any) => (

              <th scope="col" key={value}>{value}</th>

            ))}


          </tr>
        </thead>
        <tbody>

          {datos && datos?.filter(estaActivo).filter(sacarElemntosComplejos).map((item: any) => (

            <tr key={item.ID} onClick={() => handleNavigate(item)}>

              {Object.entries(item).filter(([clave, valor]) => clave !== 'activo').map(([clave, valor]: [string, any]) => (

                <td className='' key={valor}>
                  <p>{String(valor)}</p>

                </td>

              ))}



            </tr>

          ))}


        </tbody>

      </Table>


    </div>

    {mostrar && <Formulario style='' tipo={objetoParametro} mostrar={mostrar} toggleModal={toggleModal} objeto={primerObjeto}></Formulario>}

  </div>;


}



