import React from 'react';
import {Provider} from 'react-redux';

import Main from './src/page/Main';
import {store} from './store';

const AppProvider = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default AppProvider;
