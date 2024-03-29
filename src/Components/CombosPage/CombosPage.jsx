import './CombosPage.css'
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

export const CombosPage = () => {
  const location = useLocation();
  const isCombosCombosRoute = location.pathname === "/combos/combos" ||  location.pathname === "/combos";
  return (
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
      {isCombosCombosRoute && <h1>Combos</h1>}
    </div>
   
   </div>
  )
}

