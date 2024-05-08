
import { Alumno } from "../model/Alumno";
import { ControladorAlumno } from "../controller/ControladorAlumno";
import { Familiar } from "../model/Familiar";
import { CRUD } from "../interfaces/CRUD";
import { Objeto } from "../interfaces/Objeto";
import { FetchData } from "../utilidades/FetchData";

export class PrototypeObjeto{
    #prototypes : Objeto | undefined;

    constructor(p : string | undefined){
        
        switch (p) {
            case 'alumnos':
                this.#prototypes = new Alumno(0, '', '', 0);
                break;
            case 'familiares':
                this.#prototypes = new Familiar(0, '', '', '');
                break;
        
            default:
                this.#prototypes = undefined;
                break;
        }
        
    }

    getPrototype() : Objeto | undefined{
        return this.#prototypes;
    }


    
}


