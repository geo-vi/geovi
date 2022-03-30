import React, {PropsWithChildren, useContext} from 'react';
import {MainContainer, VerticalProgression} from '../components/styled';
import ProgressBar from '../components/ProgressBar';
import VerticalPositionContext from '../context/VerticalPositionContext';
import {SidebarProgression} from '../types/SidebarProgression';

function MobileLayout({
  children,
  progress,
}: PropsWithChildren<SidebarProgression>) {
  return (
    <MainContainer>
      <VerticalProgression>
        <ProgressBar progress={progress} />
      </VerticalProgression>
      {children}
    </MainContainer>
  );
}

export default MobileLayout;
