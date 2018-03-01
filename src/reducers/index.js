/**
 * Created by jianghai on 2018/2/26.
 * @flow
 */
import {combineReducers} from 'redux';

import loading from './loading';
import history from './history';
import route from './route';


const rootReducer = combineReducers({
  loading,
  history,
  route,
});

export default rootReducer;