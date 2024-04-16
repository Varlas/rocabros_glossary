import React from 'react'
import './SidePanel.css'

const SidePanel = ({ onMenuClick, list }) => {
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
  )
}

export default SidePanel;