export const getItems = () => new Promise((resolve, reject) => {
  fetch('https://shop-v1-helio.herokuapp.com/items')
    .then(items => {
      resolve(items.json())
    }).catch(reject)
})

export const submitToBackEnd = (item) => new Promise((resolve, reject) => {
  fetch('https://shop-v1-helio.herokuapp.com/items', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
    credentials: "include"
  })
    .then(inventory => {
      resolve(inventory)
    }).catch(reject)
})

export const removeItemFromInventory = (id) => new Promise((resolve, reject) => {
  fetch(`https://shop-v1-helio.herokuapp.com/items/${id}`, {
    method: 'DELETE',
    credentials: "include",
  })
    .then(inventory => {
      resolve(inventory)
    }).catch(reject)
})
