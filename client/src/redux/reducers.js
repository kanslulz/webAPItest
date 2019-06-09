import { combineReducers } from 'redux';

import { NAVIGATE_TO_FEATURE } from './actions.js';


const initialState = {
  featureDescriptor: null,
};

function navigateToFeature(state = initialState, action) {
  if (action.type !== NAVIGATE_TO_FEATURE)
    return state;

  return { featureDescriptor: action.featureDescriptor };
}

export default combineReducers({
  navigateToFeature,
});
