import React  from 'react';
import './CajaBuscar.css';




interface Props{
    
}


export const CajaBuscar = () => {
  

  
  
return <div className="container  mb-2">
          
            <div className="clearfix ">

                <div className="row">
                    <input className="form-control float-start col" type="text"  />

                    <button  className="btn color-boton boton-buscar ms-2 rounded-1 float-end col-4">
                        Buscar
                    </button>
                </div>

            </div>
          
           
        </div>;
  

}



