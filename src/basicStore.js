/**
 * Created by jianghai on 2018/2/26.
 * @flow
 */
import {createStore} from 'redux';

import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;