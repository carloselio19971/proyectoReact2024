import {readLoncheritasTipos} from '../../Services/Services';
import React, { useEffect, useState } from 'react';
import { BurgerItem } from './BurgerItem';

export const Loncherita = () => {
  const [burgerLoncheritasData, setLoncheritasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readLoncheritasTipos();
        
        console.log(data);
        setLoncheritasData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos de la loncheritas', error);
        setError(error);
        setLoading(false);
      }
    };

    readData();
  }, []);


  return (
    <div className='container-hamburgesas-bembos ancho'>
    <h1>DESCUBRE NUESTRAS LONCHERAS | BEMBOS| BEMBOS</h1>
    <div className="burger-container">
           {burgerLoncheritasData.map(burger => (
             <BurgerItem key={burger.id} burger={burger} />
           ))}
   </div>  
 </div>
  )
}
