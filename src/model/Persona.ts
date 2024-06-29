
export class Persona{
    protected id : number;
    protected nombre : string;
    protected apellido : string;
    protected edad : number | undefined;
    protected descripcion : string | undefined;
    protected activo : boolean;

    constructor(id:number, nombre:string, apellido:string, edad:number, descripcion: string, activo: boolean){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.descripcion=descripcion;
        this.activo = activo;
    }

    

    getNombre() : string{
        return this.nombre;
    }

    getApellido() : string{
        return this.apellido;
    }

    getEdad() : number | undefined{
        return this.edad;
    }

    getDescripcion() : string | undefined{
        return this.descripcion;
    }

    setId(id : number): Persona{
        this.id = id;
        return this;
    }

    setNombre(nombre: string) : Persona{
        this.nombre = nombre;
        return this;
    }

    setApellido(apellido: string) : Persona{
        this.apellido = apellido;
        return this;
    }

    setEdad(edad: number) : Persona{
        this.edad = edad;
        return this;
    }

    setDescripcion(descripcion: string) : Persona{
        this.descripcion = descripcion;
        return this;
    }
}