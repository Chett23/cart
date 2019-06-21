export const login = (user) => new Promise((resolve, reject) => {
  fetch(`https://shop-v1-helio.herokuapp.com/login`, {
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
  fetch(`https://shop-v1-helio.herokuapp.com/loggout`,{
    metehod: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
  .then(()=>{
    localStorage.removeItem('user')
    resolve()
  }).catch(err => reject(err))
})
