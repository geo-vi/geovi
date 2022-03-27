import {AppRegistry} from 'react-native';
import App from './src/App';

// Generate required css for fonts
import iconFont from 'react-native-vector-icons/Fonts/Feather.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Feather;
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
