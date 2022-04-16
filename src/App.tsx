import React from 'react';
import {StatusBar, useWindowDimensions} from 'react-native';
import Home from './views/Home';
import MainLayout from './layouts/MainLayout';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import VerticalPositionContext from './context/VerticalPositionContext';
import MobileLayout from './layouts/MobileLayout';
import {useResponsiveViewConditional} from './hooks/useResponsiveViewConditional';

const App = () => {
  const {height} = useWindowDimensions();

  const AbstractLayout = useResponsiveViewConditional([
    MainLayout,
    MobileLayout,
  ]);

  const y = useSharedValue(0);

  const progress = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    y.value = event.contentOffset.y;

    const interpolatedHeight = interpolate(y.value, [0, height], [0, height], {
      extrapolateRight: Extrapolate.CLAMP,
    });

    progress.value =
      (interpolatedHeight + event.contentOffset.y) / event.contentSize.height;
  });

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <VerticalPositionContext.Provider value={y}>
        <AbstractLayout progress={progress}>
          <Home onScroll={scrollHandler} />
        </AbstractLayout>
      </VerticalPositionContext.Provider>
    </React.Fragment>
  );
};

export default App;
