import React from 'react';
import ReactDOM from 'react-dom';
import featuresInitialState from 'reducers/initialStates/features/featuresInitialState';
import App from './App';
import reduxWrapper from './reduxWrapper';

const initialStoreState = {
  features: {
    ...featuresInitialState,
  },
};

reduxWrapper(initialStoreState);

ReactDOM.render(<App />, document.getElementById('app'));
