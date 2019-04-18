export const getItems = () => new Promise ((resolve, reject) => {
  fetch('https://shopping-cart-api-helio.herokuapp.com/items')
    .then(items => {
      resolve(items.json())
    }).catch(reject)
})

export const submitToBackEnd = (item) => new Promise((resolve, reject) => {
  fetch('https://shopping-cart-api-helio.herokuapp.com/items', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  })
    .then(inventory => {
      resolve(inventory)
    }).catch(reject)
})

export const removeItemFromInventory = (id) => new Promise((resolve, reject) => {
  fetch(`https://shopping-cart-api-helio.herokuapp.com/${id}`, {
    method: 'DELETE',
  })
  .then(inventory => {
    resolve(inventory)
  }).catch(reject)
})
