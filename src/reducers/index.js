import { combineReducers } from 'redux';
import counter from './counter';
import recipes from './recipes';

export default combineReducers({
  counter,
  recipes,
});
