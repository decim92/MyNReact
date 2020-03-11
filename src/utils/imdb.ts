import {TMDB_IMG_URL, TMDB_API_KEY} from 'react-native-dotenv';

export const builtTMDBImageUrlFromPath = (path: string) =>
  `${TMDB_IMG_URL}/w500${path}?api_key=${TMDB_API_KEY}`;
