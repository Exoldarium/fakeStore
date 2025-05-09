import { notFound } from 'next/navigation';

import { toNormalizedProductEntry } from '@/utils/normalizeApiEntry';

async function getAllProducts() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok)
    throw new Error('Something went wrong while fetching all products');

  const rawData = await res.json();

  if (Array.isArray(rawData) && rawData.length !== 0) {
    const normalizedProducts = rawData.map((data) =>
      toNormalizedProductEntry(data),
    );

    return normalizedProducts;
  } else {
    notFound();
  }
}

async function getSingleProduct(params: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${params}`);

  if (!res.ok)
    throw new Error('Something went wrong while fetching a single product');

  const rawData = await res.json();

  const normalizedProducts = toNormalizedProductEntry(rawData);

  if (!normalizedProducts) {
    notFound();
  }

  return normalizedProducts;
}

export const getProducts = {
  getAllProducts,
  getSingleProduct,
};
