import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {doFetchTrendingMovies} from '../actions/home';
import {getTrendingMovies} from '../selectors/home';
import TrendingItemCard from '../views/cells/TrendingItemCard';

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
  }

  render() {
    const {trendingMovies} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={trendingMovies}
          renderItem={({item}) => (
            <TrendingItemCard
              title={item.title}
              overview={item.overview}
              poster_image_url={item.poster_image_url}
            />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    trendingMovies: getTrendingMovies(state),
  };
};

const mapDispatchToProps = {
  doFetchTrendingMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
