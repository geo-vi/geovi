import React from 'react';
import {StatusBar, Dimensions} from 'react-native';
import Home from './views/Home';
import MainLayout from './layouts/MainLayout';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import VerticalPositionContext from './context/VerticalPositionContext';

const {height} = Dimensions.get('window');

const App = () => {
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
        <MainLayout progress={progress}>
          <Home onScroll={scrollHandler} />
        </MainLayout>
      </VerticalPositionContext.Provider>
    </React.Fragment>
  );
};

export default App;
