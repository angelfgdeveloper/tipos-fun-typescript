import faker from '@faker-js/faker';

import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  // data.id = 'asdasdasdasd';
  // data.createdAt = new Date(1998, 1, 1);
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  products.push(newProduct);
  return newProduct;
};

// Product['id'] -> acceder al tipado por el indice -> ejemplo id number a string
// Lo resuelve dinamicamente Product['id']
export const updateProduct = (id: Product['id'], change: UpdateProductDto): Product => {
  const index = products.findIndex(product => product.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData, // Replicar cambio antiguos
    ...change // Replico los cambios nuevos
  }

  return prevData;
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // code - Solo me permite enviarlos
  // No me permite modificarlos - son solo de lectura
  // dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags = [];

  // dto.tags?.pop();
  // dto.tags?.push();

  const filterProducts = products.filter(product => product === dto);
  return filterProducts;
}
