import { Menu } from './Menu'; 
import { Schedule } from './Schedule'; 
import { Slider } from './Slider';
import { LogoAndDelivery } from './LogoAndDelivery';
import '../Header/Header.css';
export const Header = () => {
  return (
    <div>
      <Schedule/>
      <LogoAndDelivery/>
      <Menu/>
      <Slider/>
    </div>
  )
}

