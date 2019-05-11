import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';
import { Redirect } from 'react-router';

import Button from '../Components/Button';
import { login } from '../Data/users';


class Login extends Component {
  state = {
    userName: '',
    password: '',
    user: null,
    newuser: false,
    error: null
  }


  submit = (event) => {
    event.preventDefault();
    let user = {
      userName: this.state.userName,
      password: this.state.password,
    }
    if (this.state.newuser) {
      user.newUser = true
      login(user)
        .then(({ userRedacted, token }) => {
          localStorage.setItem("user", JSON.stringify(userRedacted))
          this.setState({
            newUser: false,
            user: userRedacted,
          })
        })
    } else {
      login(user)
        .then(({ userResponse, token }) => {
          localStorage.setItem("user", JSON.stringify(userResponse))
          this.setState({
            user: userResponse
          })
        }).catch((err) => {
          console.log(`it didnt work ${err}`)
          this.setState({
            error: "Login Failed, PLease try again."
          })
        }

        )
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.setState({
        user
      })
    }
  }

  render() {
    return this.state.user
      ?
      <Redirect to='/admin' />
      :
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
        {this.state.error && <span style={{ textAlign: 'center', color: 'red' }}>{this.state.error}</span>}
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
                onFocus={() => this.setState({ error: null})}
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
                onFocus={() => this.setState({ error: null, password: '' })}
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
  }
}

export default Login;