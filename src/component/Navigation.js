/**
 * Created by jianghai on 2018/3/1.
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import actions from '../actions';
import type {RouteType} from '../reducers/route';

type Props = {
  route: Array<RouteType>,
  pop: ()=>void,
  push: (RouteType)=>void,
}
const Navigation = (props: Props) => {
  return (
    <div>
      <div onClick={props.pop}>go back</div>
      <div onClick={()=>{props.push('/');}}>go indexPage</div>
      <div onClick={()=>{props.push('/Page1');}}>go page1</div>
      <div onClick={()=>{props.push('/Page2');}}>go page2</div>
      <div>{'route: '+props.route.join(', ')}</div>
    </div>
  );
};

function propsMaping(store){
  const {route} = store;
  return {
    route
  };
}
function actionMaping(dispatch) {
  const {
    routeAction,
  } = actions;
  return {
    pop: compose(dispatch, routeAction.pop),
    push: compose(dispatch, routeAction.pushRoute),
  };
}
export default connect(propsMaping, actionMaping)(Navigation);
