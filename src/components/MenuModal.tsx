import React from 'react';
import CustomBlurView from './CustomBlurView';
import {Modal, StyleSheet, Pressable, Text, View} from 'react-native';
import MobileHeader from './MobileHeader';

type MenuModalTypes = {
  visible: boolean;
  onCloseModal: any;
  onPageTravel: any;
  onPressWorkTogether: any;
};

function MenuModal({
  visible,
  onCloseModal,
  onPageTravel,
  onPressWorkTogether,
}: MenuModalTypes) {
  function onPressMenuButton(index: number) {
    onPageTravel(index);
    onCloseModal();
  }

  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      presentationStyle={'overFullScreen'}
      onRequestClose={onCloseModal}
      transparent={true}>
      <CustomBlurView
        blurType={'dark'}
        blurAmount={10}
        style={styles.container}
      />
      <View style={styles.mainContainer}>
        <Pressable onPress={() => onPressMenuButton(1)}>
          <Text style={styles.link}>Who?</Text>
        </Pressable>
        <Pressable onPress={() => onPressMenuButton(2)}>
          <Text style={styles.link}>What?</Text>
        </Pressable>
        <Pressable onPress={() => onPressMenuButton(3)}>
          <Text style={styles.link}>Where?</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.link} onPress={() => onPressMenuButton(4)}>
            How?
          </Text>
        </Pressable>
      </View>
      <MobileHeader
        onPressMenuButton={onCloseModal}
        onPressWorkTogether={onPressWorkTogether}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(49,49,49,0.5)',
  },
  pressable: {
    position: 'absolute',
    left: 20,
    top: 20,
    padding: 20,
  },
  link: {
    color: 'white',
    fontSize: 30,
    margin: 25,
  },
  mainContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuModal;
