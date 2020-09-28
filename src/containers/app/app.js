import React from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { toggleMenu } from './actions'

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

export const App = ({ toggleMenu, menuOpened }) => {
  let menuHTML

  if (menuOpened) {
    menuHTML = (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    )
  }

  return (
    <Router>
      <div>
        {menuHTML}

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <button onClick={() => toggleMenu()}>Toggle Menu</button>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({
  menuOpened: state.config.menuOpened
})

const mapDispatchToProps = {
  toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
