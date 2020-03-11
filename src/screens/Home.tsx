import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {doFetchTrendingMovies, FetchTrendingMovies} from '../actions/home';
import {getTrendingMovies, TrendingMovie} from '../selectors/home';
import TrendingItemCard from '../views/cells/TrendingItemCard';

import {Navigation} from 'react-native-navigation';

export interface Props {
  doFetchTrendingMovies(): FetchTrendingMovies;
  componentId: string;
  trendingMovies: Array<TrendingMovie>;
}

class Home extends React.Component<Props> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Trending Movies',
        },
      },
    };
  }

  componentDidMount() {
    this.props.doFetchTrendingMovies();
  }

  onShowDetail = (id: number) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'MovieDetail',
        passProps: {
          movie_id: id,
        },
        options: {
          topBar: {
            title: {
              text: 'Detail',
            },
          },
        },
      },
    });
  };

  render() {
    const {trendingMovies} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={trendingMovies}
          renderItem={({item}) => (
            <TrendingItemCard item={item} onShowDetail={this.onShowDetail} />
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

const mapStateToProps = (state: any) => {
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
