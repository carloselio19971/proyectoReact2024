import React, { useEffect, useState } from 'react';
import { readBurgerMenu } from '../../../Services/Services';

export const BurgerMenu = () => {
  const [burgerMenuData, setBurgerMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const readData = async () => {
      try {
        const data = await readBurgerMenu();
        console.log(data);
        setBurgerMenuData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los menús de hamburguesas:', error);
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
    <h2>Menús de Hamburguesas</h2>
    <ul>
      {burgerMenuData.map(menuItem => (
        <li key={menuItem.id}>{menuItem.nombre}</li>
      ))}
    </ul>
  </div>
  )
}


