import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import ProgressBar from '../components/ProgressBar';
import {SidebarProgression} from '../types/SidebarProgression';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const MainContainer = styled(View)`
  flex-direction: row;
  height: 100%;
`;

const VerticalProgression = styled(View)`
  height: 100%;
  width: 10px;
  background: #2a2a2a;
`;

const SidebarContainer = styled(View)`
  position: absolute;
  width: 450px;
  top: 0;
  left: 10px;
  padding-top: 120px;
  z-index: 10;
`;

const SidebarSectionContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

const SidebarSectionLeed = styled(View)`
  background-color: #2a2a2a;
  height: 2px;
  flex: 1;
`;

const SidebarLabel = styled(Text)`
  font-size: 28px;
  font-family: 'SF Pro Display';
  font-weight: 300;
  color: white;
  padding: 20px;
`;

const HelperContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 460px;
  height: 50px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const HelperText = styled(Text)`
  color: black;
  font-size: 30px;
  font-family: 'SF Pro Display';
  font-weight: 300;
`;

type MainLayoutTypes = {
  y: SharedValue<number>;
};

function MainLayout({
  children,
  progress,
  y,
}: PropsWithChildren<SidebarProgression & MainLayoutTypes>) {
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
      <SidebarContainer>
        <SidebarSectionContainer>
          <SidebarSectionLeed />
          <SidebarLabel>Who?</SidebarLabel>
        </SidebarSectionContainer>
        <SidebarSectionContainer style={{width: '80%'}}>
          <SidebarSectionLeed />
          <SidebarLabel>What?</SidebarLabel>
        </SidebarSectionContainer>
        <SidebarSectionContainer style={{width: '60%'}}>
          <SidebarSectionLeed />
          <SidebarLabel>When?</SidebarLabel>
        </SidebarSectionContainer>
        <SidebarSectionContainer style={{width: '40%'}}>
          <SidebarSectionLeed />
          <SidebarLabel>Where?</SidebarLabel>
        </SidebarSectionContainer>
        <SidebarSectionContainer style={{width: '20%'}}>
          <SidebarSectionLeed />
          <SidebarLabel>Why?</SidebarLabel>
        </SidebarSectionContainer>
      </SidebarContainer>
      <HelperContainer style={helperContainerAnimatedStyle}>
        <HelperText>Scroll to see more</HelperText>
      </HelperContainer>
      {children}
    </MainContainer>
  );
}

export default MainLayout;
