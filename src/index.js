import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './Hello'

const MainApp = () => (
  <div>
    <Hello />
  </div>
)

ReactDOM.render(<MainApp />, document.getElementById('root'))
