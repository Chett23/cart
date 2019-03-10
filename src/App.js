import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { List } from './Components/List';
import { inventory } from './Data/data'


class App extends Component {
  state = {
    cart: []
  }

  addToCart = (index) => () => {
    if(inventory[index].qty === 0){
      const cart = [...this.state.cart, inventory[index]]
      localStorage.setItem('cart', JSON.stringify(cart))
      inventory[index].qty++
      this.setState({
        cart
      })
    } else {
     const cart = [...this.state.cart]
     localStorage.setItem('cart', JSON.stringify(cart))
     inventory[index].qty++
     this.setState({
       cart
     })
    }
  }

  removeFromCart = (index) => () => {
    if (this.state.cart[index].qty > 1){
      this.state.cart[index].qty--
      this.setState({
        cart: this.state.cart
      })
    } else {
      this.state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
      this.setState({
        cart: this.state.cart
      })
    }
  }

  componentDidMount() {
    const cartJSON = localStorage.getItem('cart')
    const cart = JSON.parse(cartJSON)
    this.setState({
      cart: cart || []
    })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <h1 style={{ order: '-1', width: '100%' }}>The Store</h1>
        <List
          items={inventory}
          functionality={this.addToCart}
          btnValue='Add to Cart'
        />
        <List
          items={this.state.cart}
          functionality={this.removeFromCart}
          title='Cart'
          btnValue='Remove item'
        />
      </div>
    );
  }
}

export default App;
