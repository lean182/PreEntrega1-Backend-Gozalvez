const ProductManager = require("./productManager");

const producto = new ProductManager();

console.log(
  producto.addProduct(
    "Celular",
    "Xiaomi Redmi Note 13 Pro+",
    880000,
    "https://img1.com",
    "f45th4",
    15
  )
);

console.log(
  producto.addProduct(
    "Celular",
    "Xiaomi Poco F5 Pro",
    1110000,
    "https://img1.com",
    "f45th6",
    10
  )
);

console.log(producto.getProducts());

console.log(producto.getProductById(3));

