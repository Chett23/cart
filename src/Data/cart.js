export const getCart = () => new Promise ((resolve, reject) => {
  fetch('https://shop-v1-helio.herokuapp.com/cart')
    .then(cart => {
      resolve(cart.json())
    }).catch(reject)
})

export const addItemToCart = (item) => new Promise ((resolve, reject) => {
  fetch('https://shop-v1-helio.herokuapp.com/cart', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(item)
  })
    .then(response => {
      resolve(response)
      // resolve(response.json())
    }).catch(reject)
})

export const removeItemFromCart = (id) => new Promise ((resolve, reject) => {
  fetch(`https://shop-v1-helio.herokuapp.com/cart/${id}`, {
    method: 'DELETE'
  })
    .then(cart => {
      resolve(cart)
      // resolve(cart.json())
    }).catch(reject)
})