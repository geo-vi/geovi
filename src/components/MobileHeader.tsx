import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type MobileHeaderTypes = {
  onPressMenuButton: any;
  onPressWorkTogether: any;
};

function MobileHeader({
  onPressMenuButton,
  onPressWorkTogether,
}: MobileHeaderTypes) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPressMenuButton}>
        <Icon name={'menu'} size={34} color={'white'} />
      </Pressable>
      <Pressable style={styles.button} onPress={onPressWorkTogether}>
        <Text style={styles.buttonLabel}>Let’s work together!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    padding: 20,
  },
  container: {
    position: 'absolute',
    top: 0,
    paddingTop: getStatusBarHeight(),
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
});

export default MobileHeader;
