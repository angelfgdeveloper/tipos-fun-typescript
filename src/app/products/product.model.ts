import { BaseModel } from '../base.model';
import { Category } from '../category/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends BaseModel {
  // id: string | number;
  // createdAt: Date;
  // updatedAt: Date;
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
