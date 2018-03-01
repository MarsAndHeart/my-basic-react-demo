/**
 * Created by jianghai on 2018/2/26.
 * @flow
 */
import React, {Component} from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import IndexPage from './pages/IndexPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import type {RouteType} from './reducers/route';
import actions from './actions';

const appRoutes = [
  { path: '/Page1',
    component: Page1
  },
  { path: '/Page2',
    component: Page2
  },
];

type Props = {
  history: any,
  route: Array<RouteType>,
  push: (RouteType)=>{},
  pop: ()=>{},
}

class Routers extends Component<Props>{
  constructor(props: Props){
    super(props);
    this.hasGoBack = false;
    this.hasGoForward = false;
  }
  hasGoBack: boolean
  hasGoForward: boolean
  componentDidMount(){
    const history = this.props.history;

    history.listen((location,action) => {
      let route = this.props.route;
      // console.log({
      //   location,
      //   action,
      //   route,
      // });
      if(action === 'POP'){
        if(!route.find(ele=>ele === location.pathname)){
          this.hasGoForward = true;
          this.props.push(location.pathname);
        }else{
          const lastRoute = route[route.length - 1];
          if(location.pathname !== lastRoute){
            // 如果最后一个路由和当前页面不同,则未更改路由
            this.hasGoBack = true;
            this.props.pop();
          }
        }
      }
    });
  }
  componentWillReceiveProps(nextProps){
    const history = this.props.history;
    const thisRouteArr = this.props.route;
    const nextRouteArr = nextProps.route;

    if(nextRouteArr.length > thisRouteArr.length){
      if(!this.hasGoForward){
        const targetRoute = nextRouteArr[nextRouteArr.length-1];
        history.push(targetRoute);
      }else{
        this.hasGoForward = false;
      }
    }else if(nextRouteArr.length < thisRouteArr.length){
      if(!this.hasGoBack){
        this.goBack();
      }else{
        this.hasGoBack = false;
      }
    }
  }
  goBack(){
    const history = this.props.history;
    history.goBack();
  }
  goBackAndPopRoute(){
    this.props.pop();
    this.goBack();
  }
  render(){
    return (
      <Router history={this.props.history}>
        <div>
          <Route exact path="/" component={IndexPage}></Route>
          {
            appRoutes.map(ele=>(
              <Route key={ele.path} path={ele.path} component={ele.component} ></Route>
            ))
          }
        </div>
      </Router>
    );
  }
}

function propsMapping(store){
  const { route, history } = store;
  return {
    route,
    history,
  };
}
function actionMaping(dispatch) {
  const {
    routeAction,
  } = actions;
  return {
    push: compose(dispatch, routeAction.pushRoute),
    pop: compose(dispatch, routeAction.pop),
  };
}

export default connect(propsMapping, actionMaping)(Routers);