'use client';

import { Button, Card, CardBody, CardFooter, Image, Link } from '@heroui/react';
import { useRouter } from 'next/navigation';

import { Product } from '@/types/product';
import { useCartStore } from '@/app/providers/cartStoreProvider';

interface Props {
  products: Product[];
}

function Products({ products }: Props) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  console.log(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <Card
          key={product.id}
          isPressable
          as={Link}
          shadow="sm"
          onPress={() => {
            router.push(`products/${product.id.toString()}`);
          }}
        >
          <CardBody className="overflow-visible p-0 flex-none">
            <Image
              isZoomed
              alt={product.title}
              className="w-full object-contain h-[180px]"
              radius="lg"
              shadow="sm"
              src={product.image}
              width="100%"
            />
          </CardBody>
          <div className="flex flex-row">
            <CardFooter className="text-small justify-start items-start text-left flex flex-col">
              <p className="py-2 font-bold">{product.title}</p>
              <p className="text-default-500 py-2">${product.price}</p>
            </CardFooter>
            <Button
              color="primary"
              type="button"
              className="self-center"
              onMouseDown={() =>
                addItem({
                  id: product.id,
                  quantity: 1,
                  productName: product.title,
                  price: product.price,
                })
              }
            >
              Add
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export { Products };
