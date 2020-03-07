/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/router/Router';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializer',
      },
    },
  });
});
