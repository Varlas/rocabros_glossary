import './SidePanel.css';
import { Adventure, NPC, Places } from '../../types/types';
import React, { useState } from 'react';
interface Props {
  onMenuClick: (id: number) => void;
  list: Adventure[] | NPC[] | Places[];
}

const SidePanel = ({ onMenuClick, list }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredList =
    list?.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    ) || list;

  return (
    <div className="side_panel">
      {/* SEARCH BAR */}
      <div className="search_bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {/* --------- */}
      <ul className="side_panel_list">
        {filteredList.map((aventura) => {
          const { title } = aventura;
          return (
            <li
              className="menu_item"
              key={aventura.id}
              onClick={() => {
                console.log({ aventura });
                return onMenuClick(aventura.id);
              }}
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
