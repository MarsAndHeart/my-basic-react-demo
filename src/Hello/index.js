/**
 * @flow
 */
import React, { Component } from 'react';

import text from './text.json';
import styles from './style.css';

const combineText = (a: string,b: string): string => {
  const left = a.split(' ')[0];
  return `${left} ${b} !`;
};

type Props = {
  name: string,
}
class Hello extends Component<Props> {
  render() {
    return (
      <div className={styles.main}>
        {combineText(text.hello,this.props.name)}
      </div>
    );
  }
}

export default Hello;