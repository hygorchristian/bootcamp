import { combineReducers } from 'redux';
import { PodcastsReducer as podcasts } from './podcasts';
import { PlayerReducer as player } from './player';

export default combineReducers({
  podcasts,
  player,
});
