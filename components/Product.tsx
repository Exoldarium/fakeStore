'use client';

import { Image } from '@heroui/react';

import { Product } from '@/types/product';

interface Props {
  products: Product[];
}

function Products({ products }: Props) {
  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-5 drop-shadow-lg rounded-md flex flex-col items-center justify-center"
        >
          <Image
            alt={product.description}
            // height={400}
            src={product.image}
            width={200}
            height={200}
            className="object-contain"
          />
          <div className="flex flex-col items-start justify-start text-left">
            <p className="p-2">{product.title}</p>
            <p className="p-2">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Products };
