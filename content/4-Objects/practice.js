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
  }
};

console.log (cart.total());

