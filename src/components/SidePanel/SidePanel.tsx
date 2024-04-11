import React from 'react'
import info from '../../info.json'

const SidePanel = () => {
    console.log(info)
  return (
    <div className="lateral_menu">
    <ul>
      {info['AVENTURAS'].map((aventura) => {
        const { title } = aventura;
        return (
          <li
            className="menu_item"
            key={aventura.id}
          >
            {title}
          </li>
        );
      })}
    </ul>
  </div>
  )
}

export default SidePanel




// const LateralMenu = ({ onMenuClick, list }) => {
//   return (
//     <div className="lateral_menu">
//       <ul>
//         {list.map((aventura) => {
//           const { title } = aventura;
//           return (
//             <li
//               className="menu_item"
//               key={aventura.id}
//               onClick={() => onMenuClick(aventura.id)}
//             >
//               {title}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default LateralMenu;