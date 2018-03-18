/**
 * Created by jianghai on 2018/2/24.
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRouter from './AppRouter';
import store from './basicStore';

const MainApp = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <AppRouter/>
    </MuiThemeProvider>
  </Provider>
);

export default MainApp;