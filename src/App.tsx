import React from 'react';
import {StatusBar} from 'react-native';
import Home from './views/Home';
import MainLayout from './layouts/MainLayout';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const App = () => {
  const y = useSharedValue(0);

  const progress = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    y.value = event.contentOffset.y;
    progress.value = event.contentOffset.y / event.contentSize.height;
  });

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <MainLayout y={y} progress={progress}>
        <Home onScroll={scrollHandler} />
      </MainLayout>
    </React.Fragment>
  );
};

export default App;
