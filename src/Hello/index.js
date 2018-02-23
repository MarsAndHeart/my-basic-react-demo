import React, { Component } from 'react';

import text from './text.json';
import styles from './style.css';

class Hello extends Component {
  render() {
    return (
      <div className={styles.main}>
        {text.hello}
      </div>
    )
  }
}

export default Hello