import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {doFetchTrendingMovies} from '../actions/home';

// import {Navigation} from 'react-native-navigation';

type Props = {};
class Home extends React.Component<Props> {
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
    this.props.doFetchTrendingMovies();
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
  }

  render() {
    const {trendingMovies} = this.props;
    return (
      <View style={styles.container}>
        <Text>Hello from Home screen.</Text>
        <Text>
          Loading content...
          {/* {trendingMovies !== undefined
            ? JSON.stringify(trendingMovies)
            : 'Loading content...'} */}
        </Text>
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

const mapStateToProps = state => {
  return {
    trendingMovies: state.home.trendingMovies,
  };
};

const mapDispatchToProps = {
  doFetchTrendingMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
