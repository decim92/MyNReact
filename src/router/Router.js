import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store, persistor} from '../store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
  Promise.all([MaterialIcons.getImageSource('home', 25)]).then(([homeIcon]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'App',
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Home',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Home',
                    icon: homeIcon,
                  },
                },
              },
            },
            // {
            //   component: {
            //     name: 'navigation.playground.TextScreen',
            //     passProps: {
            //       text: 'This is tab 2',
            //     },
            //     options: {
            //       bottomTab: {
            //         text: 'Tab 2',
            //         icon: require('../images/two.png'),
            //         testID: 'SECOND_TAB_BAR_BUTTON',
            //       },
            //     },
            //   },
            // },
          ],
        },
      },
    });
  });
