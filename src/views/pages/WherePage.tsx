import React from 'react';
import Page from '../../components/styled/Page';
import Map from '../../components/Map';
import PageTypes from '../../types/PageTypes';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {useResponsiveViewConditional} from '../../hooks/useResponsiveViewConditional';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useScrollProgression from '../../hooks/useScrollProgression';

const {height} = Dimensions.get('window');

function WherePage({index}: PageTypes) {
  const responsivePageContainerStyle = useResponsiveViewConditional([
    styles.pageContainer,
    styles.columnPageContainer,
  ]);

  const progress = useScrollProgression(index, height);

  const animatedMyselfStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(progress.value, [50, 80], [-1000, 0], {
          extrapolateRight: Extrapolation.CLAMP,
        }),
      },
    ],
  }));

  return (
    <Page style={responsivePageContainerStyle}>
      <View style={styles.contentContainer}>
        <Animated.View style={[styles.bottomContainer, animatedMyselfStyles]}>
          <Text style={styles.labelMyself}>
            I like to internationalise and am open-minded for work opportunities
            worldwide
          </Text>
        </Animated.View>
        <View style={styles.companies}>
          <Image
            source={{
              uri: 'https://www.ikarussecurity.com/wp-content/uploads/2020/10/IKARUS-logo-claim-300x78-2.png',
            }}
            style={{width: 300, height: 78, tintColor: 'white'}}
          />
          <Image
            source={{
              uri: 'https://assets-global.website-files.com/60ab78ff992bc560336cb1ea/61111f040216b3c7ba1f9e79_Group%2028227.svg',
            }}
            style={{width: 288, height: 54}}
          />
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/67278693?s=200&v=4',
            }}
            style={{width: 60, height: 60, tintColor: 'white'}}
          />
        </View>
      </View>
      <Map index={index} />
    </Page>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
  },
  columnPageContainer: {
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 2,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  labelMyself: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },
  link: {
    marginRight: 10,
  },
  companies: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
});

export default WherePage;
