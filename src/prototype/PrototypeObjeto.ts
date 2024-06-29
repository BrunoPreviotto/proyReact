
import { Alumno } from "../model/Alumno";
import { ControladorAlumno } from "../controller/ControladorAlumno";
import { Familiar } from "../model/Familiar";
import { CRUD } from "../interfaces/CRUD";
import { Objeto } from "../interfaces/Objeto";
import { FetchData } from "../utilidades/FetchData";
import { Curso } from "../model/Curso";
import { GrupoFamiliar } from "../model/GrupoFamiliar";
import { Responsable } from "../model/Responsable";
import { Colaborador } from "../model/Colaborador";

export class PrototypeObjeto {
    #prototypes: Objeto | undefined;

    constructor(p: string | undefined) {
        console.log(p);
        switch (p) {
            case 'alumno':
            case 'alumnos':
                this.#prototypes = new Alumno(0, '', '', 0, '',
                    new Curso(0, '', '', [new Colaborador(0, '', '', 0, '', true)]),
                    new GrupoFamiliar(0, ''),
                    [new Responsable(0, '', '', 0, '', true)],
                    [new Familiar(0, '', '', 0, '', '', true)],
                    true
                );
                break;
            case 'familiar':
            case 'familiares':
                this.#prototypes = new Familiar(0, '', '', 0, '', '', true);
                break;
            case 'curso':
            case 'cursos':
                this.#prototypes = new Curso(0, '', '', [new Colaborador(0, '', '', 0, '', false)]);
                break;

            default:
                this.#prototypes = undefined;
                break;
        }

    }

    getPrototype(): Objeto | undefined {
        return this.#prototypes;
    }



}


