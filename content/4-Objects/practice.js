// 1. Create a Cart object
//    - It can hold "products"
//    - It can list all the products inside it in the format "name" - "price"
//    - It can sum the total

const products = [
  { name: 'Kindle', price: 199 },
  { name: 'iPad', price: 299 },
  { name: 'Fire', price: 89 },
];

const cart = {
  name: 'shoppingCart',
  size: 'medium',
  allowedproducts: 10,
  color: 'red',
  products: [
    { name: 'laptop', price: 4500 },
    { name: 'dvd', price: 800 },
    { name: 'mini stereo', price: 3800 },
    { name: 'smartphone', price: 2400 },
    { name: 'phone charger', price: 100 },
    { name: 'USB fan', price: 80 },
  ],

  total: function () {
    return this.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  },

  list: function () {
    for (const p of this.products) {
      console.log(`${p.name} - ${p.price}`);
    }
  }
};

console.log(cart.total());
cart.list();


// 1. Create a Cart object
//    - It can hold "products"
//    - It can list all the products inside it in the format "name" - "price"
//    - It can sum the total

// const products = [
//   { name: 'Kindle', price: 199 },
//   { name: 'iPad', price: 299 },
//   { name: 'Fire', price: 89 },
// ];

// const cart = {
//   name: 'ShoppingCart',
//   size: 'Medium',
//   allowedproducts: 10,
//   color: 'Red',
//   products: [
//     { name: 'LAPTOP', price: 7500, quantity: '3' },
//     { name: 'DVD', price: 800, quantity: '1' },
//     { name: 'HOME THEATER', price: 4800, quantity: '2' },
//     { name: 'SMARTPHONE', price: 10400, quantity: '4' },
//     { name: 'PHONE CHARGER', price: 100, quantity: '2' },
//     { name: 'USB fAN', price: 80, quantity: '10' },
//   ],

//   total: function () {
//     return this.products.reduce((total, product) => {
//       return total + product.price * product.quantity;
//     }, 0);
//   }
// };
// const precioAltoBajo = cart.products.sort((a, b) => {
//   return a.quantity - b.quantity;
// });

// const listaDeProductos = cart.products.forEach((cart, index) => {
//   console.log(`${index + 1}-${cart.name} - $${cart.price}\n Cantidad:${cart.quantity}`)
// });


// console.log(`\n "TICKET" \n El total de su compra es de: ${cart.total()}`);


