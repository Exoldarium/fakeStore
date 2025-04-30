import { getProducts } from './api/getProducts';

import { Products } from '@/components/Product';

// TODO:
// Zustand to manage cart state.
// React Query to load products and categories.
// HeroUI for checkout forms, product cards, modals.
// React Hook Form for search, checkout/registration.
// next-intl for multilingual product categories.

// TODO: pagination

export default async function Home() {
  const products = await getProducts.getAllProducts();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6">
      <div className="inline-block text-center justify-center py-10 px-20">
        <Products products={products} />
      </div>
    </section>
  );
}
