

export const getItems = async () => {
  const response = await fetch("https://mysterious-savannah-64434.herokuapp.com/items")
  return response.json()
}



// const Apple = '/images/Apple.jpg';
// const Books = '/images/Books.jpg';
// const Boots = '/images/Boots.jpg';
// const ChickenNuggets = '/images/ChickenNuggets.jpg';
// const Coat = '/images/Coat.jpg';
// const FirePlace = '/images/FirePlace.jpg';
// const IceCream = '/images/IceCream.jpg';
// const Ipad = '/images/Ipad.jpg';
// const Iphone = '/images/Iphone.jpg';
// const Jacket = '/images/Jacket.jpg';
// const Jewlery = '/images/Jewlery.jpg';
// const Knowledge = '/images/Knowledge.jpg';
// const Shirt = '/images/Shirt.jpg';
// const Shoes = '/images/Shoes.jpg';
// const Soda = '/images/Soda.jpg';


// export const inventory = [
//   {
//     name: 'Fire Place',
//     image: FirePlace,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'iPad',
//     image: Ipad,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'iPhone',
//     image: Iphone,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Chicken Nuggets',
//     image: ChickenNuggets,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Apples',
//     image: Apple,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Ice Cream',
//     image: IceCream,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Soda',
//     image: Soda,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Shoes',
//     image: Shoes,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Shirt',
//     image: Shirt,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Coat',
//     image: Coat,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Jacket',
//     image: Jacket,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Boots',
//     image: Boots,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Books',
//     image: Books,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Jewlery',
//     image: Jewlery,
//     price: 3.99,
//     qty: 0
//   },
//   {
//     name: 'Knowledge',
//     image: Knowledge,
//     price: 3.99,
//     qty: 0
//   }
// ]
