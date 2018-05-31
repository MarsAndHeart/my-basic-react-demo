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
      <div style={styles.line} onClick={props.pop}>go back</div>
      <div style={styles.line} onClick={()=>{props.push('/');}}>go indexPage</div>
      <div style={styles.line} onClick={()=>{props.push('/Page1');}}>go page1</div>
      <div style={styles.line} onClick={()=>{props.push('/Page2');}}>go page2</div>
      <div style={styles.line} onClick={()=>{props.push('/Page3');}}>go page3</div>
      <div style={styles.line} onClick={()=>{props.push('/Page3?noback');}}>go page3 noBack</div>
      <div style={styles.route}>{'route: '+props.route.join(', ')}</div>
    </div>
  );
};

const styles = {
  line:{
    height:'44px',
    fontSize:'14px',
    lineHeight:'44px',
    backgroundColor:'#239999',
    color:'#FFF',
    margin:'10px',
    paddingLeft:'10px',
  },
  route:{
    margin:'20px',
  }
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
