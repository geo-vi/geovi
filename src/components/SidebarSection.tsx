import {
  SidebarLabel,
  SidebarSectionContainer,
  SidebarSectionLeed,
} from './styled';
import React, {useContext} from 'react';
import {Dimensions} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import VerticalPositionContext from '../context/VerticalPositionContext';
import useScrollProgression from '../hooks/useScrollProgression';

const {height} = Dimensions.get('window');

type SidebarSectionTypes = {
  label: string;
  index: number;
  offset: string;
};

function SidebarSection({label, index, offset}: SidebarSectionTypes) {
  const y = useContext(VerticalPositionContext);

  const sectionProgression = useScrollProgression(index, height);

  const sectionContainerStyle = useAnimatedStyle(() => ({
    opacity: sectionProgression.value === 100 ? 0 : 1,
    width: offset,
  }));

  const sectionLeedStyle = useAnimatedStyle(() => {
    return {
      width: `${sectionProgression.value}%`,
      height: '100%',
      background: 'white',
    };
  }, [y]);

  const textStyle = useAnimatedStyle(() => ({
    color: sectionProgression.value > 0 ? 'white' : '#2a2a2a',
  }));

  return (
    <SidebarSectionContainer style={sectionContainerStyle}>
      <SidebarSectionLeed>
        <Animated.View style={sectionLeedStyle} />
      </SidebarSectionLeed>
      <SidebarLabel style={textStyle}>{label}</SidebarLabel>
    </SidebarSectionContainer>
  );
}

export default SidebarSection;
