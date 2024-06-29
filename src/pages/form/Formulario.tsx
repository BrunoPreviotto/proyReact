

import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Objeto } from '../../interfaces/Objeto';
import { PrototypeModule } from '../../prototype/PrototypeModule';
import './Formulario.css';



interface FormProps {
  mostrar: boolean;
  toggleModal: () => void;
  objeto: Objeto | undefined;
  tipo: string | undefined;
  style: string;
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
    
  
  const handleSubmit = () => {
    const crearObj = new PrototypeModule(props.tipo).getPrototype();
    crearObj?.insertar(formData);
  }

  return <div className="">

      
      <Modal show={show} onHide={handleClose} className={`modal ${props.style}`}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
 
              <form>
                  
                  {obj && Object.entries(obj.obtenerObjeto()).map(([cObjeto, vObjeto] : [any, any]) => (
                            <div key={cObjeto}>
                              
                                {cObjeto !== 'ID' && <div className="mb-3 mt-3">

                                  <label htmlFor={cObjeto} className="form-label">{cObjeto}</label>
                                  
                                  {obj.obtenerTipoElemento(cObjeto) !== 'choice' && obj.obtenerTipoElemento(cObjeto) !== 'textArea' &&
                                    <input 
                                      key={cObjeto} 
                                      type={`${props.objeto?.obtenerTipoDato(cObjeto)}`} 
                                      className="form-control" 
                                      id={cObjeto} placeholder='' 
                                      value={formData[cObjeto] || ''} 
                                      name={cObjeto} 
                                      onChange={(e) => handleInputChange(cObjeto, e.target.value)} 
                                    />
                                  }


                                  {obj.obtenerTipoElemento(cObjeto) === 'choice' && 
                                    <div>
                                      {choices && Array.from(choices.entries()).map(([cChoice, vChoice] : [string, any[]]) => (
                                        <div>
                                            { cChoice === cObjeto &&
                                              <select key={cChoice} className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e) => handleInputChange(cObjeto, e.target.value)}>
                                                {vChoice.map((e : any) => (
                                                  <option >{e}</option>
                                                ))}
                                              </select>
                                            }
                                        </div>
                                        
                                        
                                      ))}
                                    </div>
                                  }

                                  {obj.obtenerTipoElemento(cObjeto) === 'textArea' && 
                                      <div className="form-floating">
                                        <textarea  
                                        className="form-control ta" 
                                        placeholder="Leave a comment here"
                                        onChange={(e) => handleInputChange(cObjeto, e.target.value)}
                                        >
                                        </textarea>

                                      </div>
                                  }
                                  
                                </div>}

                            </div>      
                  ))}
                  


                  <Button  className="boton-agregar-form boton-comportamieto boton-oscuro" onClick={handleSubmit}>Agregar</Button>
                  <br/>
                  <br/>
                  
              </form>
          
                   
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>

  </div>;
}


















