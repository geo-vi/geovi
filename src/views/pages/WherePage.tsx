import React from 'react';
import Page from '../../components/styled/Page';
import Map from '../../components/Map';
import PageTypes from '../../types/PageTypes';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
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
    minWidth: 675,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
  labelMyself: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginLeft: 30,
  },
  link: {
    marginRight: 10,
  },
});

export default WherePage;
