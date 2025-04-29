'use client';

import { Product } from '@/types/product';

interface Props {
  products: Product[];
}

function Products({ products }: Props) {
  console.log(products);

  return (
    <div>
      <p>We are products</p>
    </div>
  );
}

export { Products };
