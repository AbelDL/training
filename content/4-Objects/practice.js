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
  name: 'ShoppingCart',
  size: 'Medium',
  allowedproducts: 10,
  color: 'Red',
  products: [
    { name: 'LAPTOP', price: 7500, quantity: '3' },
    { name: 'DVD', price: 800, quantity: '1' },
    { name: 'HOME THEATER', price: 4800, quantity: '2' },
    { name: 'SMARTPHONE', price: 10400, quantity: '4' },
    { name: 'PHONE CHARGER', price: 100, quantity: '2' },
    { name: 'USB fAN', price: 80, quantity: '10' },
  ],

  total: function () {
    return this.products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};
console.log(`\nLos productos de carrito son:\n`, cart.products, `      \n          `)
const precioAltoBajo = cart.products.sort((a, b) => {
  return a.quantity - b.quantity;
});

const listaDeProductos = cart.products.forEach((cart, index) => {
  console.log(`${index + 1}-${cart.name}-${cart.price}`)
});


console.log(`\nEl total de su compra es de: ${cart.total()}`);


