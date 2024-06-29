
import React, { useEffect, useState } from 'react';
import { PrototypeModule } from '../../prototype/PrototypeModule';
import { Objeto } from '../../interfaces/Objeto';
import { Tabla } from '../tabla/Tabla';




export const DetalleAtriubutoObjeto = (props: any) => {

        const [data, setData] = useState<any | undefined>(undefined);


        useEffect(() => {
                setData(props);


        }, []);


        const handleObject = (item: any): Objeto | Objeto[] | undefined => {

                if (Array.isArray(item)) {
                        let arrObj: Objeto[] = [];
                        item.forEach(element => {

                                let obj = new PrototypeModule(element.constructor.name).getPrototype()?.inicializarObjeto(element);
                                //let obj = prot;
                                if (obj !== undefined) {
                                        arrObj.push(obj);

                                }


                        });

                        return arrObj;

                } else {
                        return new PrototypeModule(item.constructor.name).getPrototype()?.inicializarObjeto(item);
                }






        }



        return <div className="mt-2 ms-2">
                <div>

                        {data && Object.entries(data).map(([c1, v1]: [string, any]) => (

                                <div>

                                        {v1 && Array.isArray(v1) ? (
                                                <div>
                                                        {handleObject(v1) ? (

                                                                <Tabla props={handleObject(v1)}></Tabla>

                                                        ) : (
                                                                <b>Fallo al cargar Familiar!</b>
                                                        )}
                                                </div>
                                        ) : (
                                                <div>
                                                        {
                                                                v1
                                                                &&
                                                                !Array.isArray(v1)
                                                                &&
                                                                <b>{v1}</b>
                                                        }
                                                </div>
                                        )}
                                </div>


                        ))}
                </div>

        </div >;


}


/*



Object.entries(handleObject(v1) as Objeto).map(([c2, v2]: [string, any]) => (

        <div>
                {Object.entries(handleObject(v2) as Objeto).map(([c3, v3]: [string, any]) => (
                        <div>
                                <b>{c3} : {v3}</b>
                                <br />
                        </div>
                ))}
        </div>

))



<button onClick={() => d(typeof v2)}></button>

<DetalleAtriubutoObjeto></DetalleAtriubutoObjeto>
                        
                        {data && <div>

                                
                                <ul className="list-group">

                                        {data && Object.entries(data).map(([c2, v2]: [string, any]) => (
                                                <b>
                                                        {c2} : {v2}
                                                </b>
                                        ))}
                                        { v1.map((e:any) => {
                                                v1 && Object.entries(v1[0]).map(([k, c] : [any, any]) => {
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <span className="badge text-bg-primary rounded-pill">{c}</span>
                                                        </li>
                                                })

                                                })

                                        }

                                </ul>
                        </div>}



 */


