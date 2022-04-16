import React from 'react';
import Page from '../../components/styled/Page';
import Logo from '../../components/Logo';
import {Dimensions, StyleSheet} from 'react-native';
import PageTypes from '../../types/PageTypes';
import {useResponsiveViewConditional} from '../../hooks/useResponsiveViewConditional';

const {width} = Dimensions.get('window');

/***
 * No need of the index for this one but using the types for structure
 * @constructor
 */
function LandingPage({}: PageTypes) {
  const responsiveWidth = useResponsiveViewConditional([
    0.4 * width,
    0.6 * width,
  ]);

  return (
    <Page style={styles.page}>
      <Logo width={responsiveWidth} height={'100%'} />
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LandingPage;
