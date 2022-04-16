import React, {PropsWithChildren, useState} from 'react';
import {MainContainer, VerticalProgression} from '../components/styled';
import ProgressBar from '../components/ProgressBar';
import {SidebarProgression} from '../types/SidebarProgression';
import MenuModal from '../components/MenuModal';
import MobileHeader from '../components/MobileHeader';

function MobileLayout({
  children,
  progress,
}: PropsWithChildren<SidebarProgression>) {
  const [menuOpen, setMenuOpen] = useState(false);

  function onPressMenuButton() {
    setMenuOpen(true);
  }

  function onCloseModal() {
    setMenuOpen(false);
  }

  return (
    <React.Fragment>
      <MainContainer>
        <VerticalProgression>
          <ProgressBar progress={progress} />
        </VerticalProgression>
        {children}
        <MobileHeader onPressMenuButton={onPressMenuButton} />
      </MainContainer>
      <MenuModal visible={menuOpen} onCloseModal={onCloseModal} />
    </React.Fragment>
  );
}

export default MobileLayout;
