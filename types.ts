
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'laddbox' | 'snabbladdare';
  features: string[];
  image: string;
  imagePrompt?: string;
}

export interface Solution {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface CartItem extends Product {
  quantity: number;
}
