/**
 * Created by jianghai on 2018/2/26.
 */
/**
 * @flow
 */
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Paper from 'material-ui/Paper';
import actions from '../actions';
import type {RouteType} from '../reducers/route';

type Props = {
  push: (RouteType)=>void,
}

const IndexPage = (props: Props) => (
  <div style={styles.page}>
    <Paper style={styles.paper} onClick={()=>{props.push('/Constellation');}}>
      <div style={styles.constellation}>星座</div>
    </Paper>
    <div style={styles.space}/>
    <Paper style={styles.paper}>
      <div>comming soon</div>
    </Paper>
  </div>
);

const styles = {
  page:{
    flex:1,
    width:'100vw',
    height:'100vh',
    backgroundColor:'#F3F3F3',
    paddingLeft:'3vw',
    paddingTop:'3vw',
  },
  paper:{
    width:'45vw',
    height:'45vw',
    alignItem:'center',
    justifyContent:'center',
    lineHeight:'45vw',
  },
  constellation:{
    flex:1,
    alignItem:'center',
    justifyContent:'center',
    backgroundColor:'#33CCCC',
    color:'white',
    fontSize:'10vw',
  },
  space:{
    width:'3vw',
    height:'3vw',
  },
};

function actionMaping(dispatch) {
  const {
    routeAction,
  } = actions;
  return {
    push: compose(dispatch, routeAction.pushRoute),
  };
}
export default connect(null, actionMaping)(IndexPage);