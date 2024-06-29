
import React  from 'react';
import './Botones.css';

import { MdDelete } from "react-icons/md";



interface Props{
    event: (e:any) => void;
    id: string;
}


export const BotonEliminar = (props: Props) => {
  

  
  
return <div className="">
        
            
                <button id={props.id} onClick={() => props.event(props.id)} className="eButtonR eButton">
                    <MdDelete size={30} className='icoButtonRojo'/>
                </button>
                     
        </div>;
  

}



