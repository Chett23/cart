export const login = (user) => new Promise((resolve, reject) => {
  fetch(`HTTP://localhost:5000/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(token => {
      resolve(token)
    }).catch(err => reject(err))
})

export const newUser = (user) => new Promise((resolve, reject) => {
  fetch(`HTTP://localhost:5000/users`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(newLogin => {
      resolve(newLogin)
    }).catch(reject(err => err))
})