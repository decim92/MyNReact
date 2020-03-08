/**
 * @format
 */
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
