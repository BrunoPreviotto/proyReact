
import { ControladorAlumno } from "../controller/ControladorAlumno";
import { ControladorFamiliar } from "../controller/ControladorFamiliar";
import { CRUD } from "../interfaces/CRUD";
import { Objeto } from "../interfaces/Objeto";
import { FetchData } from "../utilidades/FetchData";

export class PrototypeModule{
    #prototypes : CRUD<Objeto> | undefined;

    constructor(p : string | undefined){
        
        switch (p) {
            case 'alumnos':
               
            this.#prototypes = new ControladorAlumno(new FetchData());
                break;

            case 'familiares':
              
                this.#prototypes = new ControladorFamiliar(new FetchData());
                break;
        
            default:
                this.#prototypes = undefined;
                break;
        }
        
    }

    getPrototype() : CRUD<Objeto> | undefined{
        return this.#prototypes;
    }


    
}


