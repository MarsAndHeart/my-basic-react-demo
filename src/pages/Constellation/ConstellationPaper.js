/**
 * Created by jianghai on 2018/3/18.
 * @flow
 */

import React from 'react';
import Paper from 'material-ui/Paper';


type Props = {
  name: string,
  date: string,
}

const ConstellationPaper = (props: Props) => {
  return (
    <Paper style={styles.paper} circle>
      <div>{props.name}</div>
      <div>{props.date}</div>
    </Paper>
  );
};

const styles = {
  paper:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'30vw',
    height:'30vw',
    marginBottom:'3vw',
  },
};

export default ConstellationPaper;