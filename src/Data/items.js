export const getItems = () => new Promise ((resolve, reject) => {
  fetch('HTTP://localhost:5000/items')
    .then(cart => {
      resolve(cart.json())
    }).catch(reject)
})

export const submitToBackEnd = (item) => new Promise((resolve, reject) => {
  fetch('HTTP://localhost:5000/items', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  })
    .then(inventory => {
      resolve(inventory.json())
    }).catch(reject)
})

export const removeItemFromInventory = (id) => new Promise((resolve, reject) => {
  fetch(`HTTP://localhost:5000/items/${id}`, {
    method: 'DELETE',
  })
  .then(inventory => {
    resolve(inventory.json())
  }).catch(reject)
})