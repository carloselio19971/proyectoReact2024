import React, { useEffect, useState } from 'react';
import { readBurgerMenu } from '../../../Services/Services';
import '../BurgerMenu/BurgerMenu.css';
import { BurgerMenuItem } from './BurgerMenuItem';
import { Pagination} from '../../Pagination/Pagination';


export const BurgerMenu = () => {

  const [burgerMenuData, setBurgerMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Paginacion
  const [currentPage,setCurrentPage]=useState(1);
  const [cantidadMenu,setcantidadMenu,]=useState(5);

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

    //El inidice final es la pagina actual y la cantidad de paginas
    const indexFinal=currentPage*cantidadMenu;
    const indexInicial=indexFinal-cantidadMenu;
    const nMenu=burgerMenuData.slice(indexInicial,indexFinal);
    const nPaginas=Math.ceil(burgerMenuData.length /cantidadMenu);
    console.log(nPaginas);


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
      <div className='contenedor-pagination'>
      <Pagination
      setCurrentPage={setCurrentPage} currentPage={currentPage} nPaginas={nPaginas} 
      />   
      </div>
     
      </div>
    
      <div className="burger-menu-container ">
              {nMenu.map(burger => (
                <BurgerMenuItem key={burger.id} burger={burger} />
              ))}
      </div>  
      <div className='paginas-promocion'>
        { <h3>{currentPage} / {nPaginas}</h3> }
        </div>
      </div>
      
    </div>
  )
}


