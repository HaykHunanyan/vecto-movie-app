import React, { useState } from 'react';
import MainMenuItems from '../molecules/MainMenu/MainMenu';

const MainMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
        <MainMenuItems handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} />
    </>
  );
};

export default MainMenu;
