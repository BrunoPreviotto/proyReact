import { useParams } from 'react-router-dom';
import { useFetch } from '../useFetch'; 

export const Producto = () => {
    const { id } = useParams()
    
    //const data = useFetch("https://fakestoreapi.com/products");

    //console.log(data);

    const dato = useFetch("https://fakestoreapi.com/products/"+id);

    return <div class="container text-center">
       
            <div class="card m-2">
              <div class="card-header">
                <h1 >{dato.title}</h1>
              </div>
            <div class="card-body">
                <img  class="img-fluid" src={dato.image}/>
            </div>
            
            <div class="card-footer">
                <h3>${ parseFloat(dato.price)}</h3>
                
            </div>
            <div class="card-footer">
                
                <p>{dato.description}</p>
            </div>
            </div>
          
      
      
      
     
    </div>;
}