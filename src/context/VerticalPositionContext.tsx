import {createContext} from 'react';
import {SharedValue} from 'react-native-reanimated';

const VerticalPositionContext = createContext<SharedValue<number>>({value: 0});

export default VerticalPositionContext;
