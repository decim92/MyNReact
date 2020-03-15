import React from 'react';
import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MovieDetail from '../screens/MovieDetail';
import Initializer from '../screens/Initializer';
import {Provider} from 'react-redux';
import {store, persistor} from '../store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PersistGate} from 'redux-persist/integration/react';
import {setI18nConfig, translate} from './../utils/i18n';

export function registerScreens() {
  Navigation.registerComponent(
    'Login',
    () => props => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Login {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Login,
  );
  Navigation.registerComponent(
    'Home',
    () => props => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Home,
  );
  Navigation.registerComponent(
    'MovieDetail',
    () => props => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MovieDetail {...props} />
        </PersistGate>
      </Provider>
    ),
    () => MovieDetail,
  );
  Navigation.registerComponent(
    'Initializer',
    () => props => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Initializer {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Initializer,
  );
}

export const goLogIn = () => {
  setI18nConfig();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Login',
            },
          },
        ],
      },
    },
  });
};

export const goHome = () =>
  Promise.all([MaterialIcons.getImageSource('home', 25)]).then(([homeIcon]) => {
    setI18nConfig();
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
                    text: translate('home.tab_name'),
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
