/**
 * @flow
 * Created by jianghai on 2018/6/5.
 */
import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
// import createHistory from 'history/createHashHistory';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import uuidv4 from 'uuid/v4';

const styles = {
  page: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
};

type ILine = {
  children: any
};
const Line = ({ children, ...otherProps }: ILine) => (
  <div style={{ margin: 10 }} {...otherProps}>
    {children}
  </div>
);

type IAAA = {
  push: Function
};
const AAA = ({ push }: IAAA) => (
  <div style={{ ...styles.page, backgroundColor: '#339999' }}>
    <div style={{ height: 50 }} />
    <Line>this is aaa</Line>
    <Line
      onClick={() => {
        push('/bbb');
      }}
    >
      go bbb
    </Line>
  </div>
);

type IBBB = {
  push: Function
};
const BBB = ({ push }: IBBB) => (
  <div style={{ ...styles.page, backgroundColor: '#993399' }}>
    <div style={{ height: 50 }} />
    <Line>this is bbb</Line>
    <Line
      onClick={() => {
        push('/ccc');
      }}
    >
      go ccc
    </Line>
  </div>
);

const CCC = () => <div style={{ ...styles.page, backgroundColor: '#999933' }}>this is ccc</div>;

const IndexPage = () => <div>this is IndexPage</div>;

const history = createHistory();

const routeConfig = [
  {
    pathname: '/',
    component: IndexPage
  },
  {
    pathname: '/aaa',
    component: AAA
  },
  {
    pathname: '/bbb',
    component: BBB
  },
  {
    pathname: '/ccc',
    component: CCC
  }
];

type Route = {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state: Object,
  index: number,
  component: any
};
type State = {
  currentIndex: number,
  routes: Array<Route>,
  action: string
};
class MyRouter extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentIndex: 0,
      routes: [
        {
          hash: '',
          key: '',
          pathname: '/',
          search: '',
          state: {},

          index: 0,
          component: IndexPage
        }
      ],
      action: 'push'
    };
    this.unlisten = null;
  }
  unlisten: any;
  componentWillMount() {
    // console.log(history);

    let nextComponent = null;
    let obj = routeConfig.find((ele) => ele.pathname === history.location.pathname);
    if (obj && obj.component) {
      nextComponent = obj.component;
    }

    const firstPage = {
      ...history.location,

      // key:uuidv4(),
      index: 0,
      component: nextComponent
    };

    this.setState({
      routes: [firstPage]
    });

    this.startListen();
  }
  startListen = () => {
    // console.log('startListen');
    this.unlisten = history.listen((location, action) => {
      // console.log({action,location});
      let { routes, currentIndex } = this.state;

      let nextComponent = null;
      let obj = routeConfig.find((ele) => ele.pathname === location.pathname);
      if (obj && obj.component) {
        nextComponent = obj.component;
      }

      if (action === 'PUSH') {
        const nextIndex = currentIndex + 1;
        const nextRoutes = routes.slice(0, nextIndex).concat({
          ...location,
          // key:uuidv4(),
          index: nextIndex,
          component: nextComponent
        });
        this.setState({
          currentIndex: nextIndex,
          routes: nextRoutes,

          action: 'push'
        });
      } else if (action === 'REPLACE') {
        routes[currentIndex] = {
          ...location,
          // key:uuidv4(),
          index: currentIndex,
          component: nextComponent
        };
        this.setState({
          routes,
          action: 'replace'
        });
      } else if (location.key) {
        const targetRoute = routes.find((ele) => ele.key === location.key) || routes[0];
        this.setState({
          currentIndex: targetRoute.index,
          action: 'pop'
        });
      } else {
        this.setState({
          currentIndex: 0,
          action: 'pop'
        });
      }
    });
  };
  stopListen = () => {
    // console.log('stopListen');
    this.unlisten();
  };
  render() {
    // console.log(this.state);
    const { key, component } = this.state.routes[this.state.currentIndex];
    const props = {
      name: `page${key}`,
      push: (pathname) => {
        history.push(pathname);
      },
      goBack: () => {
        history.goBack();
      }
    };
    return (
      <div>
        {/*<div style={{margin:10}} onClick={()=>{console.log(this.state);}}>hello</div>
        <div style={{margin:10}} onClick={this.startListen}>startListen</div>
        <div style={{margin:10}} onClick={this.stopListen}>stopListen</div>

        <Link pathname="/aaa"/>
        <Link pathname="/bbb"/>
        <Link pathname="/ccc"/>*/}

        {/*<div>
          <div>route</div>
          {currentRoute.component}
        </div>*/}

        <TransitionGroup>
          <CSSTransition key={key} timeout={350} classNames="fade">
            {React.createElement(component, props)}
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default MyRouter;

// const Link = ({pathname}) => (
//   <div
//     style={{margin:10,backgroundColor:'#f4f4f4'}}
//     onClick={()=>{history.push(pathname);}}
//   >
//     {pathname}
//   </div>
// );
