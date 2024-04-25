import './SidePanel.css';
import { Adventure, NPC } from '../../types/types';
interface Props {
  onMenuClick: (id: number) => void;
  list: Adventure[] | NPC[];
}

const SidePanel = ({ onMenuClick, list }: Props) => {
  return (
    <div className="side_panel">
      <ul>
        {list.map((aventura) => {
          const { title } = aventura;
          return (
            <li
              className="menu_item"
              key={aventura.id}
              onClick={() => onMenuClick(aventura.id)}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidePanel;
