import { NavBarProps } from '../../types/types';
import './NavBar.css';

const NavBar: React.FC<NavBarProps> = ({ onOptionClick }) => {
  return (
    <div className="nav">
      <ul>
        <li onClick={() => onOptionClick('AVENTURAS')}>AVENTURAS</li>
        <li onClick={() => onOptionClick('PERSONAJES')}>PERSONAJES</li>
        <li>MAPAS</li>
      </ul>
    </div>
  );
};

export default NavBar;
