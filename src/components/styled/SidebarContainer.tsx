import styled from 'styled-components';
import {View} from 'react-native';

const SidebarContainer = styled(View)`
  position: absolute;
  max-width: 450px;
  width: 25%;
  top: 0;
  left: 10px;
  padding-top: 120px;
  z-index: 10;
`;

export default SidebarContainer;
