import React, {PropsWithChildren} from 'react';
import {MainContainer, VerticalProgression} from '../components/styled';
import ProgressBar from '../components/ProgressBar';
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
