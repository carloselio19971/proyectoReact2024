import './MenuPage.css';
import ubicacion from '../../Imagenes/ubicacion.png';
import bannerImage1 from '../../Imagenes/banner-1.jpg';
import bannerImage2 from '../../Imagenes/banner-2.jpg';
import bannerImage3 from '../../Imagenes/banner-3.jpg';
import bannerImage4 from '../../Imagenes/banner-4.jpg';
import rightArrowIcon from '../../Imagenes/flecha-derercha.svg';
import leftArrowIcon from '../../Imagenes/flecha-izquierda.svg'
import { useState } from 'react';



export const MenuPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [bannerImage1, bannerImage2, bannerImage3, bannerImage4]

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <>
    <div className='contanier-menu-bembos'>
      <div className='ancho'>
      <div className="header-menu-bembos">
      <div className="texto-menu">
        <p>Se está mostrando el menú del restaurante</p>
      </div>
      <div className="contenedor-general">
      <div className="icono-general">
          <img src={ubicacion}/>
        </div>
        <div className="texto-general">
          <p>GENERAL</p>
        </div>
       
      </div>
      <div className="contenedor-boton-cambiar">
        <button>Cambiar</button>
      </div>
      </div>
      </div>
     
    
    </div>
    <section className="slider-container-2 ancho">
      <div className="img-slide">
        <div className="previous-image">
          <img src={leftArrowIcon} className='icon-previous' onClick={goToPrevious} alt="Flecha Izquierda" />
        </div>
        <div className="next-image">
          <img src={rightArrowIcon} className='icon-next' onClick={goToNext} alt="Flecha Derecha" />
        </div>
        <img src={images[currentIndex]} alt={`imagen ${currentIndex + 1}`} />
      </div>
    </section>
    </>
  )
}

