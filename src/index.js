import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import page1 from './page1'
import page2 from './page2'
import './index.css'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/> 
      <Route path="/1" component={page1}/> 
      <Route path="/2" component={page2}/>  
  </Router>
), document.getElementById('root'))


