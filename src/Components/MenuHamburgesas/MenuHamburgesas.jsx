import { useEffect, useState } from "react";
import { readBurgerMenu } from '../../Services/Services';
import {BurgerMenuItem} from '../BurgerPromoMenu/BurgerMenu/BurgerMenuItem'
export const MenuHamburgesas = () => {
BurgerMenuItem
    const [burgerMenuData, setBurgerMenuData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const readData = async () => {
          try {
            const data = await readBurgerMenu();
            console.log(data);
            setBurgerMenuData(data);
            setLoading(false);
          } catch (error) {
            console.error('Error al obtener los menús de hamburguesas:', error);
            setError(error);
            setLoading(false);
         
          }
        };
    
        readData();
      }, []);

      if (loading) {
        return <div>Cargando...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    

  return (
    <div className='ancho'>
      <div className='container-promo'>
      <div className='container-burger-menu-header'>
      <h2 className='title-menu-burge'>Menús de Hamburguesas</h2>
      </div>
    
      <div className="burger-menu-container ">
              {burgerMenuData.map(burger => (
                <BurgerMenuItem key={burger.id} burger={burger} />
              ))}
      </div>  
    </div>
   </div>
  )
}


