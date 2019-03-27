import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import Admin from './Pages/Admin';
import Store from './Pages/Store';
import Tacos from './Pages/Tacos';
import NotFound from './Pages/NotFound';


class App extends Component {
  render() {
    return (
      <div
        style={{
          width: 'this.props.windowWidth',
          height: 'this.props.windowHeight',
          backgroundColor: 'lightgrey',
        }}>
        <Router>
          <ul
            style={{
              listStyle: 'none',
              display: 'inline-grid',
              gridTemplateColumns: '10px auto 100px 100px 10px',
              width: '100%',
              backgroundColor: 'grey',
            }}>
            <h1 style={{
              gridColumnStart: '2',
              gridColumnEnd: 'span 1',
            }}
            >The Awesome Store</h1>
            <li>
              <NavLink
                to='/'
                style={{
                  gridColumnStart: '3',
                  gridColumnEnd: 'span 1',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >Home</NavLink></li>
            <li>
              <NavLink
                to='/admin'
                style={{
                  gridColumnStart: '4',
                  gridColumnEnd: 'span 1',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >Admin</NavLink></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/admin" component={Admin} />
            <Route path="/Tacos" component={Tacos} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

