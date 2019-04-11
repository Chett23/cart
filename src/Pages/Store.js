import React, { Component } from 'react';
import '../App.css';

import { List } from '../Components/List';
import { getItems } from '../Data/items';
import { getCart } from '../Data/cart';
import { addItemToCart } from '../Data/cart';
import { removeItemFromCart } from '../Data/cart';


class Store extends Component {
  state = {
    cart: [],
    items: []
  }


  addToCart = (item) => () => {
    addItemToCart(item)
      .then(() => {
        getCart()
          .then(items =>
            this.setState({
              cart: items
            }))
      })
  }

  removeFromCart = (item) => () => {
    removeItemFromCart(item._id)
      .then(() => {
        getCart()
          .then((cart) =>
            this.setState({
              cart
            })
          )
      })
  }

  componentDidMount() {
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
      <div>
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
            style={{ width: '350px' }}
          />
        </div>
      </div>
    );
  }
}

export default Store;