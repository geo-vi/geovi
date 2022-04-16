import React from 'react';
import CustomBlurView from './CustomBlurView';
import {Modal, StyleSheet} from 'react-native';
import MobileHeader from './MobileHeader';

type MenuModalTypes = {
  visible: boolean;
  onCloseModal: any;
};

function MenuModal({visible, onCloseModal}: MenuModalTypes) {
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
      <MobileHeader onPressMenuButton={onCloseModal} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
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
});

export default MenuModal;
