export const login = (user) => new Promise((resolve, reject) => {
  fetch(`https://shopping-cart-api-helio.herokuapp.com/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(user => {
      resolve(user.json())
    }).catch(err => {
      reject(err)
    })
})

export const newUser = (user) => new Promise((resolve, reject) => {
  fetch(`https://shopping-cart-api-helio.herokuapp.com/users`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(newLogin => {
      resolve(newLogin.json())
    }).catch(err => {
      reject(err)
    })
})