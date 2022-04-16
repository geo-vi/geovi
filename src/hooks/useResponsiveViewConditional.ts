import {useWindowDimensions} from 'react-native';

export function useResponsiveViewConditional(conditional: [any, any]) {
  const {width} = useWindowDimensions();

  return width > 1350 ? conditional[0] : conditional[1];
}
