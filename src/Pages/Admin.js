import React, { Component } from 'react';

import Button from '../Components/Button';
import { getItems } from '../Data/items';
import { submitToBackEnd } from '../Data/items';
import { removeItemFromInventory } from '../Data/items';


class Admin extends Component {
  state = {
    items: [],
    nameValue: '',
    priceValue: '',
    imageValue: '',
    edit: false,
    itemToEdit: '',
  }

  onSubmit = (event) => {
    event.preventDefault();
    const itemToAdd = { 'name': this.state.nameValue, 'price': this.state.priceValue, 'image': this.state.imageValue }
    if (this.state.edit === true) {
      itemToAdd.id = this.state.itemToEdit
    }
    submitToBackEnd(itemToAdd)
      .then(inventory => {
        this.setState({
          items: inventory,
          nameValue: '',
          priceValue: '',
          imageValue: '',
          edit: false,
          itemToEdit: '',
        })
      })
  }

  editItemInInventory = (item) => () => {
    this.setState({
      edit: true,
      itemToEdit: item.id,
      nameValue: item.name,
      priceValue: item.price,
      imageValue: item.image,
    })
  }

  removeFromInventory = (item) => () => {
    removeItemFromInventory(item.id)
      .then(inventory => {
        this.setState({
          items: inventory
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    getItems()
      .then(items => {
        this.setState({
          items
        })
      })
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          lexDirection: 'row',
          width: '90%',
          margin: '0 auto'
        }}
      >
        <div
          style={{
            width: '50%',
            margin: '2%'
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Add Item to Inventory</h2>
          <form
            onSubmit={this.onSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div>
              <label>Name: </label>
              <input
                type={'text'}
                name={'nameValue'}
                value={this.state.nameValue}
                onChange={this.handleChange}
                placeholder={'Item Name'}
                style={{ width: '80%', margin: '10px', }}
              />
            </div>
            <div>
              <label>Price: </label>
              <input
                type={'text'}
                name={'priceValue'}
                value={this.state.priceValue}
                onChange={this.handleChange}
                placeholder={'Item Price'}
                style={{ width: '81.5%', margin: '10px', }}
              />
            </div>
            <div>
              <label>Image Url: </label>
              <input
                type={'text'}
                name={'imageValue'}
                value={this.state.imageValue}
                onChange={this.handleChange}
                placeholder={'Item Url'}
                style={{ width: '73.5%', margin: '10px', }}
              />
            </div>
            <button type={'submit'} >Submit</button>
          </form>
        </div>
        <div
          style={{
            width: '50%',
            margin: '2%'
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Current Inventory</h2>
          <ul>
            {this.state.items.map((item, i) =>
              <div>
                <li key={i} style={{ margin: '5px 0px' }}>
                  {`Name: ${item.name}, Price: ${item.price}, ID: ${item.id}`}
                  <Button onClick={this.editItemInInventory(item)} style={{ margin: '0px 0px 0px 10px' }}>Edit</Button>
                  <Button onClick={this.removeFromInventory(item)} style={{ margin: '0px 0px 0px 10px' }}>Remove</Button>
                </li>
              </div>
            )}
          </ul>
        </div>
        {/* {
          this.state.edit === true ?
            <form
              onSubmit={this.onSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div>
                <label>Name: </label>
                <input
                  type={'text'}
                  name={'nameValue'}
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                  placeholder={'Item Name'}
                  style={{ width: '80%', margin: '10px', }}
                />
              </div>
              <div>
                <label>Price: </label>
                <input
                  type={'text'}
                  name={'priceValue'}
                  value={this.state.priceValue}
                  onChange={this.handleChange}
                  placeholder={'Item Price'}
                  style={{ width: '81.5%', margin: '10px', }}
                />
              </div>
              <div>
                <label>Image Url: </label>
                <input
                  type={'text'}
                  name={'imageValue'}
                  value={this.state.imageValue}
                  onChange={this.handleChange}
                  placeholder={'Item Url'}
                  style={{ width: '73.5%', margin: '10px', }}
                />
              </div>
              <button type={'submit'} >Submit</button>
            </form>
            :
            <div></div>
          } */}
      </div>
    )
  }
}

export default Admin;