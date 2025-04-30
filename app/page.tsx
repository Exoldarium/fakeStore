import { getProducts } from './api/getProducts';

import { Products } from '@/components/Product';

// TODO:
// Zustand to manage cart state.
// React Query to load products and categories.
// HeroUI for checkout forms, product cards, modals.
// React Hook Form for search, checkout/registration.
// next-intl for multilingual product categories.

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
