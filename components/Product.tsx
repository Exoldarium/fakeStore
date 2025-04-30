'use client';

import { Card, CardBody, CardFooter, Image } from '@heroui/react';

import { Product } from '@/types/product';

interface Props {
  products: Product[];
}

function Products({ products }: Props) {
  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <Card
          key={product.id}
          isPressable
          shadow="sm"
          onPress={() => console.log('item pressed')}
        >
          <CardBody className="overflow-visible p-0 flex-none">
            <Image
              alt={product.title}
              className="w-full object-contain h-[180px]"
              radius="lg"
              shadow="sm"
              src={product.image}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-start items-start text-left flex flex-col">
            <p className="py-2 font-bold">{product.title}</p>
            <p className="text-default-500 py-2">${product.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export { Products };
