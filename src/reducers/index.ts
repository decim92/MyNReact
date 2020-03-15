import {combineReducers} from 'redux';
import home from './home';
import movie_detail from './movie_detail';
import login from './login';

export default combineReducers({home, movie_detail, login});
