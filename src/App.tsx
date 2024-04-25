import { useState } from 'react';
import SidePanel from './components/SidePanel/SidePanel';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import './App.css';
import info from './info.json';
import { Info } from './types/types';

function App() {
  type Option = 'AVENTURAS' | 'PERSONAJES';
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showLateralMenu, setShowLateralMenu] = useState<boolean>(false);
  const [option, setOption] = useState<Option>('AVENTURAS');

  const handleMenuClick = (id: number): void => {
    setSelectedId(id);
  };
  const handleOptionClick = (option: Option): void => {
    setOption(option);
    setSelectedId(null);
    setShowLateralMenu(true);
  };

  const data: Info = info;
  const contentToShow = data[option];

  return (
    <>
      <div className="container">
        <NavBar onOptionClick={handleOptionClick} />
        <div className="content">
          {showLateralMenu ? (
            <SidePanel onMenuClick={handleMenuClick} list={contentToShow} />
          ) : null}

          <Content selectedId={selectedId} list={contentToShow} />
        </div>
      </div>
    </>
  );
}

export default App;
