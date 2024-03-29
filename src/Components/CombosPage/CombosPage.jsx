import './CombosPage.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Routes, NavLink, Outlet , useLocation } from 'react-router-dom';
import { InkaChip } from './InkaChip';
import { MenuPlato } from './MenuPlato';
import { Helado } from './Helado';
import { Loncherita } from './Loncherita';
import { Pollo } from './Pollo';
import { Complementos } from './Complementos';
import { Bebidas } from './Bebidas';
import { MenuNavegacionCombo } from './MenuNavegacionCombo';
import {Hamburgesas} from './Hamburgesas';
import { readCombosHamburgesas } from '../../Services/Services';
import { CombosItem } from './CombosItem';

export const CombosPage = () => {
  const [burgerCombosData, setburgerCombosData] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isCombosCombosRoute = location.pathname === "/combos/combos" ||  location.pathname === "/combos";
 
  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readCombosHamburgesas();
        console.log(data);
        setburgerCombosData(data);
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
    <>
   <div className="container-combos">
    <div className="ancho">
   
    <MenuNavegacionCombo/>
    <Routes>
          <Route path="/*" element={<Outlet />} />
          <Route path="/combos/hamburguesas" element={<Hamburgesas />} />
          <Route path="/combos/pollo" element={<Pollo/>} />
          <Route path="/combos/menuPlato" element={<MenuPlato/>} />
          <Route path="/combos/loncherita" element={<Loncherita/>} />
          <Route path="/combos/complementos" element={<Complementos/>} />
          <Route path="/combos/bebidas" element={<Bebidas/>} />
          <Route path="/combos/helado" element={<Helado/>} />
          <Route path="/combos/inkachip" element={<InkaChip/>} />
        </Routes>
    </div>
   </div>
     {isCombosCombosRoute &&
  <div className='ancho container-combos-bembos'>
      <h2>CONOCE NUESTROS COMBOS | BEMBOS</h2>
      <div className="burger-combo-menu-container ">
              {burgerCombosData.map(burger => (
                <CombosItem key={burger.id} burger={burger} />
              ))}
      </div>  
  </div>}
  </>
  )
}

