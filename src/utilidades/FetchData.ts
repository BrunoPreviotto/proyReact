import { Objeto } from "../interfaces/Objeto";


class FetchData{
  
  async fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async get(url: string, id: number): Promise<any> {
   console.log(url + id);
    try {
      const response = await fetch(url + id);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async post(url: string, objeto : {}): Promise<any> {
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objeto)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Hubo un problema al realizar la solicitud.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });

    
  }

  async put(url: string, objeto : Objeto | {}): Promise<any> {
    let id = '0';
    Object.entries(objeto).map(([key, value] : [string, string]) => {
          if(key == 'id'){
            id = value;
          }
    });
   fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objeto)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Hubo un problema al realizar la solicitud.');
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
      console.error('Error al realizar la solicitud:', error);
    });
    
}

async delete(url: string): Promise<any> {
 
 fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Hubo un problema al realizar la solicitud.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
  
}


}

  

export {FetchData};