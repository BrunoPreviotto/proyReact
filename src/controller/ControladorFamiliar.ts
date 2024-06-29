import { useFetch } from '../useFetch';
import { CRUD } from '../interfaces/CRUD';
import { FetchData } from '../utilidades/FetchData';
import { Familiar } from '../model/Familiar';

class ControladorFamiliar implements CRUD<Familiar> {
  fetchDataInstance: FetchData;



  constructor(fetchDataInstance: FetchData) {
    this.fetchDataInstance = fetchDataInstance;
  }

  nombreObjeto(): string {
    return "Familiar";
  }
  actualizar(objeto: Familiar | { [key: string]: any } | undefined): void {
    throw new Error('Method not implemented.');
  }
  inicializarObjeto(objeto: { [key: string]: any; } | Familiar): Familiar {
    let familiarRet: Familiar = this.familiarVacio();

    if (objeto instanceof Familiar) {
      familiarRet = objeto;
    } else {

      if (objeto !== undefined) {

        for (const [key, value] of Object.entries(objeto)) {

          switch (key) {
            case 'id':
              familiarRet.setId(value);
              break;
            case 'nombre':
              familiarRet.setNombre(value.nombre);
              familiarRet.setApellido(value.apellido);
              break;
            case 'edad':
              familiarRet.setEdad(Number(value));
              break;
            case 'descripcion':
              familiarRet.setDescripcion(value);
              break;
            case 'categoria':
              familiarRet.setCategoria(value);
              break;

          }

        }
      }
    }


    return familiarRet;
  }

  async buscar(id: number): Promise<[{}]> {
    try {
      const data = await this.fetchDataInstance.get("http://localhost:9898/familiar/", id);
      return data;
    } catch (error) {
      throw error;
    }
  }




  async buscarList(): Promise<[{}]> {
    try {
      const data = await this.fetchDataInstance.fetchData("http://localhost:9898/familiares");
      // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
      return data;
    } catch (error) {
      throw error;
    }

  }
  insertar(familiar: Familiar): void {
    throw new Error('Method not implemented.');
  }
  eliminar(id: number): void {
    throw new Error('Method not implemented.');
  }


  async devolverChoices(): Promise<Map<string, string[]>> {
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

  familiarVacio(): Familiar {
    return new Familiar(0, '', '', 0, '', '', true);
  }


  inicializarArreglo(familiares?: Record<any, any>): Familiar[] {
    if (familiares) {
      let alum: Familiar[] = [];

      let i = 0;
      familiares.forEach((item: any) => {
        alum.push(new Familiar(item.id, item.nombre.nombre, item.nombre.apellido, 0, item.categoria, '', true));

      });

      return alum;


    } else {
      return []; // Otra opción si no hay datos aún
    }
  };



}

export { ControladorFamiliar };