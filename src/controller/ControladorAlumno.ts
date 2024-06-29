import { CRUD } from "../interfaces/CRUD";
import { FetchData } from "../utilidades/FetchData";
import { Alumno } from "../model/Alumno";
import { Curso } from "../model/Curso";
import { Colaborador } from "../model/Colaborador";
import { GrupoFamiliar } from "../model/GrupoFamiliar";
import { Responsable } from "../model/Responsable";
import { Familiar } from "../model/Familiar";
import { Objeto } from "../interfaces/Objeto";
import { ControladorFamiliar } from "./ControladorFamiliar";



class ControladorAlumno implements CRUD<Alumno> {
  fetchDataInstance: FetchData;

  constructor(fetchDataInstance: FetchData) {
    this.fetchDataInstance = fetchDataInstance;
  }
  nombreObjeto(): string {
    return "Alumno";
  }
  actualizar(objeto: Alumno | { [key: string]: any } | undefined): void {
    console.log(objeto);
    if (objeto !== undefined) {
      this.fetchDataInstance.put("http://localhost:9898/actualizarAlumno/", this.inicializarObjeto(objeto));
    }
  }


  async buscar(id: number): Promise<[{}]> {
    try {
      const data = await this.fetchDataInstance.get("http://localhost:9898/alumno/", id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async devolverChoices(): Promise<Map<string, string[]>> {
    try {
      const data = await this.fetchDataInstance.fetchData("http://localhost:9898/categoria_familiar");
      // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
      let arregloChoice: [{}] = [{}];
      arregloChoice.push(data);
      return new Map;
    } catch (error) {
      throw error;
    }
  }

  async buscarList(): Promise<[{}]> {
    try {
      const data = await this.fetchDataInstance.fetchData("http://localhost:9898/buscarListaAlumnos");
      return data;
    } catch (error) {
      throw error;
    }
  }

  insertar(objeto: Alumno | { [key: string]: any } | undefined): void {

    if (objeto !== undefined) {
      this.fetchDataInstance.post(`http://localhost:9898/agregarAlumno/`, this.inicializarObjeto(objeto));
    }

  }
  eliminar(id: number): void {
    if (id != undefined && id != 0) {
      this.fetchDataInstance.delete(`http://localhost:9898/borrarAlumno/${id}`);
    }
  }

  inicializarObjeto(objeto: Alumno | { [key: string]: any; }): Alumno {
    let alumnoRet: Alumno = this.alumnoVacio();
    const familar: ControladorFamiliar = new ControladorFamiliar(new FetchData);

    if (objeto instanceof Alumno) {
      alumnoRet = objeto;
    } else {

      if (objeto !== undefined) {

        for (const [key, value] of Object.entries(objeto)) {

          switch (key) {

            case 'id':
              alumnoRet.setId(value);
              break;
            case 'nombre':
              alumnoRet.setNombre(value.nombre);
              alumnoRet.setApellido(value.apellido);
              break;

            case 'edad':

              alumnoRet.setEdad(Number(value));
              break;
            case 'descripcion':
              alumnoRet.setDescripcion(value);
              break;
            case 'familiares':

              const arregloFamiliares: Familiar[] = value.map((e: any) => familar.inicializarObjeto(e))
              // console.log(arregloFamiliares);
              alumnoRet.setFamiliares(arregloFamiliares);
              break;

          }

        }
      }
    }


    return alumnoRet;


  }

  alumnoVacio(): Alumno {
    return new Alumno(0, '', '', 0, '',
      new Curso(0, '', '', [new Colaborador(0, '', '', 0, '', true)]),
      new GrupoFamiliar(0, ''),
      [new Responsable(0, '', '', 0, '', true)],
      [new Familiar(0, '', '', 0, '', '', true)],
      true
    );
  }

  inicializarArreglo(alumnos?: Record<any, any> | null): Alumno[] {
    if (alumnos) {
      let alum: Alumno[] = [];


      alumnos.forEach((item: any) => {
        alum.push(
          new Alumno(
            item.id,
            item.nombre.nombre,
            item.nombre.apellido,
            item.edad,
            item.descripcion,
            new Curso(0, '', '',
              [new Colaborador(0, '', '', 0, '', true)]),
            new GrupoFamiliar(0, ''),
            [new Responsable(0, '', '', 0, '', true)],
            [new Familiar(0, '', '', 0, '', '', true)],
            item.activo
          )
        );

      });

      return alum;


    } else {
      return []; // Otra opción si no hay datos aún
    }
  };

}

export { ControladorAlumno };