import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { TOASTR_CONFIG } from 'constants/toastrConstants';
import Router from 'router/router';
import { configureStore } from 'store/configureStore';

export default async (initialStateStore) => {
  const app = document.getElementById('app');
  const store = configureStore(initialStateStore);

  if (app === null) {
    throw new Error('no app root element');
  }

  render(
    <Provider store={store}>
      <div>
        <ReduxToastr {...TOASTR_CONFIG} />
        <Router />
      </div>
    </Provider>,
    app,
  );
};
