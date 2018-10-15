import {createStore, combineReducers} from 'redux';
import headerReducer from './reducers/header-bar';
const store = createStore(
  combineReducers({
    header: headerReducer,
  }));

export default store;
