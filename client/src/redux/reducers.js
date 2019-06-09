import { combineReducers } from 'redux';

import { NAVIGATE } from './actions.js';


const initialState = {
  path: '/',
};

function navigate(state = initialState, action) {
  if (action.type !== NAVIGATE)
    return state;
  
  return { path: action.path };
}

export default combineReducers({
  navigate,
});
