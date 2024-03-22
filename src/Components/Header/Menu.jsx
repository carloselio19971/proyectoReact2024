import { useState } from "react";
import combos from "../../Imagenes/combos.png";
import hamburgesaMenu from "../../Imagenes/hamburguesamenu.png";
import promociones from "../../Imagenes/promociones.svg";
import hamburgesas from "../../Imagenes/hamburguesa.png";
import beneficios from "../../Imagenes/beneficios.png";
import tiendaIcon from "../../Imagenes/tienda.png";
import carritoIcon from "../../Imagenes/carrito-de-compras.svg";
import { MenuItem } from "./MenuItem";
import logoMobile from "../../Imagenes/logo2bembos.jpg";

export const Menu = () => {
  const menuItemsData = [
    { imageSource: combos, text: "MENÚ", link: "https://www.youtube.com/" },
    {
      imageSource: hamburgesaMenu,
      text: "COMBOS",
      link: "https://www.facebook.com/?locale=es_LA",
    },
    {
      imageSource: promociones,
      text: "PROMOCIONES",
      link: "https://www.instagram.com/",
    },
    {
      imageSource: hamburgesas,
      text: "HAMBURGUESAS",
      link: "https://www.toyotaperu.com.pe/",
    },
    {
      imageSource: beneficios,
      text: "BENEFICIOS",
      link: "https://www.kia.com/pe/main.html",
    },
  ];

  const promotionsList = [
    { promocion: "Promociones Personales", link: "https://www.youtube.com/" },
    { promocion: "Promoción para 2", link: "https://www.youtube.com/" },
    { promocion: "Promoción para Compartir", link: "https://www.youtube.com/" },
    { promocion: "Cupones", link: "https://www.youtube.com/" },
  ];

  const [showPromotionsList, setShowPromocionesList] = useState(false);

  const handleMouseEnter = () => {
    setShowPromocionesList(true);
  };

  const handleMouseLeave = () => {
    setShowPromocionesList(false);
  };

  return (
    <div className="global-navigation-menu-container">
      <div className="c width ancho">
        <div className="menu">
          <nav>
            <ul className="menu-list" onMouseLeave={handleMouseLeave}>
              {/* Mapeando los elementos del menú */}
              {menuItemsData.map((item, index) => (
                <MenuItem
                  key={index}
                  imageSource={item.imageSource}
                  text={item.text}
                  link={item.link}
                  onMouseEnter={
                    item.text === "PROMOCIONES" ? handleMouseEnter : undefined
                  }
                  onMouseLeave={
                    item.text === "PROMOCIONES" ? handleMouseLeave : undefined
                  }
                />
              ))}
            </ul>
          </nav>
          {/* Mostrando la lista de promociones */}
          {showPromotionsList && (
            <ul
              className="promotions-list"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {promotionsList.map(({ promocion, link }, index) => (
                <li className="promotion-item" key={index}>
                  <a href={link} target="_blank">
                    {promocion}{" "}
                  </a>{" "}
                  <hr className="promotion-item"></hr>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Contenedor de botones */}
        <div className="buttons-container">
          {/* Botón "Pide en tiendas" */}
          <div className="shop-order">
            <div className="shop-icon">
              <img src={tiendaIcon} alt="Tienda Icon" />{" "}
              {/* Añadido atributo alt */}
            </div>
            <div className="shop-text">
              <p>
                Pide en tiendas <span>SIN COLAS</span>
              </p>
            </div>
          </div>
          {/* Botón "Carrito de compras" */}
          <div className="shopping-cart">
            <div className="cart-icon-container">
              <img src={carritoIcon} alt="Carrito Icon" />{" "}
              {/* Añadido atributo alt */}
              <div className="cart-counter">0</div>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
            <div className="icon-bembos-mobile">
              <img src={logoMobile} alt="mobile-icon" />
            </div>
            <div className="shop-order-mb">
              <div className="shop-icon-mb">
                <img src={tiendaIcon} alt="Tienda Icon" />{" "}
                {/* Añadido atributo alt */}
              </div>
              <div className="shop-text-mb">
                <p>
                  Pide en tiendas <span>SIN COLAS</span>
                </p>
              </div>
              <div className="contanier-icons-phone-hamburger-menu">
                <div className="icon-phone">
                  <p>Soy un telefono</p>
                </div>
                <div className="hamburger-menu">
                  <p>Hamburgesa</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
