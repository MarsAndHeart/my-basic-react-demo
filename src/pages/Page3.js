// @flow
import * as React from 'react';
import Navigation from '../component/Navigation';

class Page3 extends React.Component{
  constructor(props){
    super(props);
  }
  // componentWillMount(){
  //   window.addEventListener('popState',pushEmptyPage);
  //   function pushEmptyPage(){
  //     history.pushState(null,null,`${location.href}?99?00`);
  //     console.log('not allow to back');
  //   }
  //   pushEmptyPage();
  // }
  render(){
    return(
      <div>
        <div>Page3</div>
        <Navigation/>
      </div>
    );
  }
}
export default Page3;