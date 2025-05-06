import '@/styles/globals.css';
import { Metadata } from 'next';

import { getProducts } from '../api/getProducts';

import { siteConfig } from '@/config/site';
import { NavBar } from '@/components/Navbar';
import { CategoryNav } from '@/components/CategoryNav';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getProducts.getAllProducts();

  const normalizeCategory = (category: string) =>
    category.trim().charAt(0).toUpperCase() +
    category.trim().slice(1).toLowerCase();

  const categories = Array.from(
    new Set(products.map((product) => normalizeCategory(product.category))),
  );

  return (
    <>
      <div className="relative flex flex-col h-screen">
        <NavBar categories={categories} />
        <CategoryNav categories={categories} />
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3"></footer>
      </div>
    </>
  );
}
