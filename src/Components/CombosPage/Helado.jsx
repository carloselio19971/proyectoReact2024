import {readHelados} from '../../Services/Services'
import React, { useEffect, useState } from 'react'
import { BurgerItem } from './BurgerItem';

export const Helado = () => {
  const [burgerReadHelados, setReadHelados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readHelados();
        console.log(data);
        setReadHelados(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los helados:', error);
        setError(error);
        setLoading(false);
      }
    };
    readData();
  }, []);

  return (
    <div className='container-hamburgesas-bembos ancho'>
       <h1>Deliciosos helados para ti | BEMBOS</h1>
       <div className="burger-container">
              {burgerReadHelados.map(burger => (
                <BurgerItem key={burger.id} burger={burger} />
              ))}
      </div>  
    </div>
  )
}


