export const MenuItem = ({ imageSource, text, link, onMouseEnter, onMouseLeave }) => {

    const specialStyle = text === "PROMOCIONES" ? {
        filter: 'invert(26%) sepia(12%) saturate(5552%) hue-rotate(196deg) brightness(83%) contrast(109%)'
     } : {};
      
        return (
          <li className='item-menu' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='menu-link-container'>
              <div className='menu-image-container'>
                <img src={imageSource} alt={text} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={specialStyle} />
              </div>
              <a className="menu-link" target="_blank" href={link}>{text}</a>
            </div>
          </li>
        );
      }


