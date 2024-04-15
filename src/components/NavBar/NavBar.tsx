import React from 'react'
import './NavBar.css'

function NavBar({ onOptionClick }) {
  return (
    <div className="nav">
      <ul>
        <li onClick={() => onOptionClick('AVENTURAS')}>AVENTURAS</li>
        <li onClick={() => onOptionClick('PERSONAJES')}>PERSONAJES</li>
        <li>MAPAS</li>
      </ul>
    </div>
  )
}

export default NavBar
