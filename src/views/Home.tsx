import {Text} from 'react-native';
import React, {useRef} from 'react';
import Page from '../components/styled/Page';
import Animated from 'react-native-reanimated';
import {Landing, Who} from './pages';

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
      <Page style={{backgroundColor: 'pink'}} />
      <Page />
      <Page />
      <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>Last page</Text>
      </Page>
    </Animated.ScrollView>
  );
}

export default Home;
