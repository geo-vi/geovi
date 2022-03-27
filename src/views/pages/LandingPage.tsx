import React from 'react';
import Page from '../../components/styled/Page';
import Logo from '../../components/Logo';
import {StyleSheet} from 'react-native';
import PageTypes from '../../types/PageTypes';

/***
 * No need of the index for this one but using the types for structure
 * @constructor
 */
function LandingPage({}: PageTypes) {
  return (
    <Page style={styles.page}>
      <Logo width={450} height={'100%'} />
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
