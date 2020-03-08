import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store, persistor} from '../store';

export function registerScreens() {
  Navigation.registerComponentWithRedux(
    'Home',
    () => require('../screens/Home').default,
    Provider,
    store,
    persistor,
  );
  Navigation.registerComponent(
    'Initializer',
    sc => require('../screens/Initializer').default,
  );
}

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
