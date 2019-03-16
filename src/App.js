import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { List } from './Components/List';
import { getItems } from './Data/items';
import { getCart } from './Data/cart';
import { addItemToCart } from './Data/cart';
import { removeItemFromCart } from './Data/cart';


class App extends Component {
  state = {
    cart: [],
    items: []
  }


  addToCart = (item) => () => {
    const cart = [...this.state.cart, item]
    this.setState({
      cart
    })
    addItemToCart(item)
    .then(items => {
      this.setState({
        cart: items
      })
    })
  }

  removeFromCart = (item) => () => {
    removeItemFromCart(item.id)
      .then(cart => {
        this.setState({
          cart
        })
      })
  }

  componentDidMount(){
    getItems()
    .then(items => {
      this.setState({
        items
      })
    })
    getCart()
    .then(cart => {
      this.setState({
        cart
      })
    })
  }

  render() {
    return (
      <div style={{width: 'this.props.windowWidth'}}>
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
          }}
        >
          <List
            items={this.state.items}
            functionality={this.addToCart}
            btnValue='Add to Cart'
            title='Store'
          />
          <List
            items={this.state.cart}
            functionality={this.removeFromCart}
            title='Cart'
            btnValue='Remove item'
          />
        </div>
      </div>
    );
  }
}

export default App;



  // addToCart = (item) => () => {
  //   const cart = [...this.state.cart, this.state.item]
  //   this.setState({
  //     cart
  //   })
  //   addItemToCart(item)
  // }

  // addToCart = (index) => () => {
  //   if (!this.state.items[index].qty) {
  //     const cart = [...this.state.cart, this.state.items[index]]
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //     this.state.items[index].qty++
  //     this.setState({
  //       cart
  //     })
  //   } else {
  //     const cart = [...this.state.cart]
  //     localStorage.setItem('cart', JSON.stringify(cart))
  //     this.state.items[index].qty++
  //     this.setState({
  //       cart
  //     })
  //   }
  // }

  // addToCart = (index) => () => {
  //   const cart = [...this.state.cart, this.state.items[index]]
  //   localStorage.setItem('cart', JSON.stringify(cart))
  //   this.setState({
  //     cart
  //   })
  // }

  // removeFromCart = (index) => () => {
  //   removeItemFromCart()
  //     .then(this.setState({
  //       cart: this.state.cart
  //     }))

  //   if (this.state.cart[index].qty > 1) {
  //     this.setState({
  //       cart: this.state.cart
  //     })
  //   } else {
  //     this.state.cart.splice(index, 1)
  //     localStorage.setItem('cart', JSON.stringify(this.state.cart))
  //     removeItemFromCart
  //     .then(this.setState({
  //       cart: this.state.cart
  //     }))
  //   }
  // }

  // componentDidMount() {
  //   const cartJSON = localStorage.getItem('cart')
  //   const cart = JSON.parse(cartJSON)
  //   this.setState({
  //     cart: cart || []
  //   })
  // }

  // async componentDidMount() {
  //   try {
  //     const items = await getItems()
  //     this.setState({
  //       items
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  //   try{
  //     const cart = await getCart()
  //     this.setState({
  //       cart: cart || []
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }