import styled from 'styled-components';
import {Pressable} from 'react-native';

const WorkTogetherButton = styled(Pressable)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding-horizontal: 15px;
  padding-vertical: 10px;
  background-color: white;
  border-radius: 5px;

  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25px;
  shadow-radius: 3.84px;

  elevation: 5deg;
`;

export default WorkTogetherButton;
