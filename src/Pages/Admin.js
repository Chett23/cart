import React, { Component } from 'react';
import { Redirect } from 'react-router';


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
    user: null,
    loading: true
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.user) {
      const itemToAdd = { 'name': this.state.nameValue, 'price': this.state.priceValue, 'image': this.state.imageValue }
      if (this.state.edit === true) {
        itemToAdd._id = this.state.itemToEdit
      }
      submitToBackEnd(itemToAdd)
        .then(() => {
          getItems()
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
        })
    } else {
      alert('You do not have the authorization, please sign in.')
    }
  }

  editItemInInventory = (item) => () => {
    getItems()
      .then(items => {
        const tempIndex = items.findIndex((el) => el.name === item.name)
        this.setState({
          edit: true,
          itemToEdit: items[tempIndex]._id,
          nameValue: items[tempIndex].name,
          priceValue: items[tempIndex].price,
          imageValue: items[tempIndex].image,
        })
      })
  }

  removeFromInventory = (item) => () => {
    removeItemFromInventory(item._id)
      .then(() => {
        getItems()
          .then(inventory =>
            this.setState({
              items: inventory
            }))
      })
  }

  returnToAdd = () => this.setState({
    edit: false,
    itemToEdit: '',
    nameValue: '',
    priceValue: '',
    imageValue: '',
  })

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      getItems()
        .then(items => {
          this.setState({
            user,
            loading: false,
            items
          })
        })
    }else{
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    return this.state.loading || this.state.user
      ?
      <div
        style={{
          display: 'flex',
          lexDirection: 'row',
          height: '100%',
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
          {this.state.edit === true ? <h2 style={{ textAlign: 'center' }}>Edit Item in Inventory</h2> : <h2 style={{ textAlign: 'center' }}>Add Item to Inventory</h2>}
          <form
            onSubmit={this.onSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
              <div style={{ width: '20%' }}>
                <label>Name: </label>
              </div>
              <div style={{ width: '80%' }}>
                <input
                  type={'text'}
                  name={'nameValue'}
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                  placeholder={'Item Name'}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
              <div style={{ width: '20%' }}>
                <label>Price: </label>
              </div>
              <div style={{ width: '80%' }}>
                <input
                  type={'text'}
                  name={'priceValue'}
                  value={this.state.priceValue}
                  onChange={this.handleChange}
                  placeholder={'Item Price'}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
              <div style={{ width: '20%' }}>
                <label>Image Url: </label>
              </div>
              <div style={{ width: '80%' }}>
                <input
                  type={'text'}
                  name={'imageValue'}
                  value={this.state.imageValue}
                  onChange={this.handleChange}
                  placeholder={'Item Url'}
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            {this.state.edit === true
              ?
              <div>
                <Button type={'submit'} style={{ width: '70%' }}>Edit Item</Button>
                <Button onClick={this.returnToAdd} style={{ width: '30%' }} >Return to add</Button>
              </div>
              :
              <Button type={'submit'} >Submit</Button>}
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
              <li key={i} style={{ margin: '5px 0px' }}>
                {`Name: ${item.name}, Price: ${item.price}, Id: ${item._id}`}
                <Button onClick={this.editItemInInventory(item)} style={{ margin: '0px 0px 0px 10px' }}>Edit</Button>
                <Button onClick={this.removeFromInventory(item)} style={{ margin: '0px 0px 0px 10px' }}>Remove</Button>
              </li>
            )}
          </ul>
        </div>
      </div>
      :
      <Redirect to='/admin/login' />
  }
}

export default Admin;