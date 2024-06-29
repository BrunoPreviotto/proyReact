import { useFetch } from '../useFetch';
import { CRUD } from '../interfaces/CRUD';
import { FetchData } from '../utilidades/FetchData';
import { Curso } from '../model/Curso';
import { Colaborador } from '../model/Colaborador';

class ControladorCurso implements CRUD<Curso> {
    fetchDataInstance: FetchData;



    constructor(fetchDataInstance: FetchData) {
        this.fetchDataInstance = fetchDataInstance;
    }

    nombreObjeto(): string {
        return "Curso";
    }
    actualizar(objeto: Curso | { [key: string]: any } | undefined): void {
        throw new Error('Method not implemented.');
    }
    inicializarObjeto(objeto: { [key: string]: any; } | Curso): Curso {
        let CursoRet: Curso = this.CursoVacio();

        if (objeto instanceof Curso) {
            CursoRet = objeto;
        } else {

            if (objeto !== undefined) {

                for (const [key, value] of Object.entries(objeto)) {

                    switch (key) {
                        case 'id':
                            //CursoRet.setId(value);
                            break;
                        case 'nombre':
                            //CursoRet.setNombre(value.nombre);
                            //CursoRet.setApellido(value.apellido);
                            break;
                        case 'edad':
                            //CursoRet.setEdad(Number(value));
                            break;
                        case 'descripcion':
                            // CursoRet.setDescripcion(value);
                            break;
                        case 'categoria':
                            //CursoRet.setCategoria(value);
                            break;

                    }

                }
            }
        }


        return CursoRet;
    }

    async buscar(id: number): Promise<[{}]> {
        try {
            const data = await this.fetchDataInstance.get("http://localhost:9898/Curso/", id);
            return data;
        } catch (error) {
            throw error;
        }
    }




    async buscarList(): Promise<[{}]> {
        try {
            const data = await this.fetchDataInstance.fetchData("http://localhost:9898/buscarListaCurso");
            // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
            return data;
        } catch (error) {
            throw error;
        }

    }
    insertar(Curso: Curso): void {
        throw new Error('Method not implemented.');
    }
    eliminar(id: number): void {
        throw new Error('Method not implemented.');
    }


    async devolverChoices(): Promise<Map<string, string[]>> {
        try {
            const data = await this.fetchDataInstance.fetchData("http://localhost:9898/categoria_Curso");
            // Aquí puedes realizar cualquier lógica adicional con los datos si es necesario
            let arregloChoice: Map<string, string[]> = new Map();
            arregloChoice.set('categoria', data);
            return arregloChoice;
        } catch (error) {
            throw error;
        }
    }

    CursoVacio(): Curso {
        return new Curso(0, '', '', [new Colaborador(0, '', '', 0, '', false)]);
    }


    inicializarArreglo(curso?: Record<any, any>): Curso[] {
        if (curso) {
            let cur: Curso[] = [];

            let i = 0;
            curso.forEach((item: any) => {
                cur.push(new Curso(item.id, item.nombre, item.descripcion, [new Colaborador(0, '', '', 0, '', false)]));

            });

            return cur;


        } else {
            return []; // Otra opción si no hay datos aún
        }
    };



}

export { ControladorCurso };