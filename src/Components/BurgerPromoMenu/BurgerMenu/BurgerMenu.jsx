import React, { useEffect, useState } from 'react';
import { readBurgerMenu } from '../../../Services/Services';
import '../BurgerMenu/BurgerMenu.css';
import { BurgerMenuItem } from './BurgerMenuItem';
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
    <div className='ancho'>
      <h2 className='title-menu-burge'>Menús de Hamburguesas</h2>
      <div className="burger-menu-container ">
              {burgerMenuData.map(burger => (
                <BurgerMenuItem key={burger.id} burger={burger} />
              ))}
      </div>     
    </div>
  )
}


