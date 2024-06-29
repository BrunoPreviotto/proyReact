import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Objeto } from '../../interfaces/Objeto';
import { PrototypeModule } from '../../prototype/PrototypeModule';
import { PrototypeObjeto } from '../../prototype/PrototypeObjeto';









export const Tabla = (props: any) => {

    const navigate = useNavigate();
    const [data, setData] = useState(props);
    const [primerObjeto, setPrimerObjeto] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [datos, setDatos] = useState<Objeto[] | undefined>(undefined);
    const [objeto, setObjeto] = useState<Objeto | undefined>();

    const iniciarObjeto = async () => {

        const listObj = new PrototypeModule(props).getPrototype();

        listObj?.buscarList()
            .then(
                datosRecibidos => {
                    setDatos(listObj.inicializarArreglo(datosRecibidos));
                    //setObjeto(new PrototypeObjeto(objetoParametro).getPrototype());
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

        if (data && data.length > 0) {
            // Obtener el primer objeto del array
            setPrimerObjeto(props);
        }

    }, []);



    const handleNavigate = (obj: any) => {
        localStorage.setItem('formData', '');
        navigate(`/detalle`, { state: { id: obj.id, nombreObjeto: obj.constructor.name } })
    };



    return <div className="">
        <div>{data.length}</div>
        <div className="container ">
            <Table className="text-center mt-1 table table-hover w-25">



                <thead>
                    {data && Object.entries(data).map(([c1, v1]: [string, any]) => (

                        <tr>

                            {v1[0] ? Object.keys(v1[0]).map((k: any) => (<th>{k != 'activo' && k}</th>)) : <th>Sín Famliares</th>}
                        </tr>

                    ))}
                </thead>






                {/*<button onClick={() => handleObject(v1)}></button>*/}

                {data && Object.entries(data).map(([c1, v1]: [string, any]) => (
                    <tbody>
                        {Object.entries(v1).map(([c2, v2]: [string, any]) => (


                            <tr key={v2.ID} onClick={() => handleNavigate(v2)}>
                                {Object.entries(v2).map(([c3, v3]: [string, any]) => (



                                    <td scope="col">{v3}</td>


                                ))}

                            </tr>

                        ))}
                    </tbody>


                ))}





            </Table>


        </div>



    </div>;


}



/**
 



 










{props && props?.map((item: any) => (

                        <tr key={item.ID}>

                            {Object.entries(item).map(([clave, valor]: [string, any]) => (

                                <td className='' key={valor}>
                                    <p>{String(valor)}</p>

                                </td>

                            ))}



                        </tr>

                    ))} */