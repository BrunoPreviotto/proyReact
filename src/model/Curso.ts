
import { Objeto } from "../interfaces/Objeto";
import { Colaborador } from "./Colaborador";



class Curso implements Objeto{
    #id: number;
    #nombre: string;
    #descripcion: string;
    #colaboradores: Colaborador[];
    
    constructor(id:number, nombre:string, descripcion:string, colaboradores:Colaborador[]){
        this.#id=id;
        this.#nombre=nombre;
        this.#descripcion=descripcion;
        this.#colaboradores=colaboradores;
    }
    getId(): number {
        throw new Error("Method not implemented.");
    }
    setPropiedades(mapa: Map<string, string>): void {
        throw new Error("Method not implemented.");
    }
    
    
    obtenerNombreObjeto(): string {
        throw new Error("Method not implemented.");
    }

    obtenerObjeto(): {} {
        throw new Error("Method not implemented.");
    }
    obtenerTipoDato(dato: any): string {
        throw new Error("Method not implemented.");
    }
    setAllProperties(prop: string, val: string): Objeto | undefined {
        throw new Error("Method not implemented.");
    }
    getAll(val: string): string | undefined {
        throw new Error("Method not implemented.");
    }
    obtenerClaves(): string[] {
        throw new Error("Method not implemented.");
    }
    obtenerTipoElemento(dato: string): string {
        throw new Error("Method not implemented.");
    }

}

export {Curso};