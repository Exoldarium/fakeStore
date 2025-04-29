import { getProducts } from './api/getProducts';

import { Products } from '@/components/Product';

export default async function Home() {
  const products = await getProducts.getAllProducts();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <Products products={products} />
      </div>
    </section>
  );
}
