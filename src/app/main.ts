import faker from '@faker-js/faker';
import {
  addProduct,
  findProducts,
  products,
  updateProduct } from './products/product.services';

for (let i = 0; i < 50; i++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    stock: faker.datatype.number({min: 10, max: 100}),
    categoryId: faker.datatype.uuid()
  });
}

console.log({products});

const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
  // createdAt: new Date(),
});

console.log({product});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as', 'as'],
});
