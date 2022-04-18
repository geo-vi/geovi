import React from 'react';
import {Linking, Pressable, StyleSheet, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/dist/Feather';

function ContactBubbles() {
  function onPressMail() {
    Linking.openURL(`mailto:me@geovi.dev?subject=Inquiry`);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.bubble} onPress={onPressMail}>
        <Icon name={'mail'} size={40} />
      </Pressable>
      <Pressable style={styles.bubble}>
        <Icon name={'smartphone'} size={40} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bubble: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContactBubbles;
