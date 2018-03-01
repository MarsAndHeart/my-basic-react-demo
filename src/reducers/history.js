/**
 * Created by jianghai on 2018/2/27.
 * @flow
 */

import createHistory from 'history/createHashHistory';

const initHistoryObj = createHistory();

type Action = {
  type: string,
  payload: any,
}

const history = (historyObj: any = initHistoryObj, action: Action) => {
  if (action.type === 'history/set') {
    return action.payload;
  }
  return historyObj;
};

export default history;
