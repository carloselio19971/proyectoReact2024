import {readBebidas} from '../../Services/Services';
import React, { useEffect, useState } from 'react'
import { BurgerItem } from './BurgerItem';

export const Bebidas = () => {
  const [burgerBebidasData, setburgerBebidasData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readBebidas();
        console.log(data);
        setburgerBebidasData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las bebidas:', error);
        setError(error);
        setLoading(false);
      }
    };
    readData();
  }, []);

  return (
    <div className='container-hamburgesas-bembos ancho'>
       <h1>BEBIDAS PARA REFRESCAR TU DIA | BEMBOS</h1>
       <div className="burger-container">
              {burgerBebidasData.map(burger => (
                <BurgerItem key={burger.id} burger={burger} />
              ))}
      </div>  
    </div>
  )
}


