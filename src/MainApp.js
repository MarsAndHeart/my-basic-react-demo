/**
 * Created by jianghai on 2018/2/24.
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';
import store from './basicStore';

const MainApp = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

export default MainApp;