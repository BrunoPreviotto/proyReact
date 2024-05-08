

class Familiar implements Object{
  #id : number;
  #nombre : string;
  #apellido : string;
  //#edad : number ;
  #categoria : string = "";

  
  constructor(id : number, nombre : string, apellido : string, categoria : string){
    this.#id = id;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#categoria = categoria;
  }

  

  obtenerObjeto() : {}{
    return {
      ID : this.#id,
     // Edad: this.#edad,
      Nombre: this.#nombre,
      Apellido: this.#apellido,
      categoria: this.#categoria
    }
  }

  getMap(){
    const mapa = new Map();
    mapa.set('ID', this.#id);
    mapa.set('Nombre', this.#nombre);
    mapa.set('Apellido', this.#apellido);
   // mapa.set('Edad', this.#edad);
    return mapa;
  }

  setAllProperties(prop : string, val : string) : Familiar | undefined{
    
    switch (prop.toLocaleLowerCase()) {
      case 'categoria':
        this.#categoria = val;
        break;
      case 'nombre':
        this.#nombre =  val;
        break;
      case 'apellido':
        this.#apellido =  val;
        break;
      default:
        break;
    }
    
    
    return this;
    
    
  }
  getAll(val : string) : string | undefined{
    switch (val.toLocaleLowerCase()) {
      case 'nombre':
        return this.#nombre;
        break;
      case 'apellido':
        return this.#apellido;
        break;
      case 'categoria':
        return String(this.#categoria);
        break;
      
      default:
        return undefined;
        break;
    }
  }

  obtenerTipoDato(dato : any) : string{
    switch(dato){
      case 'Nombre':
        return 'text';
        break;
      case 'Apellido':
        return 'text';
        break;
      case 'Edad':
          return 'number';
          break;
      case 'Categoria':
        return 'text';
        break;
      default:
        return ''; 
         
    }
    
  }

  obtenerTipoElemento(dato : string) : string{
    console.log(dato);
    switch(dato.toLocaleLowerCase()){
      case 'nombre':
        return 'text';
        break;
      case 'apellido':
        return 'text';
        break;
      case 'edad':
          return 'number';
          break;
      case 'categoria':
        return 'choice';
        break;
      default:
        return ''; 
         
    }
  }

  obtenerClaves() : string[]{
    return ['Nombre', 'Apellido', 'Categoria'];
  };
  
}

export {Familiar};