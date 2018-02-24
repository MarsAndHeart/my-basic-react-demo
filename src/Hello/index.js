import React from 'react'

import text from './text.json'
import styles from './style.css'

const Hello = () => (
  <div className={styles.main}>
    {text.hello}
  </div>
)

export default Hello
