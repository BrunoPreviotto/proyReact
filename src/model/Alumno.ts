import { HTMLInputTypeAttribute } from "react";
import { Objeto } from "../interfaces/Objeto";
import { Curso } from "./Curso";
import { Familiar } from "./Familiar";
import { GrupoFamiliar } from "./GrupoFamiliar";
import { Responsable } from "./Responsable";
import { Persona } from "./Persona";
import { Colaborador } from "./Colaborador";



class Alumno extends Persona implements Objeto{
  #curso: Curso | undefined;
  #gruposFamiliares: GrupoFamiliar | undefined;
  #responsables: Responsable[] | undefined;
  #familiares: Familiar[] | undefined;
  
  

  constructor(id : number, 
              nombre : string, 
              apellido : string, 
              edad : number, 
              descripcion: string,
              curso:Curso, 
              grupoFamiliar:GrupoFamiliar, 
              responsables:Responsable[], 
              familiares:Familiar[],
              activo: boolean
            ){
    super(id, nombre, apellido, edad, descripcion, activo);
   
      
      this.#curso=curso;
      this.#gruposFamiliares=grupoFamiliar;
      this.#responsables=responsables;
      this.#familiares=familiares;
    
    
  }

  setFamiliares(familiares:Familiar[]){
    this.#familiares = familiares;
  }


  

  getId(): number {
    return this.id;
  }

  setPropiedades(mapa: Map<string, string>){
    
    Array.from(mapa.entries()).map(([clave, valor]) => {
      console.log(clave);
      switch (clave) {
        case 'Nombre':
          this.setNombre(valor);
          break;
      }
    }
      
    );
  }

  obtenerNombreObjeto(): string {
    return 'alumnos';
  }

  
  
  
  
  
 

  obtenerObjeto() : {}{
    return {
      ID : this.id,
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Descripcion: this.descripcion,
      activo: this.activo,
      Familiares: this.#familiares
    }
  }

  obtenerClaves() : string[]{
    return ['Nombre', 'Apellido', 'Edad'];
  };

  
obtenerTipoElemento(dato : string) : string{
    switch(dato){
      case 'Nombre':
        return 'text';
        break;
      case 'Apellido':
        return 'text';
        break;
      case 'Edad':
          return 'number';
          break;
      case 'Descripcion':
        return 'textArea';
        break;
      case 'Familiares':
        return 'list';
        break;
      default:
        return ''; 
         
    }
  }

  obtenerTipoDato(dato : any) : string{
    
    switch(dato){
      case 'Nombre':
        return 'text';
        break;
      case 'Apellido':
        return 'text';
        break;
      case 'Edad':
          return 'number';
          break;
      case 'Descripcion':
        return 'text';
        break;
      
      default:
        return ''; 
         
    }
    
  }
}

export {Alumno};


