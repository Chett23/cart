export const login = (_id) => new Promise ((resolve, reject) => {
  fetch(`HTTP://localhost:5000/users/${_id}`)
    .then(userLogin => {
      resolve(userLogin)
    }).catch(reject(err=>err))
})