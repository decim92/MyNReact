import React from 'react';
import {View, StyleSheet} from 'react-native';
import {goHome} from '../router/Router';

type Props = {};
export default class Initializer extends React.Component<Props> {
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
