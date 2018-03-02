/**
 * Created by jianghai on 2018/2/26.
 * @flow
 */

export type RouteType = string
type Action = {
  type: string,
  route: RouteType,
}

const indexPage = '/';

const route = (routes: Array<RouteType> = [indexPage], action: Action) => {
  if (action.type === 'route/push') {
    let newRoutes = [].concat(routes);
    const lastRoute = newRoutes[newRoutes.length-1];
    if(lastRoute !== action.route){
      newRoutes.push(action.route);
    }
    return newRoutes;
  }
  if (action.type === 'route/pop') {
    let newRoutes = [].concat(routes);
    if(newRoutes.length>1){
      newRoutes.pop();
    }
    return newRoutes;
  }
  if (action.type === 'route/replace') {
    const newRoute = action.route;
    const newRoutes = routes.slice(0, routes.length - 1);
    newRoutes.push(newRoute);
    return newRoutes;
  }
  return routes;
};

export default route;
