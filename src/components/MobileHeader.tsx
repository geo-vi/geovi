import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';

type MobileHeaderTypes = {
  onPressMenuButton: any;
};

function MobileHeader({onPressMenuButton}: MobileHeaderTypes) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={onPressMenuButton}>
        <Icon name={'menu'} size={34} color={'white'} />
      </Pressable>
      <Pressable style={styles.button}>
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
    borderRadius: 30,
  },
  buttonLabel: {
    fontWeight: 'bold',
  },
});

export default MobileHeader;
