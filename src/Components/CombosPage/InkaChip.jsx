import {readInkaChip} from '../../Services/Services';
import React, { useEffect, useState } from 'react'
import { BurgerItem } from './BurgerItem';


export const InkaChip = () => {
  const [burgerInkaChips, setburgerInkaChips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readInkaChip();
        console.log(data);
        setburgerInkaChips(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener InkaChip:', error);
        setError(error);
        setLoading(false);
      }
    };
    readData();
  }, []);


  return (
    <div className='container-hamburgesas-bembos ancho'>
       <h1>DESCUBRE NUESTRAS DELICOSAS INKA CHIPS | BEMBOS</h1>
       <div className="burger-container">
              {burgerInkaChips.map(burger => (
                <BurgerItem key={burger.id} burger={burger} />
              ))}
      </div>  
    </div>
  )
}
