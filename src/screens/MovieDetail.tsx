import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {doFetchMovieDetail, FetchMovieDetail} from '../actions/movie_detail';
import {getMovieDetail, Movie} from '../selectors/movie_detail';

export interface Props {
  doFetchMovieDetail(id: number): FetchMovieDetail;
  movie_id: number;
  componentId: string;
  movieDetail: Movie;
}

class MovieDetail extends React.Component<Props> {
  componentDidMount() {
    this.props.doFetchMovieDetail(this.props.movie_id);
  }

  render() {
    const {movieDetail} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movieDetail.backdrop_image_url}}
          style={styles.image}
        />
        <Text style={styles.text}>{JSON.stringify(movieDetail)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    flex: 2,
  },
});

const mapStateToProps = (state: any) => {
  return {
    movieDetail: getMovieDetail(state),
  };
};

const mapDispatchToProps = {
  doFetchMovieDetail,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieDetail);
