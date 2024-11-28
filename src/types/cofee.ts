export interface Coffee {
  id: string;
  name: string;
  type: string;
  price: number;
  rating: number;
  reviews?: number;
  description?: string;
  image: string;
  sizes?: Array<'S' | 'M' | 'L'>;
  defaultSize?: 'S' | 'M' | 'L';
}

export interface Category {
  id: string;
  name: string;
}
