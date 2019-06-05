import { combineReducers } from 'redux';
import { PodcastsReducer as podcasts } from './podcasts';
import { ExampleReducer as examples } from './example';

export default combineReducers({
  podcasts,
  examples,
});
