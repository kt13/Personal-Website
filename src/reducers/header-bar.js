import {DIRECT_TO_PROJECT} from '../actions/header-bar';

const initialState = {
  projDir: false,
  aboutDir: false,
};

export default function headerReducer(state = initialState, action){
  if(action.type === DIRECT_TO_PROJECT){
    console.log('yes');
    return Object.assign({}, state, {
      projDir: true,
    });
  }
  return state;
}