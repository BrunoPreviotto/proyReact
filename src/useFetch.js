import { useEffect, useState } from 'react';

export function useFetch(url){
    const [data, setData] =  useState([]);
    useEffect(() => {
        fetch(url)
          .then(response => response.json()) 
          .then((data) => setData(data));
      }, []);

      return data;
}
/*export async function useFetch(url){
    const [datos, setData] =  useState(null);
    try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        datos = await respuesta.json();
        console.log(datos)
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
      return datos;
}*/