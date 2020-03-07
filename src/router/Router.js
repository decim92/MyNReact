import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'Home',
    () => require('../screens/Home').default,
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
