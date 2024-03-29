import corazon from '../../Imagenes/corazon.svg';


export const CombosItem = ({burger}) => {
    const  { img, nombre, precio } = burger;
  return (
     <div className="combos-item">
        <div className="content-promotion-card">
     <div className="div-promotion-img">
       <img className="promotion-img" src={img}></img>
     </div>
     <div className="div-promotion-content">
       <a href="#" className="promo-content-name">
         <h4>{nombre}</h4>
       </a>
       <div className="div-content-price">
         <p className="real-price">
           S/ {precio}
         </p>
         <p className='terminos-condiciones'>
            <span>Terminos y condiciones</span>
         </p>
       </div>
       <button type="button" className="promo-content-button">Ver más</button>
     </div>
     <div className="corazon">
       <img className='img-corazon' src={corazon}/>
     </div>
   </div> 
     </div>
  )
}
