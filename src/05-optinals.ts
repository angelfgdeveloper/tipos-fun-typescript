export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number // ? optinals al final
) => {
  return {
    id,
    stock: stock ?? 10, // Valores default
    isNew: isNew ?? true, // Valores default
  }
}

// Problematica de -> ||
// 0 === false
// '' === false
// false === false

// ?? -> Resuelve la problematica de ||

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);

const p3 = createProduct(3, false, 0);
console.log(p3);
