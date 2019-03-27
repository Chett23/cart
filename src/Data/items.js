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

// export const inventory = [
//   {
//     name: 'Fire Place',
//     image: '/images/FirePlace.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'iPad',
//     image: '/images/Ipad.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'iPhone',
//     image: '/images/Iphone.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Chicken Nuggets',
//     image: '/images/ChickenNuggets.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Apples',
//     image: '/images/Apple.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Ice Cream',
//     image: '/images/IceCream.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Soda',
//     image: '/images/Soda.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Shoes',
//     image: '/images/Shoes.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Shirt',
//     image: '/images/Shirt.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Coat',
//     image: '/images/Coat.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Jacket',
//     image: '/images/Jacket.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Boots',
//     image: '/images/Boots.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Books',
//     image: '/images/Books.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Jewlery',
//     image: '/images/Jewlery.jpg',
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Knowledge',
//     image: '/images/Knowledge.jpg',
//     price: 3.99,
//     qty: 0
//   }
// ]
