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
    <React.Fragment>
      <MainContainer>
        <VerticalProgression>
          <ProgressBar progress={progress} />
        </VerticalProgression>
        {children}
        <MobileHeader
          onPressMenuButton={onPressMenuButton}
          onPressWorkTogether={onPressWorkTogether}
        />
      </MainContainer>
      <MenuModal
        visible={menuOpen}
        onCloseModal={onCloseModal}
        onPageTravel={onPageTravel}
        onPressWorkTogether={onPressWorkTogether}
      />
    </React.Fragment>
  );
}

export default MobileLayout;
