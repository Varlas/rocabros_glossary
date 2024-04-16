import { useState } from 'react'
import SidePanel from './components/SidePanel/SidePanel'
import NavBar from './components/NavBar/NavBar'
import Content from './components/Content/Content';
import './App.css'
import info from './info.json'

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [showLateralMenu, setShowLateralMenu] = useState(false);
  const [option, setOption] = useState('');
  const handleMenuClick = (id) => {
    setSelectedId(id);
  };
  const handleOptionClick = (option) => {
    setOption(option);
    setSelectedId(null);
    setShowLateralMenu(true);
  };

  const data = info[option];

  return (
    <>
    <div className="container">
      <NavBar onOptionClick={handleOptionClick} />
      <div className="content">
        {
          showLateralMenu ?
          <SidePanel onMenuClick={handleMenuClick} list={data} />
          :
          null
        }
        
        <Content selectedId={selectedId} list={data} />
        
      </div>
    </div>
    </>
  )
}

export default App
