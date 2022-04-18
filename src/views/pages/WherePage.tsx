import React from 'react';
import Page from '../../components/styled/Page';
import Map from '../../components/Map';
import PageTypes from '../../types/PageTypes';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useResponsiveViewConditional} from '../../hooks/useResponsiveViewConditional';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import useScrollProgression from '../../hooks/useScrollProgression';
import Companies from '../../components/Companies';
import MobileCompanies from '../../components/MobileCompanies';

const {height} = Dimensions.get('window');

function WherePage({index}: PageTypes) {
  const responsivePageContainerStyle = useResponsiveViewConditional([
    styles.pageContainer,
    styles.columnPageContainer,
  ]);

  const ResponsiveCompanies = useResponsiveViewConditional([
    Companies,
    MobileCompanies,
  ]);

  const progress = useScrollProgression(index, height);

  // const animatedMyselfStyles = useAnimatedStyle(() => ({
  //   opacity: interpolate(progress.value, [0, 50], [0, 1], {
  //     extrapolateRight: Extrapolation.CLAMP,
  //   }),
  //   transform: [
  //     {
  //       translateX: interpolate(progress.value, [0, 50], [-500, 0], {
  //         extrapolateRight: Extrapolation.CLAMP,
  //       }),
  //     },
  //   ],
  // }));

  const titleStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(progress.value, [0, 50], [0, 1], {
        extrapolateRight: Extrapolation.CLAMP,
      }),
    }),
    [progress],
  );

  return (
    <Page>
      <Animated.Text style={[styles.whereLabel, titleStyle]}>
        Where have I worked at?
      </Animated.Text>
      <View style={responsivePageContainerStyle}>
        <View style={styles.contentContainer}>
          {/*<Animated.View style={[styles.bottomContainer, animatedMyselfStyles]}>*/}
          {/*  <Text style={styles.labelMyself}>*/}
          {/*    I like to internationalise and am open-minded for work*/}
          {/*    opportunities worldwide*/}
          {/*  </Text>*/}
          {/*</Animated.View>*/}
          <ResponsiveCompanies />
        </View>
        <Map index={index} />
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  columnPageContainer: {
    flexDirection: 'column',
    marginTop: 35,
    flex: 1,
  },
  contentContainer: {
    flex: 2,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  labelMyself: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
    textAlign: 'center',
    maxWidth: 250,
    alignSelf: 'center',
  },
  whereLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    margin: 20,
  },
  link: {
    marginRight: 10,
  },
});

export default WherePage;
