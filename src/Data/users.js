export const login = (user) => new Promise((resolve, reject) => {
  fetch(`http://localhost:5001/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(user),
  })
    .then(user => {
      resolve(user.json())
    }).catch(err => {
      reject(err)
    })
})

export const loggout = () => new Promise ((resolve, reject) => {
  fetch(`http://localhost:5001/loggout`,{
    metehod: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
  .then(()=>{
    localStorage.removeItem('user')
    resolve()
  }).catch(err => reject(err))
})

// export const login = (user) => new Promise((resolve, reject) => {
//   fetch(`https://shopping-cart-api-helio.herokuapp.com/users`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user)
//   })
//     .then(user => {
//       resolve(user.json())
//     }).catch(err => {
//       reject(err)
//     })
// })