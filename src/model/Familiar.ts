import { Objeto } from "../interfaces/Objeto";
import { Persona } from "./Persona";


class Familiar extends Persona implements Objeto {

  #categoria: string = "";


  constructor(id: number, nombre: string, apellido: string, edad: number, categoria: string, descripcion: string, activo: boolean) {
    super(id, nombre, apellido, edad, descripcion, activo)
    this.#categoria = categoria;
  }
  getId(): number {
    return this.id;
  }
  setPropiedades(mapa: Map<string, string>): void {
    throw new Error("Method not implemented.");
  }

  getCategoria(): string {
    return this.#categoria;
  }

  setCategoria(categoria: string): Familiar {
    this.#categoria = categoria;
    return this;
  }

  obtenerObjeto(): {} {
    return {
      ID: this.id,
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      categoria: this.#categoria
    }
  }



  obtenerNombreObjeto(): string {
    return 'familiares';
  }





  obtenerTipoDato(dato: any): string {
    switch (dato) {
      case 'Nombre':
        return 'text';
        break;
      case 'Apellido':
        return 'text';
        break;
      case 'Edad':
        return 'number';
        break;
      case 'Categoria':
        return 'text';
        break;
      default:
        return '';

    }

  }

  obtenerTipoElemento(dato: string): string {
    console.log(dato);
    switch (dato.toLocaleLowerCase()) {
      case 'nombre':
        return 'text';
        break;
      case 'apellido':
        return 'text';
        break;
      case 'edad':
        return 'number';
        break;
      case 'categoria':
        return 'choice';
        break;
      default:
        return '';

    }
  }

  obtenerClaves(): string[] {
    return ['Nombre', 'Apellido', 'Categoria'];
  };

}

export { Familiar };