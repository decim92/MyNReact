import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {goHome} from '../router/Router';

export default class Initializer extends React.Component {
  async componentDidMount() {
    goHome();
  }

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
