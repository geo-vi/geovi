import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import {Pressable} from 'react-native';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SidebarSectionContainer = styled(AnimatedPressable)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export default SidebarSectionContainer;
