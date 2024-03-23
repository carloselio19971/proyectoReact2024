import React, {useState } from "react";
import { BurgerPromoMenu } from "./Components/BurgerPromoMenu/BurgerPromoMenu"
import { Header } from "./Components/Header"
//Contexto de la aplicacion
export const ContextBurgerPromo=React.createContext('');

export const App = () => {

  const [BurgerPromo, setBurgerPromo] = useState(5);

  return (
    <div>
      <Header></Header>
      <ContextBurgerPromo.Provider value={BurgerPromo}>
        <BurgerPromoMenu/>
      </ContextBurgerPromo.Provider>
      
    </div>
  )
}
