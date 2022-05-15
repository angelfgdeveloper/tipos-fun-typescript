type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number; // Hace tipos más directos & no se puede extender
// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// }

// Atributos generales
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];
products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});

const addProduct = (data: Product) => {
  products.push(data);
}
