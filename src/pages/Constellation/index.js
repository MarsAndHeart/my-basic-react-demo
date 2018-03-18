/**
 * Created by jianghai on 2018/3/18.
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import actions from '../../actions';
import ConstellationPaper from './ConstellationPaper';

const arr = [
  {
    name:'白羊',
    date:'3.21-4.19',
    image:'',
  },
  {
    name:'金牛',
    date:'4.20-5.20',
    image:'',
  },
  {
    name:'双子',
    date:'5.21-6.21',
    image:'',
  },
  {
    name:'巨蟹',
    date:'6.22-7.22',
    image:'',
  },
  {
    name:'狮子',
    date:'7.23-8.22',
    image:'',
  },
  {
    name:'处女',
    date:'8.23-9.22',
    image:'',
  },
  {
    name:'天秤',
    date:'9.23-10.23',
    image:'',
  },
  {
    name:'天蝎',
    date:'10.24-11.22',
    image:'',
  },
  {
    name:'射手',
    date:'11.23-12.21',
    image:'',
  },
  {
    name:'摩羯',
    date:'12.22-1.19',
    image:'',
  },
  {
    name:'水瓶',
    date:'1.20-2.18',
    image:'',
  },
  {
    name:'双鱼',
    date:'2.19-3.20',
    image:'',
  },
];

type Props = {
  pop: ()=>void,
}

const Constellation = (props: Props) => (
  <div style={styles.page}>
    <IconButton onClick={props.pop}>
      <NavigationArrowBack/>
    </IconButton>
    <div style={styles.paperBox}>
      {
        arr.map(ele=>(
          <ConstellationPaper
            key={ele.name}
            name={ele.name}
            date={ele.date}
          />
        ))
      }
    </div>
  </div>
);

const styles = {
  page:{
    flexDirection:'column',
    width:'100vw',
    height:'100vh',
    backgroundColor:'#F3F3F3',
  },
  paperBox:{
    flexWrap:'wrap',
    justifyContent:'space-around',
  },
};

function actionMaping(dispatch) {
  const {
    routeAction,
  } = actions;
  return {
    pop: compose(dispatch, routeAction.pop),
  };
}
export default connect(null, actionMaping)(Constellation);
