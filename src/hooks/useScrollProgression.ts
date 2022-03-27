import {useContext} from 'react';
import {
  Extrapolation,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';
import VerticalPositionContext from '../context/VerticalPositionContext';

function useScrollProgression(index: number, height: number) {
  const y = useContext(VerticalPositionContext);

  return useDerivedValue(() => {
    return interpolate(
      y.value,
      [0, height * (index - 1), height * index],
      [0, 0, 100],
      {extrapolateRight: Extrapolation.CLAMP},
    );
  });
}

export default useScrollProgression;
