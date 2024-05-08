import { useFetch } from '../useFetch';
import {CRUD} from '../interfaces/CRUD';
import { FetchData } from '../utilidades/FetchData';
import { Familiar } from '../model/Familiar';

class ControladorFamiliar implements CRUD<Familiar>{
    fetchDataInstance: FetchData;


   
  

    constructor(fetchDataInstance: FetchData) {
        this.fetchDataInstance = fetchDataInstance;
    }

    buscar() : Familiar {
        throw new Error('Method not implemented.');
    }

    
   
   
    async buscarList() :  Promise<[{}]> {
        try {
            const data = await this.fetchDataInstance.fetchData("http://localhost:9898/familiares");
            // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
            return data;
          } catch (error) {
            throw error;
          }
        
    }
    insertar(familiar : Familiar): void {
        throw new Error('Method not implemented.');
    }
    eliminar(familiar : Familiar): void {
        throw new Error('Method not implemented.');
    }

    
    async devolverChoices() :  Promise<Map<string, string[]>>{
      try {
        const data = await this.fetchDataInstance.fetchData("http://localhost:9898/categoria_familiar");
        // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
        let arregloChoice: Map<string, string[]> = new Map();
        arregloChoice.set('categoria', data);
        return arregloChoice;
      } catch (error) {
        throw error;
      }
    }
    

    inicializarArreglo(familiares? : Record<any, any>) : Familiar[] {
        if (familiares) {
          let alum : Familiar[] = [];
            
          let i= 0;
          familiares.forEach((item : any) => {
            alum.push(new Familiar(item.id, item.nombre.nombre, item.nombre.apellido, item.categoria));
           
          });
          
          return alum;
    
          
        } else {
          return []; // Otra opción si no hay datos aún
        }
      };

     

}

export {ControladorFamiliar};