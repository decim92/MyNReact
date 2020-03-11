const axios = require('react-native-axios');
import {TMDB_URL, TMDB_API_KEY} from 'react-native-dotenv';
import {TRENDING_ENDPOINT, MOVIE_DETAIL_ENDPOINT} from '../constants/Endpoints';
import {ObjectResponse} from '../types';

const headers = () => {
  return {
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, User',
    'Access-Control-Allow-Origin': '*',
  };
};

const fetchTrendingMovies = () =>
  axios
    .get(`${TMDB_URL}${TRENDING_ENDPOINT}`, {
      params: {api_key: TMDB_API_KEY},
      headers: headers(),
    })
    .then((res: ObjectResponse) => res.data);

const fetchMovieDetail = (id: number) =>
  axios
    .get(`${TMDB_URL}${MOVIE_DETAIL_ENDPOINT}/${id}`, {
      params: {api_key: TMDB_API_KEY},
      headers: headers(),
    })
    .then((res: ObjectResponse) => res.data);

export {fetchTrendingMovies, fetchMovieDetail};
