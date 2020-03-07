import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import {Navigation} from 'react-native-navigation';
import {TMDB_URL} from 'react-native-dotenv';

export default class Home extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
    };
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Button onPress={this.logout} title="Sign Out" />
        <Button
          //   onPress={() => {
          //     Navigation.push(this.props.componentId, {
          //       component: {
          //         name: 'Screen2',
          //       },
          //     });
          //   }}
          title="View next screen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
