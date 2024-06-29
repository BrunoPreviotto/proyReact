
import { BarraNavegacion } from "../../components/barraNav/BarraNavegacion";
import "./DetalleAlumno.css";
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useReducer } from "react";
import { MdEdit } from "react-icons/md";
import { BotonEliminar } from "../../components/botones/BotonEliminar";
import { Objeto } from "../../interfaces/Objeto";
import { BotonActualizar } from "../../components/botones/BotonActualizar";
import { PrototypeModule } from "../../prototype/PrototypeModule";
import { UPDATE_FIELD, alumnoReducer } from '../../static/StaticAlumno';
import { DetalleAtriubutoObjeto } from '../../components/detalle/DetalleAtriubutoObjeto'
import { PrototypeObjeto } from "../../prototype/PrototypeObjeto";






export const Detalle = () => {

    const spin = Array.from({ length: 5 }, (_, index) => <div className="spinner-grow text-info m-1"></div>);
    const location = useLocation();
    const { id, nombreObjeto } = location.state;
    const [objeto, setObjeto] = useState<Objeto>();
    const [borroso, setBorroso] = useState('');
    const [mostrar, setMostrar] = useState(false);
    const [nombreEdit, setNombreEdit] = useState<Map<string, string>>(new Map());
    const [formDisable, setFormDisable] = useState<Map<string, boolean>>();
    const [formData, dispatch] = useReducer(alumnoReducer, {});
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [data, setData] = useState<Objeto | undefined>(undefined);


    const iniciarObjeto = async () => {

        const objetoPorId = new PrototypeModule(nombreObjeto).getPrototype();

        objetoPorId?.buscar(id)
            .then(
                datosRecibidos => {
                    setData(objetoPorId.inicializarObjeto(datosRecibidos));
                    setObjeto(new PrototypeObjeto(nombreObjeto).getPrototype());
                    setLoading(false);
                    setError(undefined);
                }).catch((error) => {
                    setData(undefined);
                    setLoading(true);
                    setError(error);
                    setObjeto(undefined);
                })

    }




    useEffect(() => {
        const controladorObjeto = new PrototypeModule(nombreObjeto);
        iniciarObjeto();


        //LOS DAOTS EN LOCALSTORAGE SE GUARDAN EN EL CASO QUE SE ACTUALICE EL OBJETO Y AL ACTULIZAR LA PAGINA NO SE PIERDA LA ACTULIZACION.
        const frm = localStorage.getItem('formData');
        //SI NO EXISTEN LOS DATOS GUARDADOS EN LOCALSTORAGE
        if (frm?.length == 0) {
            //SE SETEAN LOS VALORES DE LAS CAJAS INICIALES
            if (data) {
                Object.entries(data?.obtenerObjeto()).map(([clave, valor]: [string, any]) => {
                    dispatch({ type: UPDATE_FIELD, field: clave, value: valor });
                }, () => {


                });
            }
            //SI EXISTEN DATOS GURDAODS EN LOCAL STORAGE    
        } else {

            if (frm) {
                Object.entries(JSON.parse(frm)).map(([clave, valor]: [string, any]) => {
                    dispatch({ type: UPDATE_FIELD, field: clave, value: valor });

                });
            }
        }

    }, [nombreObjeto]);

    useEffect(() => {
        //SE SETEA EL ESTADO EDITABLE DE LAS CAJAS 
        let mapa = new Map();
        if (data) {
            Object.entries(data).map(([clave, valor]) => {
                mapa.set(clave, true);
            });
        }
        setFormDisable(mapa);
    }, [])



    //FUNCION PARA EDITAR EL OBJETO
    const handleEdit = (e: any) => {

        //SI SE APRIETA EL BOTON PARA ACTUALIZAR
        if (!formDisable?.get(e)) {
            const controladorObjeto = new PrototypeModule(nombreObjeto);
            controladorObjeto.getPrototype()?.actualizar(formData);
            //GUARDAR EL OBJETO EDITADO EN LOCALSTORAGE
            localStorage.setItem('formData', JSON.stringify(formData));
        }
        //SI SE APRIETA EL BOTON PARA EDITAR
        if (formDisable?.has(e)) {
            formDisable.set(e, !formDisable.get(e));
        }

    }

    //FUNCION PARA ELIMINAR EL OBJETO
    const handleDelete = (id: number) => {

        const controladorObjeto = new PrototypeModule(nombreObjeto);
        controladorObjeto.getPrototype()?.eliminar(id);
        navigate(`/`);
    }

    //FUNCION PARA SETEAR EL ESTADO DEL OBJETO ACTUAL
    const handleInputChange = (key: string, value: any) => {
        dispatch({ type: UPDATE_FIELD, field: key, value: value });
    };


    function handleValor(e: any) {
        //console.log(e);
    }

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


    const handleObject = (o: any) => {
        o.forEach((item: any) => {
            console.log("sdadas");
            return o;
        });
    }


    const d = (l: any) => {
        console.log(l.constructor.name);
    }


    return <div className=''>
        <BarraNavegacion></BarraNavegacion>



        <div className={`container mt-5 mb-5 ${borroso}`} >

            {/**CARD PADRE*/}


            {<div className="card " >
                {/*<h1 className="card-header">{data. + " " + data.Apellido}</h1>*/}

                <div className="card-body">


                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className=" col-md-4 container d-flex justify-content-center align-items-center ">
                                <img src="/imagenes/nena.png" className="card-img  img-fluid   m-0 rounded-start flex-shrink-0" alt="" />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body cuerpo-card clearfix">

                                    {data && Object.entries(data.obtenerObjeto()).map(([c1, v1]: [string, any]) => (

                                        <div className="">
                                            {c1 !== 'Descripcion' && c1 !== 'activo' &&

                                                <div key={c1} onClick={() => setNombreEdit(new Map().set(c1, v1))} className=" row editarLi">

                                                    {/*CONTROLA SI ES UN ARREGLO DE OBJETOS O SOLO ES UN OBJETO INDIVIDUAL*/}
                                                    {typeof v1 !== 'object' ?

                                                        <div className="col-8 m-2 ">
                                                            <span className=" badge badge-pequeño">{c1}</span>
                                                            <DetalleAtriubutoObjeto props={v1}></DetalleAtriubutoObjeto>
                                                        </div>
                                                        :
                                                        <div>

                                                            {/** */}
                                                            {v1 && <div>
                                                                <span className=" badge badge-pequeño">{c1}</span>

                                                                <DetalleAtriubutoObjeto props={v1}></DetalleAtriubutoObjeto>

                                                            </div>}
                                                        </div>

                                                    }

                                                    {/* DETERMINA SI EL OBEJTO SE PUEDE EDITAR O SI YA FUE EDITADO */}
                                                    <div className="btnEdit icoEdit col-2">
                                                        {formDisable?.get(c1) ?
                                                            c1 !== 'ID' && <MdEdit id={c1} onClick={() => handleEdit(c1)} className="imgEdit"></MdEdit>
                                                            :
                                                            c1 !== 'ID' && <BotonActualizar id={c1} event={handleEdit}></BotonActualizar>
                                                        }
                                                    </div>



                                                </div>


                                            }
                                        </div>


                                    ))}




                                </div>
                            </div>
                        </div>
                    </div>






                    {/** DESCRIPCION OBJETO */}
                    <div className="col">
                        <div className="card text-bg-danger mb-3 card-desc" >
                            <div className="card-header"><h4>Descripción</h4></div>
                            <div className="card-body editarLi">

                                {/*  <p className="card-text">{data.Descripcion === null ? "Sin descripcion" : data.Descripcion}</p>*/}
                                <MdEdit className="ms-2 icoEdit" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-footer clearfix">
                    <div className="float-end">
                        <BotonEliminar id={data ? data?.getId().toString() : '0'} event={handleDelete}></BotonEliminar>
                    </div>
                </div>
            </div>}



        </div>





    </div>;
}

/*
alumno
    {c1 === 'ID' ?
    <b className="ms-1">{v1}</b>
    :
    <input
        type="text"
        value={formData[c1]}
        onChange={(e) => handleInputChange(c1, e.target.value)}
        className="cajaElementos"
        disabled={formDisable?.get(c1)} />


    }

familiar

    <ul className="list-group">

                                                                    {v1[0] && Object.entries(v1[0]).map(([c2, v2]: [string, any]) => (
                                                                        <b>
                                                                            {c2}  {v2}
                                                                            </b>
                                                                        ))}
                                                                        {/* v1.map((e:any) => {
                                                                                    v1 && Object.entries(v1[0]).map(([k, c] : [any, any]) => {
                                                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                                            <span className="badge text-bg-primary rounded-pill">{c}</span>
                                                                                        </li>
                                                                                    })
    
                                                                                })
    
                                                                            }
    
                                                                    </ul>





                                                                    <div>

            {ddddd}
            {data && Object.entries(data.obtenerObjeto()).map(([c1, v1]: [string, any]) => (
                <div>

                    <b>{
                        typeof v1 != 'object' ?
                            c1
                            :
                            Object.entries(v1[0]).map(([c2, v2]: [string, any]) => (
                                <b>
                                    {
                                        c2

                                    }
                                </b>
                            ))
                        }
                    </b>

                </div>

            ))}
        </div>

*/ 