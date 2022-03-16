import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Session from '/Users/chong/Desktop/workspace/start/go-postgres-react-starter/ui/src/pages/Session.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Session} />
      <Route path="/register.jsx" component={Register} />
      <Route path="/login.jsx" component={Login} />
      <Route path="/Users/chong/Desktop/workspace/start/go-postgres-react-starter/ui/src/pages/Session.jsx" component={Session} />
    </Router>
   
   )
}

export default App


