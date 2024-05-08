import { CRUD } from "../interfaces/CRUD";
import { FetchData } from "../utilidades/FetchData";
import { Alumno } from "../model/Alumno";
import axios from "axios";


class ControladorAlumno implements CRUD<Alumno>{
    fetchDataInstance: FetchData;

    constructor(fetchDataInstance: FetchData) {
        this.fetchDataInstance = fetchDataInstance;
    }
   
    buscar(): Alumno {
        throw new Error("Method not implemented.");
    }

    async devolverChoices() :  Promise<Map<string, string[]>>{
      try {
        const data = await this.fetchDataInstance.fetchData("http://localhost:9898/categoria_familiar");
        // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
        let arregloChoice : [{}] = [{}]; 
        arregloChoice.push(data);
        return new Map;
      } catch (error) {
        throw error;
      }
    }
    
    async buscarList(): Promise<[{}]> {
        try {
            const data = await this.fetchDataInstance.fetchData("http://localhost:9898/alumnos");
            
           
            
            return data;
          } catch (error) {
            throw error;
          }
    }

    insertar(objeto: Alumno): void {
        throw new Error("Method not implemented.");
    }
    eliminar(objeto: Alumno): void {
        throw new Error("Method not implemented.");
    }

    inicializarArreglo(familiares? : Record<any, any> | null) : Alumno[] {
        if (familiares) {
          let alum : Alumno[] = [];
            
          
          familiares.forEach((item : any) => {
            alum.push(new Alumno(item.id, item.nombre.nombre, item.nombre.apellido, item.edad));
           
          });
          
          return alum;
    
          
        } else {
          return []; // Otra opción si no hay datos aún
        }
      };

}

export {ControladorAlumno};