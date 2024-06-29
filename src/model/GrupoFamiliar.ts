
import { Objeto } from "../interfaces/Objeto";

class GrupoFamiliar implements Objeto{
    #id: number;
    #nombre: string;
    
    constructor(id:number, nombre:string){
        this.#id=id;
        this.#nombre=nombre;
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

export {GrupoFamiliar};