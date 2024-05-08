import { HTMLInputTypeAttribute } from "react";

export interface Objeto{
    obtenerObjeto() : {};
    obtenerTipoDato(dato : any) : string;
    setAllProperties(prop : string, val : string) : Objeto | undefined;
    getAll(val : string) : string | undefined;
    obtenerClaves() : string[];
    obtenerTipoElemento(dato : string) : string;
}