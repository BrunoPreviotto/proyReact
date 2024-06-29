export interface CRUD<T>{
    buscar(id: number) : Promise<[{}]>;
    buscarList()  : Promise<[{}]>;
    insertar(objeto : T | { [key: string]: any } | undefined) : void;
    actualizar( objeto : T | { [key: string]: any } | undefined) : void;
    eliminar(id : number) : void;
    inicializarArreglo(objetos? : Record<any, any>  | null) : T[];
    inicializarObjeto(objeto : T | { [key: string]: any }) : T;
    devolverChoices() :  Promise<Map<string, string[]>>; 
    nombreObjeto() : string;
}



