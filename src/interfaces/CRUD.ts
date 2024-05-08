export interface CRUD<T>{
    buscar() : T;
    buscarList()  : Promise<[{}]>;
    insertar(objeto : T) : void;
    eliminar(objeto : T) : void;
    inicializarArreglo(objetos? : Record<any, any>  | null) : T[]
    devolverChoices() :  Promise<Map<string, string[]>>; 
}



