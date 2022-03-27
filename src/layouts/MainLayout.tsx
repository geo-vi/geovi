import React, {PropsWithChildren, useContext} from 'react';
import ProgressBar from '../components/ProgressBar';
import {SidebarProgression} from '../types/SidebarProgression';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  HelperContainer,
  HelperText,
  MainContainer,
  VerticalProgression,
} from '../components/styled';
import Sidebar from '../components/Sidebar';
import VerticalPositionContext from '../context/VerticalPositionContext';

function MainLayout({
  children,
  progress,
}: PropsWithChildren<SidebarProgression>) {
  const y = useContext(VerticalPositionContext);

  const helperContainerAnimatedStyle = useAnimatedStyle(() => {
    const left = interpolate(y.value, [0, 400], [0, -500], {
      extrapolateRight: Extrapolate.CLAMP,
    });

    return {
      transform: [
        {
          translateX: left,
        },
      ],
    };
  });

  return (
    <MainContainer>
      <VerticalProgression>
        <ProgressBar progress={progress} />
      </VerticalProgression>
      {/*<Sidebar />*/}
      {/*<HelperContainer style={helperContainerAnimatedStyle}>*/}
      {/*  <HelperText>Scroll to see more</HelperText>*/}
      {/*</HelperContainer>*/}
      {children}
    </MainContainer>
  );
}

export default MainLayout;
