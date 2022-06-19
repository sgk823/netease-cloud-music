import {StrictMode} from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import App from './App'

import './lib/reset.css'
import './styles/global.less'


ReactDom.render(
<StrictMode>
  <Router>
    <App />
  </Router>
</StrictMode>,
document.getElementById('root'))
