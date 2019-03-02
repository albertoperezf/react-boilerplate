import featuresInitialState from 'reducers/initialStates/features/featuresInitialState';
import createReducer from 'reducers/create';

export default createReducer(featuresInitialState, {
  SET_FEATURE: (
    state,
    action,
  ) => ({
    ...state,
    features: action.features,
  }),
  SET_FEATURE_COUNT: (
    state,
    action,
  ) => ({
    ...state,
    featuresCount: action.featuresCount,
  }),
});
