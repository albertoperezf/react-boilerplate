import featuresInitialState from 'reducers/initialStates/features/featuresInitialState';
import reduxWrapper from './reduxWrapper';

const initialStoreState = {
  features: {
    ...featuresInitialState,
  },
};

reduxWrapper(initialStoreState);
