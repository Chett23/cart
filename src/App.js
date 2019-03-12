import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { List } from './Components/List';
import { getItems } from './Data/data';
// import { inventory } from './Data/data'



class App extends Component {
  state = {
    cart: [],
    items: []
  }

  // addToCart = (index) => () => {
  //   if (inventory[index].qty === 0) {
  //     const cart = [...this.state.cart, inventory[index]]
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //     inventory[index].qty++
  //     this.setState({
  //       cart
  //     })
  //   } else {
  //     const cart = [...this.state.cart]
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //     inventory[index].qty++
  //     this.setState({
  //       cart
  //     })
  //   }
  // }

  addToCart = (index) => () => {
    const cart = [...this.state.cart, this.state.items[index]]
    localStorage.setItem('cart', JSON.stringify(cart))
    this.setState({
      cart
    })
  }

  removeFromCart = (index) => () => {
    if (this.state.cart[index].qty > 1) {
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

  async componentDidMount() {
    try {
      const items = await getItems()
      this.setState({
        items
      })
    } catch (err) {
      console.log(err)
    }

    const cartJSON = localStorage.getItem('cart')
    const cart = JSON.parse(cartJSON)
    this.setState({
      cart: cart || []
    })
  }

  render() {
    return (
      <div>
        <header
          style={{
            backgroundColor: 'rgb(140,140,140)',
            padding: '15px'

          }}
        ><h1>The Awesome Store</h1></header>
        <div
          style={{
            margin: '0',
            padding: '0',
            height: '100%',
            display: 'flex',
            backgroundColor: 'rgb(200,200,200)'
          }}
        >
          <List
            items={this.state.items}
            functionality={this.addToCart}
            btnValue='Add to Cart'
            title='Store'
            style={{width: 'auto'}}
          />
          <List
            items={this.state.cart}
            functionality={this.removeFromCart}
            title='Cart'
            btnValue='Remove item'
            style={{ textAlign: 'left', width: '350px', borderLeft: '1px solid black' }}
          />
        </div>
      </div>
    );
  }
}

export default App;
