import { HTMLInputTypeAttribute } from "react";

export interface Objeto{
    getId() : number;
    obtenerObjeto() : {};
    obtenerTipoDato(dato : any) : string;
    obtenerClaves() : string[];
    obtenerTipoElemento(dato : string) : string;
    obtenerNombreObjeto() : string;
    setPropiedades(mapa: Map<string, string>) : void;
}