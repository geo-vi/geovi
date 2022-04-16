import {Text} from 'react-native';
import React, {useRef} from 'react';
import Page from '../components/styled/Page';
import Animated from 'react-native-reanimated';
import {Landing, Who, What} from './pages';
import WherePage from "./pages/WherePage";

type HomeTypes = {
  onScroll: any;
};

function Home({onScroll}: HomeTypes) {
  const scrollViewRef = useRef<any>();

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      scrollEventThrottle={16} // ~60 events per second
      onScroll={onScroll}>
      <Landing index={0} />
      <Who index={1} />
      <What index={2} />
      <WherePage index={3} />
      <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>Last page</Text>
      </Page>
    </Animated.ScrollView>
  );
}

export default Home;
