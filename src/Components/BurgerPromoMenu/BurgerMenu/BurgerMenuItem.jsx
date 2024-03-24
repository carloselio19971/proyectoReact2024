import { LazyLoadImage } from 'react-lazyload';

export const BurgerMenuItem = ({ burger  }) => {
  return (
       <div className="burger-card">
         <img src={burger.img} alt={burger.nombre} loading="lazy"/>
         <h3>{burger.nombre}</h3>
         <button>
         <a href={burger.link} target="_blank" >Ver más</a>
         </button>
         
        </div> 
   
  )
}

