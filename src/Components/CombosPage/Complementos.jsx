import {readComplemento} from '../../Services/Services';
import React, { useEffect, useState } from 'react'
import { BurgerItem } from './BurgerItem';

export const Complementos = () => {
  const [burgerComplementosData, setComplementosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readComplemento();
        console.log(data);
        setComplementosData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los complementos de hamburguesas:', error);
        setError(error);
        setLoading(false);
      }
    };
    readData();
  }, []);

  return (
    <div className='container-hamburgesas-bembos ancho'>
       <h1>CCONOCE NUESTROS DELICIOSOS COMPLEMENTOS | BEMBOS</h1>
       <div className="burger-container">
              {burgerComplementosData.map(burger => (
                <BurgerItem key={burger.id} burger={burger} />
              ))}
      </div>  
    </div>
  )
}

