/**
 * Created by jianghai on 2018/3/2.
 * @flow
 */

import IndexPage from './IndexPage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

export default [
  {
    path: '/',
    component: IndexPage,
    exact: true,
  },
  {
    path: '/Page1',
    component: Page1
  },
  {
    path: '/Page2',
    component: Page2
  },
  {
    path: '/Page3',
    component: Page3
  },
];
