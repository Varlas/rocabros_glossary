import { NavBarProps } from '../../types/types';
import './NavBar.css';

interface Props {
  onOptionClick: (option: 'AVENTURAS' | 'PERSONAJES') => void;
}

const NavBar = ({ onOptionClick }: Props) => {
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
