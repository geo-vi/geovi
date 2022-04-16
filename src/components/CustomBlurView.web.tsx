import React from 'react';
import {View} from 'react-native';
import {CustomBlurViewTypes} from '../types/CustomBlurViewTypes';

// defaults from native library
const DEFAULT_BLUR_AMOUNT = 10;
const DEFAULT_BLUR_TYPE = 'dark';

const getBackgroundColor = (blurType: string) => {
  switch (blurType) {
    case 'light':
      return 'rgba(255,255,255,0.5)';
    case 'dark':
      return 'rgba(0,0,0,0.5)';
    default:
      // will just blur without any tinting.
      return 'transparent';
  }
};

const CustomBlurViewWeb = ({
  blurType = DEFAULT_BLUR_TYPE,
  blurAmount = DEFAULT_BLUR_AMOUNT,
  style,
}: CustomBlurViewTypes) => (
  <View
    style={[
      {
        backdropFilter: `blur(${blurAmount}px)`,
        backgroundColor: getBackgroundColor(blurType),
      },
      style,
    ]}
  />
);

export default CustomBlurViewWeb;
