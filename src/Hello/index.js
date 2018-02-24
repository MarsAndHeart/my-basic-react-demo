/**
 * @flow
 */
import React, { Component } from 'react';

import text from './text.json';
import styles from './style.css';

type Props = {
  name: string,
}
class Hello extends Component<Props> {
  render() {
    return (
      <div className={styles.main}>
        {text.hello + this.props.name}
      </div>
    );
  }
}

export default Hello;