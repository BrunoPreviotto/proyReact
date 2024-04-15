import { useParams } from 'react-router-dom';
import { useFetch } from '../useFetch'; 

export const Producto = () => {
    const { id } = useParams()
    
   
    //CONSULTA LA API Y TRAE UN SOLO PRODUCTO
    const dato = useFetch("https://fakestoreapi.com/products/"+id);

    return <div class="container text-center">

            <div class="card m-2">
              <div class="card-header">
                {/** TITULO DEL PRODUCTO */}
                <h1 >{dato.title}</h1>
              </div>
            <div class="card-body">
              {/** IMAGEN DEL PRODUCTO */}
                <img  class="img-fluid" src={dato.image}/>
            </div>
            
            <div class="card-footer">
              {/** PRECIO DEL PRODUCTO */}
                <h3>${ parseFloat(dato.price)}</h3>
                
            </div>
            <div class="card-footer">
                {/** DESCRIPCION DEL PRODUCTO */}
                <p>{dato.description}</p>
            </div>
            </div>
          
      
      
      
     
    </div>;
}