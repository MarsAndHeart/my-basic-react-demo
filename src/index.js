/*
* @flow
*/
import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './MainApp';

const root = document.getElementById('root');
if(root !== null){
  ReactDOM.render(<MainApp />, root);
}