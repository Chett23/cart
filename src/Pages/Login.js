import React, { Component } from 'react';
// import {
//   // BrowserRouter as Router,
//   // Route,
//   // Switch,
//   Redirect
// } from 'react-router-dom';
import { Redirect } from 'react-router';

import Button from '../Components/Button';
import { login } from '../Data/users';
import { newUser } from '../Data/users';
import { auth } from '../App'


class Login extends Component {
  state = {
    userName: '',
    password: '',
    newuser: false,
  }


  submit = (event) => {
    event.preventDefault();
    let user = {
      userName: this.state.userName,
      password: this.state.password,
    }
    if (this.state.newuser) {
      console.log(`welcome ${user.userName}`)
      newUser(user)
        .then((result) => {
          console.log(result)
        })
    } else {
      console.log(`welcome back ${user.userName}`)
      login(user)
        .then(() => {
          auth.authenticate()
          console.log(`is authenticated: ${auth.isAuthenticated}`)
          if (auth.isAuthenticated) {
            console.log('success!')
            return (
              <Redirect to='/admin' />
            )
          }
        }).catch((err) =>
          console.log(`is authenticated: ${auth.isAuthenticated}`)
        )
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div
        style={{
          justifySelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: '500px',
          backgroundColor: 'darkgrey',
          borderRadius: '20px',
          margin: '10% auto',
          padding: '5px'
        }}
      >
        <h1>Admin Login</h1>
        <form
          onSubmit={this.submit}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
            <div style={{ width: '20%' }}>
              <label>User Name: </label>
            </div>
            <div style={{ width: '80%' }}>
              <input
                type={'text'}
                name={'userName'}
                value={this.state.userName}
                onChange={this.handleChange}
                placeholder={'User Name . . . '}
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
            <div style={{ width: '20%' }}>
              <label>Password: </label>
            </div>
            <div style={{ width: '80%' }}>
              <input
                type={'password'}
                name={'password'}
                value={this.state.password}
                onChange={this.handleChange}
                placeholder={'Password . . . '}
                style={{ width: '100%' }}
              />
            </div>
          </div>
          <div style={{ width: '80%', placeSelf: 'center', display: 'flex', flexDirection: 'row' }}>
            <Button type={'submit'} style={{ width: '75%' }}>Login</Button>
            <Button onClick={() => this.setState({ newuser: true })} style={{ width: '25%' }}>New User</Button>
          </div>
          <div><br /></div>
        </form>
      </div>
    )
  }
}

export default Login