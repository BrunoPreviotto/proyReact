import { useEffect, useState } from 'react';

export function useFetch(url){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataMap, setDataMap] = useState(new Map());

 
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);

        const mapa = new Map(result.map(item => [item.id, item]));
        // Actualizar el estado con el mapa creado
        setDataMap(mapa);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
      fetchData();
  }, [url]);

  
 
  return { data, loading, error, fetchData, dataMap };
  
    /*const [data, setData] =  useState([]);
    useEffect(() => {
        fetch(url)
          .then(response => response.json()) 
          .then((data) => setData(data));
      }, []);

      return data;*/
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