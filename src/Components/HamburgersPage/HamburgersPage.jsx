import { MenuNavegacionCombo } from "../CombosPage/MenuNavegacionCombo"
import React, { useEffect, useState } from 'react'
import {readHamburguesas} from "../../Services/Services";
import { BurgerItem } from "../CombosPage/BurgerItem";


export const HamburgersPage = () => {
  const [burgerHamburgerData, setburgerHamburgerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readHamburguesas();
        console.log(data);
        setburgerHamburgerData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los combos de hamburguesas:', error);
        setError(error);
        setLoading(false);
      }
    };
    readData();
  }, []);

  return (
    <div>
      <MenuNavegacionCombo/>
      <div className='container-hamburgesas-bembos ancho'>
       <h1>CONOCE NUESTRAS IRRESISTIBLES HAMBURGUESAS | BEMBOS</h1>
       <div className="burger-container">
              {burgerHamburgerData.map(burger => (
                <BurgerItem key={burger.id} burger={burger} />
              ))}
      </div>  
    </div>
    </div>
  )
}


