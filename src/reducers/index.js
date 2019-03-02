import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import featuresReducer from 'reducers/features/featuresReducer';

export const reducers = {
  /* Reducers to add features to the application */
  features: featuresReducer,
  /* Reducers to manage Toastr notifications */
  toastr: toastrReducer,
};

export default combineReducers(reducers);
