import React, {PropsWithChildren, useState} from 'react';
import {MainContainer, VerticalProgression} from '../components/styled';
import ProgressBar from '../components/ProgressBar';
import {SidebarProgression} from '../types/SidebarProgression';
import MenuModal from '../components/MenuModal';
import MobileHeader from '../components/MobileHeader';
import {AbstractLayoutTypes} from '../types/AbstractLayoutTypes';

function MobileLayout({
  children,
  progress,
  onPageTravel,
}: PropsWithChildren<SidebarProgression & AbstractLayoutTypes>) {
  const [menuOpen, setMenuOpen] = useState(false);

  function onPressMenuButton() {
    setMenuOpen(true);
  }

  function onCloseModal() {
    setMenuOpen(false);
  }

  function onPressWorkTogether() {
    onPageTravel(4);
  }

  return (
    <MainContainer>
      <VerticalProgression>
        <ProgressBar progress={progress} />
      </VerticalProgression>
      {children}
      <MobileHeader
        onPressMenuButton={onPressMenuButton}
        onPressWorkTogether={onPressWorkTogether}
      />
      <MenuModal
        visible={menuOpen}
        onCloseModal={onCloseModal}
        onPageTravel={onPageTravel}
        onPressWorkTogether={onPressWorkTogether}
      />
    </MainContainer>
  );
}

export default MobileLayout;
