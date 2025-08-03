import './NavBar.css';

interface Props {
  onOptionClick: (option: 'AVENTURAS' | 'PERSONAJES' | 'LUGARES') => void;
}

const NavBar = ({ onOptionClick }: Props) => {
  return (
    <div className="nav">
      <ul>
        <li onClick={() => onOptionClick('AVENTURAS')}>AVENTURAS</li>
        <li onClick={() => onOptionClick('PERSONAJES')}>PERSONAJES</li>
        <li onClick={() => onOptionClick('LUGARES')}>LUGARES</li>
      </ul>
    </div>
  );
};

export default NavBar;
