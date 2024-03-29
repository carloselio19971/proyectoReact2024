import React from 'react'
import { BrowserRouter as Router, Route,Routes, NavLink, Outlet } from 'react-router-dom';
import './MenuNavegacionCombo.css';
export const MenuNavegacionCombo = () => {
  return (
    <div className="menu-navegacion-combos">
      <nav>
          <ul>
            <li>
            <NavLink to="combos" activeclassname="active">Combos</NavLink>
            </li>
            <li>
            <NavLink to="combos/hamburguesas" activeclassname="active">Hamburguesas</NavLink>
            </li>
            <li>
            <NavLink to="combos/menuPlato" activeclassname="active">Menús Plato</NavLink> 
            </li>
            <li>
            <NavLink to="combos/loncherita" activeclassname="active">Loncherita</NavLink> 
            </li>
            <li>
            <NavLink to="combos/complementos"  activeclassname="active">Complemento</NavLink>   
            </li>
            <li>
            <NavLink to="combos/bebidas" activeclassname="active">Bebidas</NavLink>   
            </li>
            <li>
            <NavLink to="combos/helado"  activeclassname="active">Helado</NavLink>   
            </li>
            <li>
            <NavLink to="combos/inkachip"   activeclassname="active">Inka Chips</NavLink> 
            </li>
          </ul>
        </nav>
      </div>
  )
}


