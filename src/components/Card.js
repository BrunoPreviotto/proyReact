import "./Card.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Card = ({datos}) => {
    
  const navigate = useNavigate();

  console.log({datos});
  const routeChange = () => {
    let path = '/producto'; // Cambia esto a la ruta deseada
    navigate(path);
  };

  

  /**/

    
    return <div class="container">
      <div class="row">
      {datos.map(item => (
          <div class="col-4">
            <div class="card m-2">
              <div class="card-header">
                <h2>{item.title}</h2>
              </div>
            <div class="card-body">
              <img src={item.image}/>
            </div>
            
            <div class="card-footer">
            {item.price > 100 ? <h3 class="text-danger">${item.price}</h3> : <h3>${item.price}</h3> }
            <Link to={`/producto/${item.id}`}>Ver detalles</Link>
            </div>
          
            </div>
          </div>
        ))}
      </div>
    </div>;
}


   
