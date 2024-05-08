

import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Objeto } from '../../interfaces/Objeto';
import { PrototypeModule } from '../../prototype/PrototypeModule';



interface FormProps {
  mostrar: boolean;
  toggleModal: () => void;
  objeto: Objeto | undefined;
  tipo: string | undefined;
}


//º
export const Formulario = (props: FormProps) => {

    const [show, setShow] = useState(props.mostrar);
    
    const [obj, setObj] = useState<Objeto | undefined>(props.objeto);
    
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const [choices, setChoices] = useState<Map<string, string[]> | undefined>();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | undefined>(undefined);

    const handleClose = () => {
      //setShow(false)
      props.toggleModal();
    };
    const handleShow = () => setShow(true);
    
  

   const handleInputChange = (key: string, value: any) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: value
    }));
  };

  useEffect(() => {
    
    const iniciarObjeto = async () => {
            
            const listObj = new PrototypeModule(props.tipo).getPrototype();
           
            
            

            listObj?.devolverChoices()
            .then(
              datosRecibidos => {
                
                setChoices(datosRecibidos);
                setLoading(false);
                setError(undefined);
            }).catch ((error) => {
              setChoices(undefined);
              setLoading(true);
              setError(error);
              
            })
             
    }
    iniciarObjeto();
    

  }, []);
    
  
  console.log(choices);

  return <div className="">

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body>

              <form>
                  
                  {obj && Object.entries(obj.obtenerObjeto()).map(([clave, valor] : [any, any]) => (
                            <div key={clave}>
                               
                                {clave !== 'ID' && <div className="mb-3 mt-3">
                               
                                  <label htmlFor={clave} className="form-label">{clave}</label>
                                  
                                  {obj.obtenerTipoElemento(clave) !== 'choice' && 
                                    <input 
                                      key={clave} 
                                      type={`${props.objeto?.obtenerTipoDato(clave)}`} 
                                      className="form-control" 
                                      id={clave} placeholder='' 
                                      value={formData[clave] || ''} 
                                      name={clave} 
                                      onChange={(e) => handleInputChange(clave, e.target.value)} 
                                    />
                                  }

                                    

                                  {obj.obtenerTipoElemento(clave) === 'choice' && 
                                   
                                    <div>
                                      
                                      
                                      {choices && Array.from(choices.entries()).map(([clave, valor] : [any, any[]]) => (
                                        <select key={clave} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                          {valor.map((e : any) => (
                                            <option>{e}</option>
                                          ))}
                                       </select>
                                        
                                    ))}
                                      
                                      
                                    
                                    </div>
                                  }
                                  
                                </div>}

                            </div>      
                  ))}
                  


                  <button  className="btn btn-primary">Agregar</button>
                  <br/>
                  <br/>
                  
              </form>
          
                   
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  </div>;
}


















