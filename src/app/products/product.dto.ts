import { Product } from './product.model';

// Omitamos los datos a enviar -> Excluyo
// type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>;
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Lo contrario de Omit
type example = Pick<Product, 'color' | 'description'>

// Volvemos todos los campos opcionales
// Cambiar el Product por CreateProductDto
// El CreateProductDto quita 'id' | 'createdAt' | 'updatedAt' | 'category'
// Y reutilizamos el Dto
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Lo contrario de Partial -> Los pone todos obligatorios
type example2 = Required<Product>;


// export interface FindProductDto extends Readonly<Partial<Product>> {}
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

// A todos los parametros son de lectura
type example3 = Readonly<Product>;
