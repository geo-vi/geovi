import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from './Logo';

function BusinessCard() {
  return (
    <View style={styles.container}>
      <Logo width={'100%'} height={100} />
      <View style={styles.bottomLeftContainer}>
        <Text style={styles.name}>George IVANOV</Text>
        <Text>me@geovi.dev</Text>
      </View>
      <View style={styles.bottomRightContainer}>
        geovi.dev
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 500,
    height: 300,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLeftContainer: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  bottomRightContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default BusinessCard;
