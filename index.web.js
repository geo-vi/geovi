import {AppRegistry} from 'react-native';
import App from './src/App';

// Generate required css for fonts
import featherIconFont from 'react-native-vector-icons/Fonts/Feather.ttf';
import fontAwesomeBrandsFont from 'react-native-vector-icons/Fonts/FontAwesome5_Brands.ttf';

import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2VvdmkiLCJhIjoiY2t0cjdueGloMTNlNjJub2FjNGpwcmhpcCJ9.gJycDTLo9wUE48akhs1UEQ';

const iconFontStyles = `@font-face {
  src: url(${featherIconFont});
  font-family: Feather;
}

@font-face {
  src: url(${fontAwesomeBrandsFont});
  font-family: FontAwesome5_Brands;
}`;

if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent('React Native Web', () => App);
AppRegistry.runApplication('React Native Web', {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});

// Create stylesheet for icons
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
