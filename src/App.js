import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom';


import Admin from './Pages/Admin';
import Store from './Pages/Store';
import Tacos from './Pages/Tacos';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';


class App extends Component {
  state = {
    path: '',
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: 'lightgrey',
          height: '100%'
        }}>
        <Router>
          <ul
            style={{
              listStyle: 'none',
              display: 'inline-grid',
              gridTemplateColumns: '20px auto 100px 100px 20px',
              width: '100%',
              backgroundColor: 'grey',
            }}>
            <li
              style={{
                gridColumnStart: '2',
                gridColumnEnd: 'span 1',
                alignSelf: 'center'
              }}
            >
              <NavLink
                to='/'
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <h1>{`The Awesome Store`}</h1>
              </NavLink>
            </li>
            <li
              style={{
                placeSelf: 'center'
              }}
            >
              <NavLink
                to='/'
                style={{
                  gridColumnStart: '3',
                  gridColumnEnd: 'span 1',
                  textDecoration: 'none',
                  color: 'black'
                }}
              >Home</NavLink></li>
            <li
              style={{
                placeSelf: 'center'
              }}>
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
            <Route path="/login" component={Login} />
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/tacos" component={Tacos} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}


export const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default App;