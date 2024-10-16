interface ProductItem {
  id: number;
  name: string;
}

export interface ParentProductItem {
  parentId: number;
  data: ProductItem[];
}
