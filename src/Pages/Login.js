import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from 'react-router-dom';
import { Redirect } from 'react-router';

import Button from '../Components/Button';
import { login } from '../Data/users';
import { newUser } from '../Data/users';


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
      newUser(user)
        .then((result) => {
          console.log(result)
        })
    } else {
      login(user)
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user))
          this.setState({
            user
          })
        }).catch((err) =>
          console.log(`it didnt work ${err}`)
        )
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user){
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
        <form
          onSubmit={this.submit}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
            {this.state.error && <div>{this.state.error}</div>}
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
  }
}

export default Login