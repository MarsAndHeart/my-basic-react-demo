/**
 * Created by jianghai on 2018/2/26.
 */
/**
 * @flow
 */

import type { RouteType } from '../reducers/route';

type Action = { type: 'route/push', route: RouteType | Array<RouteType> }
  | { type: 'route/pop' }
  | { type: 'route/replace', route: RouteType | Array<RouteType> }

const pushRoute = (route: RouteType | Array<RouteType>): Action => {
  return {
    type: 'route/push',
    route,
  };
};

const pop = (): Action => {
  return {
    type: 'route/pop',
  };
};

const replaceRoute = (route: RouteType): Action => {
  return {
    type: 'route/replace',
    route,
  };
};

export default {
  pushRoute,
  pop,
  replaceRoute,
};
