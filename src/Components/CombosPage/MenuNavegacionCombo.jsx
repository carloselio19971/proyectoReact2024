import React from 'react'
import { BrowserRouter as Router, Route,Routes, NavLink, Outlet } from 'react-router-dom';
import './MenuNavegacionCombo.css';
export const MenuNavegacionCombo = () => {
  return (
    <div className="menu-navegacion-combos">
      <nav>
          <ul>
            <li>
            <NavLink to="combos">Combos</NavLink>
            </li>
            <li>
            <NavLink to="combos/hamburguesas">Hamburguesas</NavLink>
            </li>
            <li>
            <NavLink to="combos/menuPlato">Menús Plato</NavLink> 
            </li>
            <li>
            <NavLink to="combos/loncherita">Loncherita</NavLink> 
            </li>
            <li>
            <NavLink to="combos/complementos">Complemento</NavLink>   
            </li>
            <li>
            <NavLink to="combos/bebidas">Bebidas</NavLink>   
            </li>
            <li>
            <NavLink to="combos/helado">Helado</NavLink>   
            </li>
            <li>
            <NavLink to="combos/inkachip">Inka Chips</NavLink> 
            </li>
          </ul>
        </nav>
      </div>
  )
}


