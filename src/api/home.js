import axios from 'react-native-axios';
import {TMDB_URL, TMDB_API_KEY} from 'react-native-dotenv';
import {TRENDING_ENDPOINT} from '../constants/Endpoints';

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
    .then(res => res.data);

export {fetchTrendingMovies};
