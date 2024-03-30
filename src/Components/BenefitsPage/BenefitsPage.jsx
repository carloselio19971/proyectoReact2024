import './BenefitsPage.css';
import friendzone from'../../Imagenes/friendzone.jpg';
import gileos from  '../../Imagenes/gileos.jpg';
import  relacion from '../../Imagenes/relacion.jpg';
import  destinados from'../../Imagenes/destinados.jpg';


export const BenefitsPage = () => {
  return (
    <div className="container-beneficios ancho">
      <div className="contanier-header-beneficios">
        <h2>DISFRUTA DE NUESTROS BENEFICIOS | BEMBOS</h2>
      </div>
      <div className='tipos-beneficios'>
        <div className='friend-zone'>
          <img src={friendzone}></img>
        </div>
        <div className='gileos'>
          <img src={gileos}></img>
        </div>
        <div className='relacion'>
        <img src={relacion}></img>
        </div>
        <div className='destinados'>
        <img src={destinados}></img>
        </div>
      </div>
    </div>
  )
}

