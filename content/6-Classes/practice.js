// Discounts in cart
// Basic class structure
// Amazon Books
class Book {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}

const lotr1 = new Book("LOTR: The fellowship of the ring", 9.99, 2);
const lotr2 = new Book("LOTR: The two towers", 9.99, 3);
const lotr3 = new Book("LOTR: The return of the king", 13.99, 4);

class Cart {
    constructor() {
        this.items = []
    }

    // Add product to cart
    addProduct(product) {
        this.items.push(product);

    }

    // product - quantity - price
    listProducts() {
        console.log("ticket");
        this.items.forEach((product, index) => {
            console.log(`${index + 1} - ${product.name}`);
        });
    }
    // Cart total
    total() {
        return this.items.reduce((total, product) => {
            return total + product.price - product.discount;
        }, 0);
    }
}




// This should work
const cart = new Cart();
cart.addProduct(lotr1);
cart.addProduct(lotr2);
cart.addProduct(lotr3);
cart.listProducts();
console.log(cart.total());
