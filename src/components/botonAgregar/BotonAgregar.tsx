import { IoMdAdd } from "react-icons/io";
import { Button } from 'react-bootstrap';
import React  from 'react';
import './BotonAgregar.css';





interface Props{
    toggleModal: () => void;
}


export const BotonAgregar = ({toggleModal} : Props) => {
  

  
  
return <div className="">
          
           <div  className="">
                
                <Button className="boton-agregar" onClick={toggleModal}>
                    <IoMdAdd size={30} className="" ></IoMdAdd>
                </Button>   
                
            </div>

          
           
        </div>;
  

}



