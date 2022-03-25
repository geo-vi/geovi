import {Text} from 'react-native';
import React, {useRef} from 'react';
import Logo from '../components/Logo';
import Page from '../components/styled/Page';
import Animated from 'react-native-reanimated';

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
      <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <Logo width={450} height={'100%'} />
      </Page>
      <Page />
      <Page />
      <Page />
      <Page />
      <Page />
      <Page style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>Last page</Text>
      </Page>
    </Animated.ScrollView>
  );
}

export default Home;
