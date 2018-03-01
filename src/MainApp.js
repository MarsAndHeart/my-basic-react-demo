/**
 * Created by jianghai on 2018/2/24.
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';

import Routers from './Rooters';
import store from './basicStore';

const MainApp = () => (
  <Provider store={store}>
    <Routers/>
  </Provider>
);

export default MainApp;