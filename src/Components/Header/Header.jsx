import { Menu } from './Menu'; 
import { Schedule } from './Schedule'; 
import { Slider } from './Slider';
import { LogoAndDelivery } from './LogoAndDelivery';
import './Header.css';
export const Header = () => {
  return (
    <div className="header-wrapper">
    <div className="fixed-header">
      <Schedule />
      <LogoAndDelivery />
      <Menu />
    </div>
    <Slider />
  </div>
  )
}

