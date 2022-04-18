import React, {PropsWithChildren} from 'react';
import ProgressBar from '../components/ProgressBar';
import {SidebarProgression} from '../types/SidebarProgression';
import {
  MainContainer,
  VerticalProgression,
  WorkTogetherButton,
  WorkTogetherText,
} from '../components/styled';
import Sidebar from '../components/Sidebar';
import {AbstractLayoutTypes} from '../types/AbstractLayoutTypes';

function MainLayout({
  children,
  progress,
  onPageTravel,
}: PropsWithChildren<SidebarProgression & AbstractLayoutTypes>) {
  function onPressWorkTogether() {
    onPageTravel(4);
  }

  return (
    <MainContainer>
      <VerticalProgression>
        <ProgressBar progress={progress} />
      </VerticalProgression>
      <Sidebar onPageTravel={onPageTravel} />
      {children}
      <WorkTogetherButton onPress={onPressWorkTogether}>
        <WorkTogetherText>Let's work together!</WorkTogetherText>
      </WorkTogetherButton>
    </MainContainer>
  );
}

export default MainLayout;
