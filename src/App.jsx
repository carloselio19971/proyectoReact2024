import React, {useState } from "react";
import { BurgerPromoMenu } from "./Components/BurgerPromoMenu/BurgerPromoMenu"
import { Header } from "./Components/Header"
import { Footer } from "./Components/FooterBembos/Footer";
//Contexto de la aplicacion
export const ContextBurgerPromo=React.createContext('');

export const App = () => {

  const [BurgerPromo, setBurgerPromo] = useState(5);

  return (
    <div>
      <Header/>
      <ContextBurgerPromo.Provider value={BurgerPromo}>
        <BurgerPromoMenu/>
      </ContextBurgerPromo.Provider>
      <Footer label="He leido y revisado los terminos y condiciones " />
      
    </div>
  )
}
