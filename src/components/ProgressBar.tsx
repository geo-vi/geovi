import React from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {SidebarProgression} from '../types/SidebarProgression';

function ProgressBar({progress}: SidebarProgression) {
  const style = useAnimatedStyle(() => ({
    width: '100%',
    height: progress.value * 100 + '%',
    background: 'white',
  }));

  return <Animated.View style={style} />;
}

export default ProgressBar;
