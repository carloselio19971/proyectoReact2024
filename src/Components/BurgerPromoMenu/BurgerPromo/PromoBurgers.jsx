import React, { useEffect, useState } from 'react'
import { readPromoBurgers } from '../../../Services/Services'


export const PromoBurgers = () => {
  const [promoBurgersData, setPromoBurgersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readPromoBurgers();
        console.log(data);
        setPromoBurgersData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las promociones de hamburguesas:', error);
        setError(error);
        setLoading(false);
      }
    };

    readData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h2>Promociones de Hamburguesas</h2>
    <ul>
      {promoBurgersData.map(promoItem => (
        <li key={promoItem.id}>{promoItem.nombre}</li>
      ))}
    </ul>
  </div>
  )
}
