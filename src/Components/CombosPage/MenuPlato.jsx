import { MenuNavegacionCombo } from "./MenuNavegacionCombo"
import React, { useEffect, useState } from 'react';
import {readMenuPlato} from '../../Services/Services'
import { BurgerItem } from "./BurgerItem";

export const MenuPlato = () => {
  const [burgerPlatoData, setburgerPlatoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readMenuPlato();
        console.log(data);
        setburgerPlatoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del plato:', error);
        setError(error);
        setLoading(false);
      }
    };

    readData();
  }, []);



  return (
    <div className='container-hamburgesas-bembos ancho'>
    <h1>CONOCE NUESTROS MENÚ AL PLATO | BEMBOS</h1>
    <div className="burger-container">
           {burgerPlatoData.map(burger => (
             <BurgerItem key={burger.id} burger={burger} />
           ))}
   </div>  
 </div>
  )
}

