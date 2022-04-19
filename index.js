/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2VvdmkiLCJhIjoiY2t0cjdueGloMTNlNjJub2FjNGpwcmhpcCJ9.gJycDTLo9wUE48akhs1UEQ',
);

AppRegistry.registerComponent(appName, () => App);
